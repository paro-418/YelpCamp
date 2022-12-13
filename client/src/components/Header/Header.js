import React from 'react';
import classes from './Header.module.css';
import Button from '../Button/Button.js';
const Header = (props) => {
  const ifLoggedIn = false;
  const currentLoggedInUserName = 'paro';
  return (
    <header className={props.header}>
      <div className={classes.logoDiv}>
        <img src='/Assets/Logo.svg' alt='Logo' />
      </div>

      <div className={classes.hamburgerDiv}>
        <input type='checkbox' className={classes.checkbox} />
        <img
          src='/Assets/Hamburger Menu.svg'
          alt='menu button'
          className={classes.hamburger}
        />
        <div className={classes.btnDiv}>
          <Button className={`${classes.btn}`}>Home</Button>
          <span className={classes.btnSpan}>
            {ifLoggedIn ? (
              <Button className={` ${classes.btn} ${classes.userName}`}>
                {currentLoggedInUserName}
              </Button>
            ) : (
              <Button className={` ${classes.btn}`}>Login</Button>
            )}

            {ifLoggedIn ? (
              <Button className={`${classes.btn}`}>Logout</Button>
            ) : (
              <Button className={`${classes.createAccount} ${classes.btn} `}>
                Create Account
              </Button>
            )}
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
