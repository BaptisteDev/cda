import React, { useState, useEffect } from "react";
import axios from "axios";

function Task() {
    const [tasks, setTasks] = useState([]); // Stocker les tâches
    const [newTask, setNewTask] = useState(""); // Champ de nouvelle tâche

    // Récupérer les tâches du backend
    useEffect(() => {
        axios.get("http://localhost:5000/api/tasks")
            .then((response) => {
                setTasks(response.data); // Mettre à jour les tâches
            })
            .catch((error) => {
                console.error("Erreur lors de la récupération des tâches :", error);
            });
    }, []);

    // Ajouter une nouvelle tâche
    const handleAddTask = (e) => {
        e.preventDefault();
        if (newTask.trim() === "") return; // Vérifier que le champ n'est pas vide
        axios.post("http://localhost:5000/api/tasks", { title: newTask })
            .then((response) => {
                setTasks([...tasks, response.data]); // Ajouter la nouvelle tâche à la liste
                setNewTask(""); // Réinitialiser le champ
            })
            .catch((error) => {
                console.error("Erreur lors de l'ajout de la tâche :", error);
            });
    };

    return (
        <div className="container mt-5">
            <h1>Liste des Tâches</h1>

            {/* Formulaire pour ajouter une tâche */}
            <form onSubmit={handleAddTask}>
                <input
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder="Ajouter une nouvelle tâche"
                    required
                />
                <button type="submit">Ajouter</button>
            </form>

            {/* Afficher les tâches */}
            <ul>
                {tasks.map((task) => (
                    <li key={task._id}>
                        {task.title} {task.completed ? "✅" : ""}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Task;