import './Header.scss';
import appLogo from "../../assets/icons/applogo.png"
import menuLogo from "../../assets/icons/menu.png";
import addingLogo from "../../assets/icons/add logo.png";

const Header = (props) => {
  
  

  return (
    <div className="header">
      <div className="header__icons">
        <img src={menuLogo} className="header__logo-menuLogo" alt="send-logo" />
        <img className="header__logo" src={appLogo} alt="app-logo" />
        <button type="button" className="header__btn" onClick={(e) => {
          e.stopPropagation();
          props.handleCityPost();
          }}>
        <img src={addingLogo} className="header__logo-addingLogo" alt="gps-logo" />
        </button>  
      </div>
      
    </div>
  ) 
  
};
export default Header;
