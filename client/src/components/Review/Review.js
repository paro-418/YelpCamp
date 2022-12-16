import React from 'react';
import classes from './Review.module.css';

const Review = ({ review }) => {
  console.log(review);
  return (
    <div className={classes.review}>
      <div className={classes.nameTime}>
        <h3>{review.reviewerName}</h3>
        <time>13h ago</time>
      </div>
      <blockquote className={classes.blockquote}>{review.review}</blockquote>
    </div>
  );
};

export default Review;
