import shareLogo from "../../assets/icons/send.png";
import gpsLogo from "../../assets/icons/gps.svg";
import appLogo from "../../assets/icons/applogo.png"
import './Header.scss';

const Header = () => {
  return (
    <div className="header">
      <img src={appLogo} className="appLogo" alt="app-logo" />
      <div className="header__icons">
        <img src={shareLogo} className="shareLogo" alt="send-logo" />
        <img src={gpsLogo} className="gpsLogo" alt="gps-logo" />  
      </div>
      
      {/* <h1>Weather App</h1> */}
      
    </div>
  ) 
  
};
export default Header;
