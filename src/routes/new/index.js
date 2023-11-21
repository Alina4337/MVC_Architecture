import { Router } from "express";
import newController from "../../controller/new/index.js";
const newRouter = Router();
newRouter.get("/new", newController.getNew);
newRouter.get("/new/:id", newController.getSingle);

newRouter.post("/create", newController.createNew);
newRouter.delete("/delete", newController.delete);
newRouter.put("/update/:id", newController.update);
export default newRouter;
