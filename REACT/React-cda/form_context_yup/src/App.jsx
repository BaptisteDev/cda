import Header from "./components/Header";
import Register from "./pages/form/Register";
import AuthProvider from "./components/providers/AuthProvider";
import Login from "./pages/form/Login";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 w-full">
      <Header />
      <div className="flex flex-col flex-1 justify-center items-center w-full">
        <Login></Login>
      </div>
    </div>
  );
}
export default App;
