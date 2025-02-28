import mongoose from "mongoose";

// Configurar la URI o dirección de la base de datos
const URI = "mongodb://localhost:27017/ZonaDigitalDB20230170";

// Conectarme a la base de datos
mongoose.connect(URI);

// Comprobar que todo funcione
const connection = mongoose.connection;

connection.once("open", () => {
    console.log("DB is Connected");
});

connection.once("disconnected", () => {
    console.log("DB is Disconnected");
});

connection.once("error", () => {
    console.log("error found" + error);
});

