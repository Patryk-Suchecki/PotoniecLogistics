import { useTranslation } from './LanguageContext';
import Europa from './img/europa.png'

import './style/EuropeSection.css'

function EuropeSection() {
    const { translate } = useTranslation();
    return (
        <div className='europe'>
            <section className="row m-auto">
                <div className="col-md-6">
                    <img src={Europa} alt="Map of Europe" width="100%" />
                </div>
                <div className="col-md-6 m-auto p-5">
                    <h2>{translate('europe-header')}</h2>
                    <p className="py-4">{translate('europe-description')}</p>
                </div>
            </section>
        </div>
    );
}
export default EuropeSection;