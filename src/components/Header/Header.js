import React from 'react';
import '../../index.css';
import HeaderLogo from '../../images/logo.svg';

const Header = () => {
    return (
        <div className="header wrapper">
            <img className="header__logo" src={HeaderLogo} alt="Лототип сайта" />
        </div>
    );
};

export default Header;