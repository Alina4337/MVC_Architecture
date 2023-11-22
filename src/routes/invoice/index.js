import { Router } from "express";
import invoiceController from "../../controller/invoice/indexInvoice.js";
import invoiceProductsController from "../../controller/invoice/indexProducts.js";

const invoiceRouter = Router();

// Use router.get(), router.post(), etc. to define your routes, not router.use()
invoiceRouter.post("/createInvoice", invoiceController.create);
invoiceRouter.post("/createInvoiceProduct", invoiceProductsController.create);

export default invoiceRouter;
