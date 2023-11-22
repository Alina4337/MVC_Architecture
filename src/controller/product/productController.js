import productModel from "../../model/product/product.js";
import unitModel from "../../model/product/unit.js";

const pdController = {
  create: async (req, res) => {
    try {
      const { name } = req.body;

      // Create a product with a specific unitId (assuming 2 for this example)
      const product = await productModel.create({ name, unitId: 2 });

      // Retrieve the created product along with its associated unit
      const data = await productModel.findByPk(product.id, {
        include: [unitModel], // Include unitModel in the query
      });

      res.json({ data, msg: "Product created" });
    } catch (err) {
      console.error("Error creating product:", err);
      res.status(500).json({ message: "Something bad happened" });
    }
  },
};

export default pdController;
