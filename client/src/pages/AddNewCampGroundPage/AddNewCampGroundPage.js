import classes from './AddNewCampGroundPage.module.css';

import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Button from '../../components/Button/Button';

const AddNewCampGroundPage = () => {
  return (
    <main className={classes.main}>
      <Header />
      <div className={classes.formContainer}>
        <h1 className={classes.h1}>Add New CampGround</h1>
        <form className={classes.form}>
          <label htmlFor='campgroundName' className={classes.label}>
            CampGround Name
          </label>
          <input
            type='text'
            required
            id='campgroundName'
            className={classes.input}
          />
          <label htmlFor='price' className={classes.label}>
            Price
          </label>
          <input
            placeholder='in rupees'
            type='text'
            required
            id='price'
            className={classes.input}
          />
          <label htmlFor='image' className={classes.label}>
            image
          </label>
          <input
            placeholder='link of the image'
            type='text'
            required
            id='image'
            className={classes.input}
          />
          <label htmlFor='description' className={classes.label}>
            Description
          </label>
          <textarea
            type='text'
            required
            id='description'
            className={classes.textarea}
          />

          <Button className={classes.submitBtn}>Add CampGround</Button>
        </form>
      </div>
      <Footer />
    </main>
  );
};

export default AddNewCampGroundPage;
