
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import "./BotonGoogle.css"
function GoogleButton() {
  return (
    <button className="google-button">
      <FontAwesomeIcon icon={faGoogle} className="google-icon" />
      Sign in with Google
    </button>
  );
}

export default GoogleButton;
