const router = require("express").Router();
const Expense = require("../models/expense.schema");
const User = require("../models/user.schema");
// creer une route qui va récupérer les valeurs en console

router.post("/", async (req, res) => {
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
});

router.get("/", async (req, res) => {
  try {
    // récupère les données de tous les utilisateurs sauf les mots de passe
    const allExpense = await Expense.find();
    res.status(200).json(allExpense);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;

// localhot:3000/expenses
