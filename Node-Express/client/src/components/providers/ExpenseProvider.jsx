import React, { useContext, useEffect, useState } from "react";
import { ExpanseContext } from "../../context/ExpanseContext";
import { AuthContext } from "../../context/AuthContext";
import { getExpense } from "../../apis/expense.api";

export default function ExpenseProvider({ children }) {
  const { user } = useContext(AuthContext);
  const [expenses, setExpenses] = useState([]);
  useEffect(() => {
    const getExpenses = async () => {
      try {
        const allExpenses = await getExpense(user);
        setExpenses(allExpenses);
      } catch (error) {
        console.log(error);
      }
    };
    if (user) {
      getExpenses();
    }
  }, [user]);

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
