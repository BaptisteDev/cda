const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const Task = require("./models/Task");


// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connexion à MongoDB
mongoose.connect("mongodb://localhost:27017/taskdb")
    .then(() => console.log("Connecté à MongoDB"))
    .catch((err) => console.error("Erreur de connexion à MongoDB :", err));


app.get('/api/data', (req, res) => {
    const data = { message: 'Voici des données depuis le backend !' };
    res.json(data);
});
// Route pour récupérer toutes les tâches
app.get("/api/tasks", async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ error: "Erreur lors de la récupération des tâches." });
    }
});

// Route pour ajouter une nouvelle tâche
app.post("/api/tasks", async (req, res) => {
    try {
        const { title } = req.body;
        const newTask = new Task({ title });
        await newTask.save();
        res.status(201).json(newTask);
    } catch (error) {
        res.status(500).json({ error: "Erreur lors de l'enregistrement de la tâche." });
    }
});

// Démarrer le serveur
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Serveur Express démarré sur le port ${PORT}`);
});