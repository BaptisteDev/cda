import Header from "./components/Header";
import Login from "./pages/forms/Login";
import AuthProvider from "./components/providers/AuthProvider";
import ExpenseProvider from "./components/providers/ExpenseProvider";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 w-full">
      <AuthProvider>
        <ExpenseProvider>
          <Header />
          <div className="flex flex-col flex-1 justify-center items-center w-full">
            <Outlet></Outlet>
          </div>
        </ExpenseProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
