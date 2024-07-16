import React, { useRef } from 'react'
import "./Contact page.css";
import { MdOutlineEmail } from 'react-icons/md';
import emailjs from "@emailjs/browser";



export const Contactpage = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_p6hp5dj', 'template_ovffvbm', form.current, {
        publicKey: 'Y9-TJmpxYbKTrYraE',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  
  return (
    <div className='Contact'>
      <div className='Contactsection'>
        <div className='heading'>
          <h1><span>Hire</span>Me</h1>
        </div>
            <div className='container contact-container'>
              <div className='contact-options'>
                <article className='contact-option'>
                  <MdOutlineEmail className='contact-option-icon'/>
                  <h4>Email</h4>
                  <h5>ksambit08@gmail.com</h5>

                </article>
              </div>
              <form ref={form} onSubmit={sendEmail}>
                <input
                  type="text"
                  placeholder='Your Full Name'
                  name='user_name'
                  required/>
                  <input
                    type='text'
                    placeholder='Your Email'
                    name='user_email'
                    required/>
                  <textarea 
                      placeholder='Your message'
                      rows='7'
                      name='message'
                      required></textarea>
                      <button type='submit' className='btn btn-primary' value="send">
                        Send Message
                      </button>
               
              </form>
            </div>
        </div>
      </div>
      )
}

    export default Contactpage;