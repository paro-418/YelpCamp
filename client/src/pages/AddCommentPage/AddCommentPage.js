import classes from './AddCommentPage.module.css';

import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Button from '../../components/Button/Button';
import { useParams } from 'react-router-dom';
import { useRef } from 'react';
import { postReview } from '../../Store/review-slice';
import { useDispatch, useSelector } from 'react-redux';

const AddCommentPage = () => {
  const { campId } = useParams();
  const dispatch = useDispatch();
  const currentLoggedInUserId = useSelector(
    (state) => state.userReducers.userId
  );
  const currentLoggedInUserName = useSelector(
    (state) => state.userReducers.username
  );
  const reviewRef = useRef();

  const formSubmitHandler = (event) => {
    event.preventDefault();
    dispatch(
      postReview({
        review: reviewRef.current.value,
        reviewerId: currentLoggedInUserId,
        reviewedCamp: campId,
        reviewerName: currentLoggedInUserName,
      })
    );
  };
  return (
    <main className={classes.main}>
      <Header />
      <div className={classes.formContainer}>
        <h1 className={classes.h1}>Add New Comment</h1>
        <form action='' className={classes.form} onSubmit={formSubmitHandler}>
          <label htmlFor='textarea' className={classes.label}>
            Description
          </label>
          <textarea
            ref={reviewRef}
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
