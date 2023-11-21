import studentModel from "../../model/student/index.js";

const studentController = {
  create: async (req, res) => {
    try {
      const { firstName, lastName } = req.body;
      const student = await studentModel.create({
        firstName,
        lastName,
      });
      return res.status(201).json({ msgg: "std created", student });
    } catch (err) {
      return res.status(500).json({
        message: "Something bad happened",
      });
    }
  },
  get: async (req, res) => {
    try {
      const students = await studentModel.findAll();
      res.json({ students });
    } catch (error) {
      return res.status(500).json({
        message: "Something bad happened",
      });
    }
  },

  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const student = await studentModel.findOne({ where: { id } });
      if (!student) {
        return res.status(404).json({ msg: " std not found" });
      }
      student.destroy();
      res.json("deleted");
    } catch (err) {
      res.status(500).json(err);
    }
  },
  getSingle: async (req, res) => {
    try {
      const { id } = req.params;
      const student = await studentModel.findOne({ where: { id } });
      if (!student) {
        res.status(404).json({ msg: " std not found" });
      }
      res.json({ student });
    } catch (err) {
      res.status(500).json(err);
    }
  },

  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { firstName, lastName } = req.body;
      const student = await studentModel.findOne({ where: { id } });
      if (!student) {
        return res.json({ msg: "not found" });
      }
      student.firstName = firstName;
      student.lastName = lastName;
      await student.save();
      res.json({ student });
    } catch (err) {
      res.json(err);
    }
  },
};
export default studentController;
