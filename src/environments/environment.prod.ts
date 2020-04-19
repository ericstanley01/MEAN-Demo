declare var process: { env: { [key: string]: string; } };
export const environment = {
  production: true,
  apiURL: process.env.API_URL
};
