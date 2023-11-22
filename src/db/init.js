import invoiceModel from "../model/invoice/invoiceModel.js";
import invoiceProductModel from "../model/invoiceProduct/invoiceProductModel.js";
import practiceModel from "../model/practice/index.js";
import productModel from "../model/product/product.js";
import unitModel from "../model/product/unit.js";
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
    }),
    await unitModel.sync({
      alter: true,
      force: false,
    });
  await productModel.sync({
    alter: true,
    force: false,
  });
  await invoiceModel.sync({
    alter: true,
    force: false,
  });
  await invoiceProductModel.sync({
    alter: true,
    force: false,
  });
};
export default dbInit;
