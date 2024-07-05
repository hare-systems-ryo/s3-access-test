// ----------------------------------------------------------------------------

export default defineEventHandler(async (event) => {
  return String(process.env.APP_LOCATION);
});
