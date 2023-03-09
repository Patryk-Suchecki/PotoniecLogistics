import { useTranslation } from './LanguageContext';
import Logo from './img/logo.png'

import './style/Footer.css'

function Footer() {
  const { translate } = useTranslation();

  const handleClick = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
      <div className="footer py-4 text-center text-md-start">
        <div className="row footer-information py-4 my-4">
          <div className="col-md-4 footer-logo text-center">
            <img src={Logo} alt="Logo" width="50%" />
          </div>
          <div className="col-md-4 footer-contact px-5">
            <h2 className="text-center py-md-4">{translate('contact')}</h2>
            <ul>
              <li>
                <p>{translate('telephone')} <p>+48 734 470 513</p></p>
              </li>
              <li>
                <p>E-mail: <p>info@poto-express.com</p></p>
              </li>
              <li>
              {translate('form-contact')} <p className="footer-a" onClick={() => handleClick("form")} >{translate('click')}</p>
              </li>
            </ul>
          </div>
          <div className="col-md-4 px-md-5">
            <h2 className="text-center py-4">{translate('navigation')}</h2>
            <ul>
              <li>
                <p className="footer-a" onClick={() => handleClick("home")}>{translate('home')}</p>
              </li>
              <li>
                <p className="footer-a" onClick={() => handleClick("home")}>{translate('aboutus')}</p>
              </li>
              <li>
                <p className="footer-a" onClick={() => handleClick("home")}>{translate('doing')}</p>
              </li>
              <li>
                <p className="footer-a" onClick={() => handleClick("form")} >{translate('contact')}</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-clause">
          <h5>COPYRIGHT © 2022 POTO-EXPRESS.COM</h5>
      </div>
    </div>
    );
  };
export default Footer;