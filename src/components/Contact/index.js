import React from 'react'
import './styles.css'
import logo from './github-logo-face.png'; 

function Contact() {
    return (
        <div className="contact">
            <h4>Email address</h4>
            <p>godfreyturqz@gmail.com</p>
            <h4>Contact no.</h4>
            <p>0926 - 032 - 9024</p>
            <h4>Address</h4>
            <p>Mabalacat, Pampanga, Philippines</p>
            <h4>Professional Profile</h4>
            <p><a href="https://www.linkedin.com/in/godfreyturqueza/">https://www.linkedin.com/in/godfreyturqueza/</a></p>
            <a href="https://github.com/godfreyturqz">
                <div className="github">
                    <h4>More on Github</h4>
                    <span>
                        <img src={logo} alt="github-logo"/>
                    </span>
                </div>
            </a>
        </div>
    )
}

export default Contact
