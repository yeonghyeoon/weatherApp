import shareLogo from "../../assets/icons/send.png";
import gpsLogo from "../../assets/icons/gps.svg";
import './Header.css';
import menuLogo from "../../assets/icons/menu.png";
import addingLogo from "../../assets/icons/plus.png";

const Header = () => {
  
  

  return (
    <div className="header">
      <div className="header__logo">
        <img src={menuLogo} className="header__logo-menuLogo" alt="send-logo" />
        <button type="button" className="header__btn"><img src={addingLogo} className="header__logo-addingLogo" alt="gps-logo" /></button>  
      </div>
      
      {/* <h1>Weather App</h1> */}
      
    </div>
  ) 
  
};
export default Header;
