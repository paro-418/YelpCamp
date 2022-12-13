import React from 'react';
import classes from './Header.module.css';
import { Link } from 'react-router-dom';
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
          <Button className={`${classes.btn}`}>
            <Link className={classes.Link} to='/'>
              Home
            </Link>
          </Button>
          <span className={classes.btnSpan}>
            {ifLoggedIn ? (
              <Button className={` ${classes.btn} ${classes.userName}`}>
                <Link className={classes.Link} to='/profile'>
                  {currentLoggedInUserName}
                </Link>
              </Button>
            ) : (
              <Button className={` ${classes.btn}`}>
                <Link className={classes.Link} to='/login'>
                  Login
                </Link>
              </Button>
            )}

            {ifLoggedIn ? (
              <Button className={`${classes.btn} ${classes.logoutBtn}`}>
                Logout
              </Button>
            ) : (
              <Button className={`${classes.createAccount} ${classes.btn} `}>
                <Link className={classes.Link} to='/signup'>
                  Create Account
                </Link>
              </Button>
            )}
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
