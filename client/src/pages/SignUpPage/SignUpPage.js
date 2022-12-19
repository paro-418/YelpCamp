import React, { useEffect, useRef, useState } from 'react';
import classes from './SignUpPage.module.css';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import { useDispatch } from 'react-redux';
import { requestLogin, requestCreate } from '../../Store/user-slice';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Cookie from 'universal-cookie';

const SignUpPage = () => {
  const cookies = new Cookie();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loggingSuccessful = useSelector(
    (state) => state.userReducers.isLoggedIn
  );
  useEffect(() => {
    if (loggingSuccessful) {
      navigate(-1);
    }
  }, [loggingSuccessful, navigate]);

  // this state is to toggle between create or sing in function
  const [createOrLogin, setSetCreateOrLogin] = useState(true);
  const usernameRef = useRef();
  const passwordRef = useRef();

  const toggleCreateOrLogin = () => {
    setSetCreateOrLogin(!createOrLogin);
  };

  const formSubmitHandler = async (event) => {
    event.preventDefault();
    if (createOrLogin) {
      dispatch(
        requestLogin({
          credentials: {
            username: usernameRef.current.value,
            password: passwordRef.current.value,
          },
          storeCookieFn: cookies,
        })
      );
    } else {
      dispatch(
        requestCreate({
          credentials: {
            username: usernameRef.current.value,
            password: passwordRef.current.value,
          },
          storeCookieFn: cookies,
        })
      );
    }
  };
  return (
    <main className={classes.main}>
      <div className={classes.formContainer}>
        <header>
          <img src='/Assets/Logo.svg' alt='logo' />
          <Link to='/campgrounds'>Back to campgrounds</Link>
        </header>
        <form className={classes.form} onSubmit={formSubmitHandler}>
          <h1 className={classes.h1}>
            Start exploring camps from all around the world.
          </h1>

          <div className={classes.inputContainer}>
            <label htmlFor='username' className={classes.label}>
              username
            </label>
            <input
              id='username'
              placeholder='username'
              type='text'
              required
              className={classes.input}
              ref={usernameRef}
            />
            <label htmlFor='password' className={classes.label}>
              password
            </label>
            <input
              id='password'
              placeholder='password'
              text='password'
              required
              className={classes.input}
              ref={passwordRef}
            />
          </div>

          {createOrLogin ? (
            <Button className={classes.submitBtn} type='submit'>
              Login
            </Button>
          ) : (
            <Button className={classes.submitBtn} type='submit'>
              Create an account
            </Button>
          )}
        </form>
        {createOrLogin ? (
          <p>
            Not a user yet? &nbsp;
            <Button
              callFunction={toggleCreateOrLogin}
              className={classes.quesBtn}
            >
              Create an account
            </Button>
          </p>
        ) : (
          <p>
            Already a user? &nbsp;
            <Button
              callFunction={toggleCreateOrLogin}
              className={classes.quesBtn}
            >
              Sign in
            </Button>
          </p>
        )}
      </div>
      <div className={classes.reviewContainer}>
        <span className={classes.review}>
          <blockquote className={classes.blockquote}>
            "someones experience in a long damn sentence i had to type someones
            experience in a long damn sentence i had to type someones experience
            in a long damn sentence i had to type."
          </blockquote>
          <div className={classes.reviewerInfo}>
            <img
              src='/Assets/User Testimonial.svg'
              alt='a user'
              className={classes.userImage}
            />
            <span className={classes.userInfo}>
              <h5 className={classes.name}>May Andrews</h5>
              <p className={classes.position}>Professional Hiker</p>
            </span>
          </div>
        </span>
      </div>
    </main>
  );
};

export default SignUpPage;
