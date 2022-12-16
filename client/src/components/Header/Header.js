import React from 'react';
import classes from './Header.module.css';
import { Link } from 'react-router-dom';
import Button from '../Button/Button.js';
import { useSelector, useDispatch } from 'react-redux';
import { userSliceActions } from '../../Store/user-slice';
const Header = (props) => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.userReducers);
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
            {userInfo.isLoggedIn ? (
              <Button className={` ${classes.btn} ${classes.userName}`}>
                <Link className={classes.Link} to='/profile'>
                  {userInfo.username}
                </Link>
              </Button>
            ) : (
              <Button className={` ${classes.btn}`}>
                <Link className={classes.Link} to='/login'>
                  Login
                </Link>
              </Button>
            )}

            {userInfo.isLoggedIn ? (
              <Button
                callFunction={() => dispatch(userSliceActions.logoutUser())}
                className={`${classes.btn} ${classes.logoutBtn}`}
              >
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
