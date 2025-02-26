const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 5055;

// Remplace <USERNAME>, <PASSWORD>, et <CLUSTER_NAME> par tes informations MongoDB Atlas
const mongoURI = "mongodb+srv://josemalu232:zaNZnyLY4p2JkzQJ@myclostervps.zzc4f.mongodb.net/databaseVPS?retryWrites=true&w=majority&appName=myClosterVPS";

mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Atlas connecté"))
  .catch((err) => console.error("Erreur de connexion à MongoDB :", err));

app.get("/", (req, res) => {
  res.send("Hello, MongoDB Atlas avec Express !");
});

app.listen(PORT, () => {
  console.log(`Serveur en écoute sur le port ${PORT}`);
});
