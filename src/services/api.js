import axios from "axios";

export const getEmployees = async () => {
  try {
    const res = await axios.get("http://localhost:4000/employees");
    return res;
  } catch (err) {
    const res = {
      status: "error",
      data: "Une erreur s'est produite pendant le chargement des données.",
    };
    return res;
  }
};

export const createEmployee = async (employeeData) => {
  try {
    const res = await axios.post(
      "http://localhost:4000/employees",
      employeeData
    );
    return res;
  } catch (err) {
    let errorMessage = "";
    if (err.response) {
      // Le serveur a renvoyé une réponse avec un statut d'erreur
      errorMessage = `Erreur : ${err.response.status} ${err.response.data}`;
    } else if (err.request) {
      // La requête a été faite mais aucune réponse n'a été reçue
      errorMessage = "Erreur : Le serveur n'a pas répondu.";
    } else {
      // Quelque chose s'est mal passé lors de la configuration de la requête
      errorMessage = `Erreur : ${err.message}`;
    }
    return errorMessage;
  }
};
