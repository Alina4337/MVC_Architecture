import { Router } from "express";

import router from "./student/index.js";
import newRouter from "./new/index.js";
import subjectRouter from "./subject/index.js";
import productRouter from "./product/index.js";
import invoiceRouter from "./invoice/index.js";
const allRoutes = Router();
allRoutes.use("/", subjectRouter);
allRoutes.use("/", router);
allRoutes.use("/", newRouter);
allRoutes.use("/", productRouter);
allRoutes.use("/", invoiceRouter);

export default allRoutes;
