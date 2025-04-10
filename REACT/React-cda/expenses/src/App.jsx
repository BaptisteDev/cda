import React from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import ExpenseProvider from "./components/providers/ExpenseProvider";

function App() {
  return (
    <div className="max-w-3xl mx-auto p-4 bg-white shadow-md rounded my-8">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Suivi des Dépenses
      </h1>
      {/* Ajout des props sur ces composants */}
      <ExpenseProvider>
        <ExpenseForm />
        <ExpenseList />
      </ExpenseProvider>
    </div>
  );
}

export default App;
