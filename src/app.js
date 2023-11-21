import express from "express";

import allRoutes from "./routes/index.js";
import { connectDb } from "./db/config.js";
import dbInit from "./db/init.js";
const app = express();
app.use(express.json());
connectDb();
dbInit()
  .then(() => console.log("db synced"))
  .catch((err) => console.log("db not synced", err));
///app.use(express.json()); middleware in Express.js is designed to parse incoming JSON data from the request body and convert it into a
//JavaScript object. It is essentially middleware that automatically parses the request body if
//it contains JSON data with the "Content-Type" header set to "application/json".
app.use(express.json()); //ye har type get post sb pr use ho ga express ko json ka ni pta to osy parse krty
//JSON.stringify(), the resulting string is a JSON-formatted string. Similarly, when you parse a JSON-formatted
//string using JSON.parse(), you get back a JavaScript object
// app.use("/", student);
// app.use("/", productRouter);
app.use("/", allRoutes);
app.listen("3300", (err) => {
  if (err) {
    console.log("error");
  } else {
    console.log("server is listening at http://localhost:3300");
  }
});
