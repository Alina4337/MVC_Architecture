import invoiceModel from "../../model/invoice/invoiceModel.js";
import invoiceProductModel from "../../model/invoiceProduct/invoiceProductModel.js";
const invoiceProductsController = {
  create: async (req, res) => {
    try {
      const { name } = req.body;
      const invoiceProduct = await invoiceProductModel.create({
        name,
        invoiceId: 1,
      });
      const data = await invoiceProductModel.findByPk(invoiceProduct.id, {
        include: [invoiceModel],
      });
      res.json({ msg: "craeted", data });
    } catch (err) {
      console.log("err", err);
    }
  },
};
export default invoiceProductsController;
