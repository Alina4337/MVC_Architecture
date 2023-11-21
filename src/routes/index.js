import { Router } from "express";

import router from "./student/index.js";
import newRouter from "./new/index.js";
import subjectRouter from "./subject/index.js";
const allRoutes = Router();
allRoutes.use("/", subjectRouter);
allRoutes.use("/", router);
allRoutes.use("/", newRouter);
export default allRoutes;
