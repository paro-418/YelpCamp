import classes from './AddNewCampGroundPage.module.css';
import { sendNewCampground } from '../../Store/campground-slice';
import React, { useRef } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Button from '../../components/Button/Button';
import { useDispatch } from 'react-redux';

const AddNewCampGroundPage = () => {
  const dispatch = useDispatch();
  const nameRef = useRef();
  const priceRef = useRef();
  const imageRef = useRef();
  const descriptionRef = useRef();

  const formSubmitHandler = async (event) => {
    event.preventDefault();
    dispatch(
      sendNewCampground({
        campImage: imageRef.current.value,
        price: priceRef.current.value,
        campDescription: descriptionRef.current.value,
        campName: nameRef.current.value,
      })
    );
    imageRef.current.value = '';
    descriptionRef.current.value = '';
    nameRef.current.value = '';
    priceRef.current.value = '';
  };
  return (
    <main className={classes.main}>
      <Header />
      <div className={classes.formContainer}>
        <h1 className={classes.h1}>Add New CampGround</h1>
        <form className={classes.form} onSubmit={formSubmitHandler}>
          <label htmlFor='campgroundName' className={classes.label}>
            CampGround Name
          </label>
          <input
            type='text'
            required
            id='campgroundName'
            className={classes.input}
            ref={nameRef}
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
            ref={priceRef}
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
            ref={imageRef}
          />
          <label htmlFor='description' className={classes.label}>
            Description
          </label>
          <textarea
            type='text'
            required
            id='description'
            className={classes.textarea}
            ref={descriptionRef}
          />

          <Button className={classes.submitBtn}>Add CampGround</Button>
        </form>
      </div>
      <Footer />
    </main>
  );
};

export default AddNewCampGroundPage;
