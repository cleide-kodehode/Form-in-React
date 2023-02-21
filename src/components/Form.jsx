import React from 'react'
import {useState} from 'react';
import Emailjs from '@emailjs/browser/'
import { FaLinkedin } from 'react-icons/fa';

import "../styles/Form.css";


function Form () {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState ('')


function sendEmail(e) {
  e.preventDefault();

  if (name === '' ||  email==='' || message==='') {
    alert("fill out all input entries correctly");
    return
  }



  const templateParams = {
    from_name: name,
    message: message,
    email: email,
  }



  Emailjs.send("gmailMessage", "template_oeq55ih", templateParams, "z2vhi0C3RsaOCV9XF")
  .then((response) => {
    console.log("EMAIL SENT", response.status, response.text)
    setName('')
    setEmail('')
    setMessage('')

  }, (err) => {
    console.log("ERROR: ", err)
  })

}

  return (       
    <div className="contact-container">
      <h3 className='social-title'> Check out my Linkedin </h3>
      <a href="https://www.linkedin.com/in/cleide-florisbella/"
      className='linkedin-social'> 
      <FaLinkedin />  
      </a>
    <div>  
      <h1 className="title"> Contact me </h1>

      <form className="form" onSubmit={sendEmail} >
        <input 
            className= "input"
            type="text" 
            Placeholder="Enter your first name" 
            onChange={(e) => setName(e.target.value)} 
            value={name}
            />   

        <input 
            className= "input"
            type="text" 
            Placeholder="Enter your email" 
            onChange={(e) => setEmail(e.target.value)} 
            value={email}
            />   

        <textarea 
            className="textarea"
            placeholder="Enter your message"
            onChange={(e) => setMessage(e.target.value)} 
            value={message}
            />   

        <input className="button" type="submit" value="Send" />

      </form>      
    </div>  
  </div>  

  );
  }

export default Form
