import shareLogo from "../../assets/icons/send.png";
import gpsLogo from "../../assets/icons/gps.svg";
import './Header.scss';
import appLogo from "../../assets/icons/applogo.png"
import menuLogo from "../../assets/icons/menu.png";
import addingLogo from "../../assets/icons/add logo.png";

const Header = () => {
  
  

  return (
    <div className="header">
      <img className="header__logo" src={appLogo} alt="app-logo" />
      <div className="header__icons">
        <img src={menuLogo} className="header__logo-menuLogo" alt="menu-logo" />
        <button type="button" className="header__btn">
          <img src={addingLogo} className="header__logo-addingLogo" alt="add-logo" />
        </button>  
      </div>
      
      {/* <h1>Weather App</h1> */}
      
    </div>
  ) 
  
};
export default Header;
