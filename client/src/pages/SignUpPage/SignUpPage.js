import React from 'react';
import classes from './SignUpPage.module.css';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';

const SignUpPage = () => {
  const alreadyAUser = false;
  return (
    <main className={classes.main}>
      <div className={classes.formContainer}>
        <header>
          <img src='/Assets/Logo.svg' alt='logo' />
          <Link to='/campgrounds'>Back to campgrounds</Link>
        </header>
        <form className={classes.form}>
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
            />
          </div>

          {alreadyAUser ? (
            <Button className={classes.submitBtn} type='submit'>
              Login
            </Button>
          ) : (
            <Button className={classes.submitBtn} type='submit'>
              Create an account
            </Button>
          )}
        </form>
        {alreadyAUser ? (
          <p>
            Not a user yet? &nbsp;
            <Button className={classes.quesBtn}>Create an account</Button>
          </p>
        ) : (
          <p>
            Already a user? &nbsp;
            <Button className={classes.quesBtn}>Sign in</Button>
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
