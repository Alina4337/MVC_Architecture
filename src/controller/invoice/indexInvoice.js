import invoiceModel from "../../model/invoice/invoiceModel.js";
const invoiceController = {
  create: async (req, res) => {
    try {
      const { price, quantity } = req.body;
      const invoice = await invoiceModel.create({ price, quantity });
      res.json({ msg: "created", invoice });
    } catch (err) {
      console.log("err", err);
    }
  },
};
export default invoiceController;
