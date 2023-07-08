import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5irao0w', 'template_eqso1j8', form.current, 'PX5Ov7GdvwE24rJDN')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };


  return (
    <section id="contact">
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
            <article className="contact__option">
              <MdOutlineEmail className='contact__option-icon'/>
              <h4>Email</h4>
              <h6>ayushsahu798@gmail.com</h6>
              <a href="mailto:ayushsahu798@gmail.com" target='_blank' className='btn primary'>Send a message</a>
            </article>

            <article className="contact__option">
              <BsWhatsapp className='contact__option-icon'/>
              <h4>Whatsapp</h4>
              <h6>+917237813428</h6>
              <a href="https://wa.me/917237813428" target='_blank' className='btn primary'>Send a message</a>
            </article>
        </div>

        <form ref={form} onSubmit={sendEmail} className='contact__form'>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button  type='submit' className='btn btn primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact