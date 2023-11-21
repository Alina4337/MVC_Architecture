import { Router } from "express";

import subjectController from "../../controller/subject/index.js";
const subjectRouter = Router();
subjectRouter.post("/create", subjectController.create);
subjectRouter.get("/subjects", subjectController.get);
subjectRouter.delete("/delete/:id", subjectController.delete);
subjectRouter.get("/subject/:id", subjectController.getSingle);
subjectRouter.put("/subjects/:id", subjectController.update);

export default subjectRouter;
