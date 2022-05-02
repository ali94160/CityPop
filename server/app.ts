import express from "express";
import routes from "./routes/routes";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = 4000;

app.use(routes);

app.listen(port, () => {
  console.log(`Server is running on port ${process.env.PORT}.`);
});
