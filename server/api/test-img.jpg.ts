// ----------------------------------------------------------------------------

import { GetObjectToBuffer, S3Backet } from "~/server/strage/bucket";

const convertAreaToPoint = (area: string) => {
  if (area === "tokyo") {
    return S3Backet.Point1;
  }
  if (area === "osaka") {
    return S3Backet.Point2;
  }
  if (area === "singapore") {
    return S3Backet.Point3;
  }
  return S3Backet.Point1;
};

export default defineEventHandler(async (event) => {
  try {
    const fileKey = "test-image.jpg";
    // ----------------------------------------------------------------------------
    const query = getQuery(event);
    const area = String(query.area) || "";
    const point = convertAreaToPoint(area);
    // ----------------------------------------------------------------------------
    const buffer = await GetObjectToBuffer(point, fileKey, true);
    if (buffer === null) {
      return createError({
        statusCode: 404,
        statusMessage: "Not Found",
      });
    }
    event.node.res.statusCode = 200;
    event.node.res.setHeader("Content-Type", "image/jpeg");
    event.node.res.end(new Uint8Array(buffer));
  } catch (err: any) {
    console.log(err);
    throw createError({
      statusCode: 404,
      statusMessage: "Not Found",
    });
  }
});
