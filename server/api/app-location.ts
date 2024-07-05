// ----------------------------------------------------------------------------

export default defineEventHandler(async (event) => {
  return String(process.env.VERCEL_REGION);
});
