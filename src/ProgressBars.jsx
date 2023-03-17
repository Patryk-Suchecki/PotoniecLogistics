import { useTranslation } from './LanguageContext';

import './style/ProgressBars.css'

const ProgressBar = ({ color, number, percent, name, description, type = '' }) => {
    return (
            <div className="pb-card col-md-4">
                <div className="percent" style={{'--clr': color,'--num': percent}}>
                    <div className="dot"></div>
                    <svg>
                        <circle cx="70" cy="70" r="70"></circle>
                        <circle cx="70" cy="70" r="70"></circle>
                    </svg>
                    <div className="number">
                        <h2>{number}{type === '%' && <span>%</span>}</h2>
                    </div>
                </div>
                <h3>{name}</h3>
                <p>{description}</p>
            </div>
      );
    };
const ProgressBars = () => {
    const { translate } = useTranslation();
    return (
        <section>            
            <div className='mx-auto text-center aboutus'>
                <h1>{translate('how-are-we-doing')}</h1>
                <svg className="dot-animation" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M480 711 240 471l43-43 197 198 197-197 43 43-240 239Z"/></svg>
            </div>
            <div className="progressbars">
                <ProgressBar color="#d9544f" number="99" percent="95" name={translate('progressbar-clients-header')} description={translate('progressbar-clients-description')} type="%"></ProgressBar>
                <ProgressBar color="#d9544f" number="99" percent="95" name={translate('progressbar-delivery-header')} description={translate('progressbar-delivery-description')} type="%"></ProgressBar>
                <ProgressBar color="#d9544f" number="213" percent="50" name={translate('progressbar-packages-header')} description={translate('progressbar-packages-description')}></ProgressBar>
            </div>
        </section>
        );
    };
export default ProgressBars;