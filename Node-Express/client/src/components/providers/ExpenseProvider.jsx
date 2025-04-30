import React, { useState } from "react";
import { ExpanseContext } from "../../context/ExpanseContext";

export default function ExpenseProvider({ children }) {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    console.log(expense);
    setExpenses([...expenses, expense]);
  };

  const deleteExpense = (data) => {
    console.log(data);
    setExpenses(expenses.filter((exp) => exp.description !== data));
  };
  return (
    <ExpanseContext.Provider
      value={{
        expenses,
        addExpense,
        deleteExpense,
      }}
    >
      {children}
    </ExpanseContext.Provider>
  );
}
