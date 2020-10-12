import React from 'react';
import "./Contact.css";

function Contact(){
    return (
        <figure className="Contact">
            <img 
            src="https://randomuser.me/api/portraits/men/74.jpg" 
            alt="Vincent Richardson"
            className="avatar"/>
            <div>
                <h4 className="name">Vincent Richardson</h4>
                <div className="status">
                    <span className="status-online"></span>
                    <p className="status-text">Online</p>
                </div>
            </div>
        </figure>
    );
}

export default Contact;