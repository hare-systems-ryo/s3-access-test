// ----------------------------------------------------------------------------

import { GetObjectPresignedUrl, S3Backet } from "~/server/strage/bucket";

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
    const presignedUrl = await GetObjectPresignedUrl(point, fileKey, {}, true);
    return sendRedirect(event, presignedUrl, 302);
  } catch (err: any) {
    console.log(err);
    throw createError({
      statusCode: 404,
      statusMessage: "Not Found",
    });
  }
});
