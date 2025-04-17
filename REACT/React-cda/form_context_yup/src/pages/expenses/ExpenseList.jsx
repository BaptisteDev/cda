import React, { useContext } from "react";
import ExpenseItem from "./ExpenseItem";
import { ExpenseContext } from "../context/ExpenseContext";

function ExpenseList() {
  const { expenses } = useContext(ExpenseContext);
  return (
    <div className="flex flex-col gap-4">
      {expenses.length === 0 ? (
        <p>Aucune dépense à afficher</p>
      ) : (
        expenses.map((exp) => (
          <ExpenseItem key={exp.description} expence={exp} />
        ))
      )}
    </div>
  );
}

export default ExpenseList;
