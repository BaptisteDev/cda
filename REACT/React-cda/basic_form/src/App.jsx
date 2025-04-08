import { useState } from "react";
import Form from "./Form";

function App() {
  const [contact, setContact] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(contact);
  };

  return (
    <div className="max-w-2xl mx-auto p-4 bg-white shadow-md rounded py-8">
      <Form
        handleSubmit={handleSubmit}
        contact={contact}
        setContact={setContact}
      ></Form>
      {/* <h2>{contact.email}</h2> */}
    </div>
  );
}

export default App;
