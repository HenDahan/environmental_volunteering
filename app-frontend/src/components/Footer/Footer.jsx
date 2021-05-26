import React from 'react'
import "./footer.css";
function Footer() {
    const date = new Date().getFullYear;
    return(
        <footer className="footer">
        <div className="footer-paragraph">
            <p>
                Created By WeClean Team!
            </p>
            <p>
                Copyright (c) {date}
            </p>
        </div>
        </footer>
    );
    
}
export default Footer;