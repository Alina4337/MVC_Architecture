import practiceModel from "../model/practice/index.js";
import studentModel from "../model/student/index.js";
import subjectModel from "../model/subject/index.js";
practiceModel;
const dbInit = async () => {
  await studentModel.sync({
    alter: true,
    force: false,
  }),
    await subjectModel.sync({
      alter: true,
      force: false,
    }),
    await practiceModel.sync({
      alter: true,
      force: false,
    });
};
export default dbInit;
