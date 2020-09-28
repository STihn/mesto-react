import React from 'react';
import '../../index.css';

const Footer = () => {
    let date = new Date();
    let year  = date.getFullYear();
    return (
        <div className="footer wrapper">
            <p className="footer__copyright">&copy; {year} Mesto Russia</p>
        </div>
    )
};

export default Footer;