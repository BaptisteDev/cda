import Header from "./components/Header";
import AuthProvider from "./components/providers/AuthProvider";
import ExpenseProvider from "./components/providers/ExpenseProvider";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
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
      <Toaster></Toaster>
    </div>
  );
}

export default App;
