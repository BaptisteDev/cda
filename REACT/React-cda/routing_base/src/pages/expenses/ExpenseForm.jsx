import React, { useContext, useState } from "react";
import { ExpanseContext } from "../../context/ExpanseContext";

function ExpenseForm() {
  const { addExpense } = useContext(ExpanseContext);
  // initialiser une variable pour stocker les valeurs d'une dépense
  const [expense, setExpense] = useState({
    description: "",
    amount: "",
    date: "",
  });

  // méthodes pour récupérer les changements dans les inputs
  const handleChangeDescription = (e) => {
    setExpense({ ...expense, description: e.target.value });
  };

  const handleChangeAmount = (e) => {
    setExpense({ ...expense, amount: e.target.value });
  };

  const handleChangeDate = (e) => {
    setExpense({ ...expense, date: e.target.value });
  };

  // méthode pour soumettre un formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    if (expense.description && expense.amount && expense.date) {
      addExpense(expense);
      setExpense({
        description: "",
        amount: "",
        date: "",
      });
    }
  };

  return (
    <div className="flex flex-col justify-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 mb-6 bg-white shadow-xl rounded p-6"
      >
        <input
          type="text"
          name="description"
          placeholder="Description de la dépense"
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={expense.description}
          onChange={handleChangeDescription}
        />
        <input
          type="number"
          name="amount"
          placeholder="Montant (€)"
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={expense.amount}
          onChange={handleChangeAmount}
        />
        <input
          type="date"
          name="date"
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={expense.date}
          onChange={handleChangeDate}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Ajouter Dépense
        </button>
      </form>
    </div>
  );
}

export default ExpenseForm;
