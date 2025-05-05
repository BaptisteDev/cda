import React, { useContext } from "react";
import ExpenseItem from "./ExpenseItem";
import { ExpanseContext } from "../../context/ExpanseContext";
import { AuthContext } from "../../context/AuthContext";

function ExpenseList() {
  const { expenses } = useContext(ExpanseContext);
  const { user } = useContext(AuthContext);

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
