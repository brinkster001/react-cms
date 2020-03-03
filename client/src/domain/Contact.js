import React from 'react';
import '../css/global.scss';
import '../css/Contact.scss';
import data from '../data/contact.json';


class Contact extends React.Component {
    render() {
      return (
        
        <div id='contact'>
            {data.map((contactData, index) => {
              return (
                <div>
                  <h1 className='underlined'>{contactData.pageTitle}</h1>
                  <p className='page-description'>{contactData.pageDescription}</p>

                  <h3>{contactData.email}</h3>
                  <h4>{contactData.phone}</h4>
                  <p>{contactData.street}, {contactData.city}, {contactData.state}, {contactData.zip}</p>
                
                </div>

                
              )
            })
          }                     
        </div>
      )
    }
  }

export default Contact;