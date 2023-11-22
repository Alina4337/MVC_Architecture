// import productModel from "../../model/product/product.js";
import unitModel from "../../model/product/unit.js";

const unitController = {
  create: async (req, res) => {
    try {
      const { name } = req.body;
      const unit = await unitModel.create({ name });
      res.json({ unit, msg: "unit created" });
    } catch (err) {
      console.error("Error creating product:", err);
      res.status(500).json({ message: "Something bad happened" });
    }
  },
};

export default unitController;
