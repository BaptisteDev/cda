import { useState } from "react";
import "./App.css";
import Articles from "./Articles";
import Header from "./Header";

function App() {
  // Le hook useState déclare une variable en premier paramètre et un fonction qui
  // permet de la modifier en second. Elle est, par convention, préfixée par set et s'écrit en camelCase
  const [user, setUser] = useState(true);

  const toogleUser = () => {
    setUser(!user);
  };

  return (
    <div className="flex flex-col">
      <Header userToHeader={user} toogleUserMethod={toogleUser} />
      <Articles />
    </div>
  );
}

export default App;
