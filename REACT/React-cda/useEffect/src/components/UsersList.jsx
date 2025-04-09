import React, { useEffect, useState } from "react";
import UserCard from "./UserCard";

export default function UsersList() {
  // useState pour stocker la reponse de votre serveur
  const [users, setUsers] = useState([]);

  // est effectué  après le premier rendu du composant
  useEffect(() => {
    // requete http
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        // attribuer la réponse à notre variable
        setUsers(data);
      } catch (error) {
        console.error(error);
      }
    };
    // ne pas oublier d'invoquer la fonction
    fetchUsers();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {users.map((user) => (
        <UserCard key={user.id} user={user}></UserCard>
      ))}
    </div>
  );
}
