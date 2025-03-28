const mongoose = require("mongoose");

// Définir le schéma de la tâche
const taskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    completed: { type: Boolean, default: false },
});

// Créer le modèle de tâche
const Task = mongoose.model("Task", taskSchema);

module.exports = Task;