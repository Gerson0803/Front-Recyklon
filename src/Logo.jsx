import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf } from '@fortawesome/free-solid-svg-icons';

const LogoSection = () => {
  return (
    <div className="logo-section">
      <h1>
        Recyklon <FontAwesomeIcon icon={faLeaf} className="logo" />
      </h1>
    </div>
  );
}

export default LogoSection;
