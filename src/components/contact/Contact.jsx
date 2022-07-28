import React from 'react'
import "./contact.css"
import Phone from "../../img/phone.png"
import Email from "../../img/mail.png"
import Address from "../../img/address.png"
import { useContext, useRef, useState} from 'react/cjs/react.development';
import { ThemeContext } from '../../context'
import emailjs from 'emailjs-com';


const Contact = () => {

    const formRef = useRef()
    const handleSubmit = (e)=>{
        e.preventDefault();

        emailjs.sendForm('service_45cfwuf', 'template_uryo27e', formRef.current, 'WeBLxpnVaNpwKhoNI')
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });
    }
    const [done, setDone] = useState(false)

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

  return (
    <div className="c">
        <div className="c-bg"></div>
        <div className="c-wrapper">
            <div className="c-left">
                <h1 className="c-title">
                    Let's discuss your project
                </h1>
                <div className="c-info">
                    <div className="c-info-item">
                        <img src={Phone}
                        alt="" 
                        className="c-icon" 
                        />
                        +63 906 410 2769
                    </div>
                    <div className="c-info-item">
                        <img src={Email}
                        alt="" 
                        className="c-icon" 
                        />
                        anotdejasper2@gmail.com
                    </div>
                    <div className="c-info-item">
                        <img src={Address}
                        alt="" 
                        className="c-icon" 
                        />
                        375 J.P Rizal St., Mandaluyong City 1550 NCR Philippines
                    </div>
                </div>
            </div>
            <div className="c-right">
                <p className="c-desc">
                    <b>Jasper Jhon Anotde, at your service!</b> Get in touch.
                    Try to freelance if the right project comes along. Hoping
                    to be part of your journey!
                </p>
                <form ref={formRef} onSubmit={handleSubmit}>
                    <input style={{backgroundColor:darkMode && "#333"}} type="text" placeholder="Name" name="user_name"/>
                    <input style={{backgroundColor:darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject"/>
                    <input style={{backgroundColor:darkMode && "#333"}} type="text" placeholder="Email" name="user_email"/>
                    <textarea style={{backgroundColor:darkMode && "#333"}} name="message" id="" placeholder="Message" cols="30" rows="5"></textarea>
                    <button>Submit</button>
                    {done && "Thank you, I will respond soon!"}
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact