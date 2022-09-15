const { where } = require("sequelize");
const { alert_qs, alert_q_details, sequelize } = require("../models");
const initModels = require("../models/init-models");

const models = initModels(sequelize);

// try{
// 	var authors = models.Authors.findAll();
// 	console.log(authors);
// }catch(error){
// 	console.error(error);
// }

const Query = {
  getAlertQs: async () => {
    try {
      const alertqs = await alert_qs.findAll();
      return alertqs;
    } catch (err) {
      console.log(err);
    }
  },
  getAlertQ: async (root, { AlertQId }) => {
    try {
      const alertqs = await alert_qs.findByPk(AlertQId);
      return alertqs;
    } catch (err) {
      console.log(err);
    }
  }
};

const Author = {
  book: (auth) => Books.findByPk(auth.BookID),
};

const Book = {
  author: (book) => Authors.findByPk(book.AuthorID),
};

const Mutation = {
  createAlertQ: async (_, { crop_id,sowing_id,plan_act_id,user_act_id,case_txt,cond_rang }) => {
    try {
      (await alert_qs) &&
        alert_qs.create({
          crop_id,
          sowing_id,
          plan_act_id,
          user_act_id,
          case_txt,
          cond_range,
        });
      return "Author created.";
    } catch (error) {
      console.error(error);
    }
  },
};
module.exports = { Query, Mutation };
