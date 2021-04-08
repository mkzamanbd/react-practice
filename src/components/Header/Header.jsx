import React from 'react';
import logo from './../../assets/images/logo.svg'
import reactLogo from './../../assets/images/react.svg'
import styles from './Header.module.css';

const Header = () =>{
    return (
        <header>
            <div className="container" id="header">
            <div>
                <img className={styles.logo} src={logo} alt="Logo" />
            </div>
            <div className="textRight">
                <img src={reactLogo} alt="React" className={styles.reactLogo} /><strong>React</strong>
            </div>
            </div>
        </header>
    )
}

export default Header;