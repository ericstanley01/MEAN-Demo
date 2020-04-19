// require("dotenv").config();
declare var process: { env: { [key: string]: string } };
export const environment = {
  production: true,
  apiURL: "https://heroku-mean-demo-backend.herokuapp.com/api",
};
