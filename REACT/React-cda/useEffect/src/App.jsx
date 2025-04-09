import "./App.css";
import UsersList from "./components/UsersList";

function App() {
  return (
    <div className="mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">
        Liste des utilisateurs
      </h1>
      <UsersList></UsersList>
    </div>
  );
}

export default App;
