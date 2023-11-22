import { Router } from "express";
import unitController from "../../controller/product/index.js";
import pdController from "../../controller/product/productController.js";
const unitRouter = Router();
unitRouter.post("/createUnit", unitController.create);
unitRouter.post("/createProduct", pdController.create);
export default unitRouter;
