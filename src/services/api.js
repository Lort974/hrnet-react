// Importation de axios pour les requêtes HTTP
import axios from "axios";

// Fonction pour obtenir les employés
export const getEmployees = async () => {
  try {
    // Tentative de récupération des employés
    const res = await axios.get("http://localhost:4000/employees");
    return res;
  } catch (err) {
    // En cas d'erreur, retourne un objet avec le statut d'erreur et le message d'erreur
    const res = {
      status: "error",
      data: "An error occurred while charging data.",
    };
    return res;
  }
};

// Fonction pour créer un employé
export const createEmployee = async (employeeData) => {
  try {
    // Tentative de création d'un employé
    const res = await axios.post(
      "http://localhost:4000/employees",
      employeeData
    );
    return res;
  } catch (err) {
    // En cas d'erreur, détermine le type d'erreur et retourne le message d'erreur approprié
    let errorMessage = "";
    if (err.response) {
      // Le serveur a renvoyé une réponse avec un statut d'erreur
      errorMessage = `Erreur : ${err.response.status} ${err.response.data}`;
    } else if (err.request) {
      // La requête a été faite mais aucune réponse n'a été reçue
      errorMessage = "Error : server did not respond.";
    } else {
      // Quelque chose s'est mal passé lors de la configuration de la requête
      errorMessage = `Error : ${err.message}`;
    }
    return errorMessage;
  }
};
