import Brand from './Brand';
import Animation from './Animation';
import ProgressBars from './ProgressBars';
import EuropeSection from './EuropeSection';
import Footer from './Footer';
import EmailForm from './EmailForm';
import { LanguageProvider } from './LanguageContext';

import Roundabout from './img/roundabout.png';
import Road from './img/road.png';
import './style/App.css';

const App = () => {
  return (
    <div className="App">
      <LanguageProvider>
        <div className="road">
          <img src={Road} width="2706" height="3300" alt="Road"/>
        </div>
        <Brand></Brand>
        <div className='container'>
          <Animation></Animation>
          <ProgressBars></ProgressBars>
          <div className="roundabout">
            <img className="spin-animation" src={Roundabout} alt="Roundabout"/>
          </div>
          <EuropeSection></EuropeSection>
        </div>
        <EmailForm></EmailForm>
        <div className='container'>
          <Footer></Footer>
        </div>
      </LanguageProvider>
    </div>
  );
}

export default App;
