/* ----------------------------------------------------------------------------
server\strage\bucket.ts
// ----------------------------------------------------------------------------
// [ server > strage > * ]
import {} from '~/server/strage/bucket';
----------------------------------------------------------------------------- */

import { Readable } from "stream";
import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
// ----------------------------------------------------------------------------
import { StopWatch } from "~/com/lib/stop-watch";
// ----------------------------------------------------------------------------
const ct = `server:strage:bucket.ts`;
// ----------------------------------------------------------------------------
export const S3Backet = {
  Point1: "Point1",
  Point2: "Point2",
  Point3: "Point3",
} as const;
type S3Backet = (typeof S3Backet)[keyof typeof S3Backet];
// ----------------------------------------------------------------------------
export const GetClient = (s3Backet: S3Backet) => {
  const credentials = {
    accessKeyId: String(process.env.S3_ACCESS_KEY),
    secretAccessKey: String(process.env.S3_SECRET_KEY),
  };
  //
  switch (s3Backet) {
    case S3Backet.Point1: {
      const endpoint = String(process.env.S3_POINT1_ENDPOINT);
      const region = String(process.env.S3_POINT1_REGION);
      const backetName = String(process.env.S3_POINT1_BUCKET_NAME);
      const config: any = { region, credentials };
      if (endpoint) {
        config.endpoint = endpoint;
      }
      return { client: new S3Client(config), backetName };
    }
    case S3Backet.Point2: {
      const endpoint = String(process.env.S3_POINT2_ENDPOINT);
      const region = String(process.env.S3_POINT2_REGION);
      const backetName = String(process.env.S3_POINT2_BUCKET_NAME);
      const config: any = { region, credentials };
      if (endpoint) {
        config.endpoint = endpoint;
      }
      return { client: new S3Client(config), backetName };
    }
    case S3Backet.Point3: {
      const endpoint = String(process.env.S3_POINT3_ENDPOINT);
      const region = String(process.env.S3_POINT3_REGION);
      const backetName = String(process.env.S3_POINT3_BUCKET_NAME);
      const config: any = { region, credentials };
      if (endpoint) {
        config.endpoint = endpoint;
      }
      return { client: new S3Client(config), backetName };
    }
  }
  throw new Error("undifined s3Backet " + s3Backet);
};
// ----------------------------------------------------------------------------
const StreamToBuffer = (stream: Readable): Promise<Buffer> => {
  return new Promise((resolve, reject) => {
    const chunks: any = [];
    stream.on("data", (chunk: any) => chunks.push(chunk));
    stream.on("error", reject);
    stream.on("end", () => resolve(Buffer.concat(chunks)));
  });
};

export const GetObjectToBuffer = async (
  s3Backet: S3Backet,
  fileKey: string,
  showLog: boolean = false
) => {
  const sw = new StopWatch();
  const { client, backetName } = GetClient(s3Backet);
  const input = {
    Bucket: backetName,
    Key: fileKey,
  };
  const command = new GetObjectCommand(input);
  const data = await client.send(command);
  if (!(data.Body instanceof Readable)) {
    return null;
  }
  if (showLog) {
    console.log(
      `S3::Buffer \n > backetName=${backetName} \n > fileKey=${fileKey} \n > time = ${sw.GetTime()}`
    );
  }
  const bodyContents = await StreamToBuffer(data.Body);
  client.destroy();
  return bodyContents;
};

// ----------------------------------------------------------------------------
/**
 * ファイル取得用の証明書付きURLを発行する。
 */
export const GetObjectPresignedUrl = async (
  s3Backet: S3Backet,
  fileKey: string,
  option: any = {},
  showLog: boolean = false
) => {
  const sw = new StopWatch();
  const { client, backetName } = GetClient(s3Backet);
  const input = {
    Bucket: backetName,
    Key: fileKey,
    ...option,
  };
  const command = new GetObjectCommand(input);
  const url = await getSignedUrl(client, command, { expiresIn: 3600 });
  if (showLog) {
    console.log(
      `S3::Presigned Url \n > backetName=${backetName} \n > fileKey=${fileKey} \n > time = ${sw.GetTime()}`
    );
  }
  return url;
};
