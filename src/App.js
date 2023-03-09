import Brand from './Brand';
import Animation from './Animation';
import ProgressBars from './ProgressBars';
import EuropeSection from './EuropeSection';
import Footer from './Footer';
import EmailForm from './EmailForm';
import { LanguageProvider } from './LanguageContext';

import Rondo from './img/rondo.png';
import './style/App.css';

const App = () => {
  return (
    <div className="App">
      <LanguageProvider>
        <Brand></Brand>
        <div className='container'>
          <Animation></Animation>
          <ProgressBars></ProgressBars>
          <div className="rondo">
            <img className="spin-animation" src={Rondo} alt="Rondo"/>
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
