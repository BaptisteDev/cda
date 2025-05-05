const Expense = require("../models/expense.schema");
const User = require("../models/user.schema");

const addExpense = async (req, res) => {
  console.log(req.body);
  try {
    const { description, amount, date, user } = req.body;
    const author = await User.findById(user);
    if (!author) {
      return res.status(400).json("Utilisateur non trouvé");
    }
    const expense = await Expense.create(req.body);
    res.status(201).json(expense);
  } catch (error) {
    console.log(error);
  }
};

const getAll = async (req, res) => {
  try {
    const { id } = req.params;

    const allExpense = await Expense.find({ user: id });

    res.status(200).json(allExpense);
  } catch (error) {
    console.log(error);
  }
};
module.exports = { addExpense, getAll };
