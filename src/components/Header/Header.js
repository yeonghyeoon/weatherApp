import shareLogo from "../../assets/icons/send.png";
import gpsLogo from "../../assets/icons/gps.svg";
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <img src={shareLogo} className="shareLogo" alt="send-logo" />
        <img src={gpsLogo} className="gpsLogo" alt="gps-logo" />  
      </div>
      
      {/* <h1>Weather App</h1> */}
      
    </div>
  ) 
  
};
export default Header;
