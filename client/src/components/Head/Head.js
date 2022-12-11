import React from 'react';
import classes from 'Head.module.css';
import Button from '../Button/Button.js';
const Head = () => {
  const ifLoggedIn = false;
  const currentLoggedInUserName = 'paro';
  return (
    <header>
      <div className={classes.logoDiv}>
        <img src='/Assets/Logo.svg' alt='Logo' />
      </div>
      <div className={classes.btnDiv}>
        <Button className={`${classes.homeBtn} btn`}>Home</Button>
        <span className={classes.btnSpan}>
          {ifLoggedIn ? (
            <Button className={`${classes.leftBtn} btn`}>
              {currentLoggedInUserName}
            </Button>
          ) : (
            <Button className={`${classes.leftBtn} btn`}>Login</Button>
          )}

          {ifLoggedIn ? (
            <Button className={`${classes.rightBtn} btn`}>Logout</Button>
          ) : (
            <Button className={`${classes.rightBtn} btn`}>
              Create Account
            </Button>
          )}
        </span>
      </div>
    </header>
  );
};

export default Head;
