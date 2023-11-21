const newArray = [{ id: 1, name: "alina", marks: "20" }];

//get All
const newController = {
  getNew: (req, res) => {
    return res.json({ newArray, msg: "new here" });
  },
  //create New
  createNew: (req, res) => {
    //push method in JavaScript adds one or more elements to the end of an
    // array and returns the new length of the array. It doesn't return the actual elements that were pushed.
    newArray.push(req.body);
    const newCreated = req.body;
    res.json({ newCreated, msg: "created" });
  },

  //delete
  delete: (req, res) => {
    const nameToDelete = req.body.name;
    const index = newArray.findIndex((obj) => obj.name === nameToDelete);
    if (getIndex === -1) {
      return res.status(404).json({
        msg: "Object not found",
      });
    } else {
      newArray.splice(index, 1);
      return res.json({
        msg: "deleted",
      });
    }
  },

  //getSingle
  getSingle: (req, res) => {
    const { id } = req.params;

    const getNew = newArray.find((item) => item.id === parseInt(id));

    if (!getNew) {
      return res.status(404).json({
        msg: "Item not found",
      });
    } else {
      return res.json({
        getNew,
      });
    }
  },

  //update
  update: (req, res) => {
    const id = req.params.id;

    const getIndex = newArray.findIndex((new1) => new1.id === id);
    if (getIndex === -1) {
      return res.status(404).json({
        msg: "Object not found",
      });
    } else {
      newArray[getIndex] = {
        ...newArray[getIndex],
        name: req.body.name ? req.body.name : newArray[getIndex].name,
        marks: req.body.marks ? req.body.marks : newArray[getIndex].marks,
      };
      return res.json({
        msg: "updated",
        updatedNew: newArray[getIndex],
      });
    }
  },
};
export default newController;
//sdas
