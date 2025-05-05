const router = require("express").Router();
const { addExpense, getAll } = require("../controllers/Expense.controller");

router.post("/", addExpense);

router.get("/:id", getAll);

module.exports = router;

// localhot:3000/expenses
