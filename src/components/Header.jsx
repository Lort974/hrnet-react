// Importation des composants nécessaires
import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/img/wealth-health-logo.png";

// Composant pour l'en-tête
const Header = () => {
  // Utilisation de useLocation pour obtenir le chemin actuel
  const location = useLocation();

  // Définition des variables pour la navigation
  let navigateTo = "";
  let navigateLink = "";
  let navigateIcon = "";
  // Changement des variables en fonction du chemin actuel
  switch (location.pathname) {
    case "/employee-list":
      navigateTo = "";
      navigateLink = "Home";
      navigateIcon = "fa-house";
      break;
    case "/":
      navigateTo = "employee-list";
      navigateLink = "View current employees";
      navigateIcon = "fa-table-list";
      break;
    default:
      navigateTo = "";
      navigateLink = "Home";
      navigateIcon = "fa-house";
  }

  // Retour de l'en-tête avec le logo et la navigation
  return (
    <>
      <header>
        {/* Logo et lien vers la page d'accueil */}
        <NavLink to="" className="text-logo">
          <img src={logo} alt="Logo wealth Health" />
          HRnet
        </NavLink>
        {/* Navigation */}
        <nav>
          <NavLink to={navigateTo}>
            <i className={"fa-solid " + navigateIcon}></i>
            <span>{navigateLink}</span>
          </NavLink>
        </nav>
      </header>
    </>
  );
};

// Exportation du composant Header
export default Header;
