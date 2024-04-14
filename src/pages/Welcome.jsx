import { NavLink } from "react-router-dom";

const Welcome = () => {
  return (
    <>
      <h1>Bienvenue à cette présentation</h1>
      <section className="create-employee">
        <NavLink style={{ textDecoration: "none", color: "#2a2a2a" }} to="../">
          <h2>1- Démonstration de l'application</h2>
        </NavLink>
        <h2>2- Code de l'application convertie en React</h2>
        <h2>3- Code de la bibliothèque convertie</h2>
        <h2>4- Rapport Lighthouse</h2>
      </section>
    </>
  );
};

export default Welcome;
