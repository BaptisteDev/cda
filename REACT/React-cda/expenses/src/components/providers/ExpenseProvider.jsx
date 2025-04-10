import React, { useState } from "react";
import { ExpenseContext } from "../../context/ExpenseContext";

export default function ExpenseProvider({ children }) {
  const [expenses, setExpenses] = useState([]);
  // fonction qui ajoute une dépense : Quel paramètre et quelle syntaxe ?
  const addExpense = (expense) => {
    console.log(expense);
    setExpenses([...expenses, expense]);
  };
  // fonction qui supprime une dépense : Quel paramètre et quelle syntaxe ?
  const deleteExpense = (data) => {
    console.log(data);
    setExpenses(expenses.filter((exp) => exp.description !== data));
  };
  return (
    <div>
      <ExpenseContext.Provider value={{ expenses, addExpense, deleteExpense }}>
        {children}
      </ExpenseContext.Provider>
    </div>
  );
}
