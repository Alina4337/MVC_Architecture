import subjectModel from "../../model/subject/index.js";

const subjectController = {
  create: async (req, res) => {
    try {
      const { subName, subTeacher } = req.body;
      const subject = await subjectModel.create({
        subName,
        subTeacher,
      });
      return res.status(201).json({ msgg: "std created", subject });
    } catch (err) {
      return res.status(500).json({
        message: "Something bad happened",
      });
    }
  },
  get: async (req, res) => {
    try {
      const subjects = await subjectModel.findAll();
      res.json({ subjects });
    } catch (error) {
      return res.status(500).json({
        message: "Something bad happened",
      });
    }
  },

  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const subject = await subjectModel.findOne({ where: { id } });
      if (!subject) {
        return res.status(404).json({ msg: " std not found" });
      }
      subject.destroy();
      res.json("deleted");
    } catch (err) {
      res.status(500).json(err);
    }
  },
  getSingle: async (req, res) => {
    try {
      const { id } = req.params;
      const subject = await subjectModel.findOne({ where: { id } });
      if (!subject) {
        res.status(404).json({ msg: " std not found" });
      }
      res.json({ subject });
    } catch (err) {
      res.status(500).json(err);
    }
  },

  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { subName, subTeacher } = req.body;
      const subject = await subjectModel.findOne({ where: { id } });
      if (!subject) {
        return res.json({ msg: "not found" });
      }
      subject.subName = subName;
      subject.subTeacher = subTeacher;
      await subject.save();
      res.json({ subject });
    } catch (err) {
      res.json(err);
    }
  },
};
export default subjectController;
