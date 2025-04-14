import Header from "./components/Header";
import Register from "./pages/form/Register";
import AuthProvider from "./components/providers/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <div className="min-h-screen flex flex-col bg-gray-100 w-full">
        <Header />
        <div className="flex flex-col flex-1 justify-center items-center w-full">
          <Register></Register>
        </div>
      </div>
    </AuthProvider>
  );
}
export default App;
