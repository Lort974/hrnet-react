import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/img/wealth-health-logo.png";

const Header = () => {
  const location = useLocation();

  let navigateTo = "";
  let navigateLink = "";
  let navigateIcon = "";
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

  return (
    <>
      <header>
        <NavLink to="" className="text-logo">
          <img src={logo} alt="Logo wealth Health" />
          HRnet
        </NavLink>
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

export default Header;
