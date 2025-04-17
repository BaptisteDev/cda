import React from "react";
import ExpensesForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";
export default function Expenses() {
  return (
    <>
      <ExpensesForm></ExpensesForm>
      <ExpenseList></ExpenseList>
    </>
  );
}
