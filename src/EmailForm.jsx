import React, { useState } from 'react';
import axios from 'axios';

import { useTranslation } from './LanguageContext';

import './style/Contact.css'

function EmailForm() {
  const { translate } = useTranslation();
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    telephone: '',
    company: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 5000);
    try {
      const response = await axios.post('/send-email', formData);
      console.log(response.data);
      setFormData({
        name: '',
        email: '',
        message: '',
        telephone: '',
        company: '',
      });
    } catch (error) {
    }
  };

  return (
    <section className="contact py-5">
        <div className="container">
            <div className="row">
                <div className="col-md-5 m-auto">
                    <h3>{translate('form-header')}</h3>
                    <p className="py-4">{translate('form-description')}</p>
                    <div className="row">
                        <p className="contact-p">
                            <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M38.8 23.65q-.25-6.05-4.45-10.25T24.1 8.95v-3q3.6.1 6.775 1.525Q34.05 8.9 36.45 11.3q2.4 2.4 3.825 5.575Q41.7 20.05 41.8 23.65Zm-8.45 0q-.25-2.5-2-4.225Q26.6 17.7 24.1 17.45v-3q3.75.25 6.375 2.85t2.875 6.35ZM39.75 42q-6.1 0-12.125-3T16.8 31.2Q12 26.4 9 20.375 6 14.35 6 8.25q0-.95.65-1.6Q7.3 6 8.25 6h7q.7 0 1.225.475.525.475.675 1.275l1.35 6.3q.1.7-.025 1.275t-.525.975l-5 5.05q2.8 4.65 6.275 8.1Q22.7 32.9 27.1 35.3l4.75-4.9q.5-.55 1.15-.775.65-.225 1.3-.075l5.95 1.3q.75.15 1.25.75T42 33v6.75q0 .95-.65 1.6-.65.65-1.6.65Zm-28.3-23.4 4.05-4.1L14.35 9H9q0 1.95.6 4.275t1.85 5.325ZM29.9 36.75q2.05.95 4.45 1.55 2.4.6 4.65.7v-5.35l-5.15-1.05ZM11.45 18.6ZM29.9 36.75Z"/></svg>
                            +48 734 470 513
                        </p>
                    </div>
                    <div className="row">
                        <p className="contact-p">
                            <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M7 40q-1.2 0-2.1-.9Q4 38.2 4 37V11q0-1.2.9-2.1Q5.8 8 7 8h34q1.2 0 2.1.9.9.9.9 2.1v26q0 1.2-.9 2.1-.9.9-2.1.9Zm17-15.1L7 13.75V37h34V13.75Zm0-3L40.8 11H7.25ZM7 13.75V11v26Z"/></svg>
                            info@poto-express.com
                        </p>
                    </div>
                </div>
                <div className="form-group col-md-5 p-5 m-auto" id="form">
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name">{translate('form-name')}</label>
                        <input className="form-control" type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required/>
                        
                        <label>{translate('form-company')}</label>
                        <input className="form-control" name="company" type="text" id="company" value={formData.company} onChange={handleInputChange} required/>
                        
                        <label>{translate('form-telephone')}</label>
                        <input className="form-control" placeholder="+48 123 123 123" name="telephone" type="text" id="telephone" value={formData.telephone} onChange={handleInputChange} required/>
                        
                        <label htmlFor="email">{translate('form-email')}</label>
                        <input className="form-control" placeholder="email@domain.com" name="email" type="email" id="email" value={formData.email} onChange={handleInputChange} required/>
                        
                        <label>{translate('form-notices')}</label>
                        <textarea className="form-control" placeholder="Comments" id="message" name="message" value={formData.message} onChange={handleInputChange} required></textarea>
                        
                        <button type="submit" className="contact-btn px-5 py-2">{translate('form-send')}</button>
                        <div className={`popup ${showPopup ? 'show' : ''}`}>{translate('message-send')}</div>
                    </form>
                </div>
            </div>
        </div>
    </section>
  );
}

export default EmailForm;