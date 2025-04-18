import React, { useState } from "react";
import { ExpanseContext } from "../../context/ExpanseContext";

export default function ExpenseProvider({ children }) {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      description: "Yoga",
      amount: 46,
      data: "2025-04-02",
      avis: "Trop cool",
    },
    {
      id: 2,
      description: "Running",
      amount: 0,
      data: "2025-04-18",
      avis: "Mal aux jambes",
    },
  ]);

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
