import { useTranslation } from './LanguageContext';
import Fura from './img/fura.gif'

import './style/Animation.css'

function Animation() {
  const { translate } = useTranslation();
    return (
        <section className="row" id="home">
          <div className="col-md-6 m-auto">
            <h2>{translate('animation-header')}</h2>
            <p className="py-4">
              {translate('animation-description')}
            </p>
          </div>
    
          <div className="col-md-6">
            <img src={Fura} alt="Fura"/>
          </div>
        </section>
      );
    };
export default Animation;