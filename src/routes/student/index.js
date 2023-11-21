import { Router } from "express";
import studentController from "../../controller/student/index.js";
const router = Router();
router.post("/create", studentController.create);
router.get("/students", studentController.get);
router.delete("/delete/:id", studentController.delete);
router.get("/student/:id", studentController.getSingle);
router.put("/update/:id", studentController.update);
export default router;
