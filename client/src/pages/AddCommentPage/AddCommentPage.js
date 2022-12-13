import classes from './AddCommentPage.module.css';

import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Button from '../../components/Button/Button';

const AddCommentPage = () => {
  return (
    <main className={classes.main}>
      <Header />
      <div className={classes.formContainer}>
        <h1 className={classes.h1}>Add New Comment</h1>
        <form action='' className={classes.form}>
          <label htmlFor='textarea' className={classes.label}>
            Description
          </label>
          <textarea
            id='textarea'
            className={classes.textarea}
            placeholder='write your experience here'
          ></textarea>
          <Button type='submit' className={classes.submitBtn}>
            Post Comment
          </Button>
        </form>
      </div>
      <Footer />
    </main>
  );
};

export default AddCommentPage;
