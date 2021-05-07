import React from 'react'
import './contact.css'
import emailjs from "emailjs-com";

export default function contact() {
    function sendEmail(e) {
      e.preventDefault();
      emailjs.sendForm('Javier', 'template_zm5kjyi', e.target, 'user_AsBM0bN2xX1lcLdSmX9xF')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    }
    return (
        <div className="contact">
            <form className="contact__form" onSubmit={sendEmail}>
            <h1>Contact Me</h1>
            <label> Name </label>
            <input placeholder ="Name"/>
            <label> Email </label>
            <input 
            placeholder ="Email" 
            />
              <label> Subject </label>
            <input 
            placeholder ="Subject" 
            />
            <label>Message</label>
            <textarea
            placeholder="Message"
            >
            </textarea>
            <button
        type="submit" >
        - SEND -
      </button>
            </form>
            <h2>Javier Caro </h2>
            <p>Email: Jcaro1993@mail.com</p>
            <p>Linkedin: https://www.linkedin.com/in/jcaro94/</p>
            <p>GitHub: https://github.com/jcaro1993</p>
            <p>Resume: https://drive.google.com/file/d/1nhtmj4ltBOi5nXgdEvM8HRwgstCmvW6b/view?usp=sharing</p>
            <p>Mob: ‪(925)639.2515</p>
        </div>
        )
    }
