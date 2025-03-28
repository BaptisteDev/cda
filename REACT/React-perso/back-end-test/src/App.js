import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Task from './page/Task';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/api/data")
        .then((response) => {
            console.log(response.data); // Afficher les données récupérées
        })
        .catch((error) => {
            console.error("Erreur lors de la requête API :", error);
        });
}, []);
  return (
    <div>
      <Task></Task>
    </div>
  );
}

export default App;

