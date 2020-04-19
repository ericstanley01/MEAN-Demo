// require("dotenv").config();
declare var process: { env: { [key: string]: string } };
export const environment = {
  production: true,
  apiURL: process.env.PRODUCTION_API_ENDPOINT,
};
