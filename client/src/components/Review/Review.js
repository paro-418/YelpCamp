import React from 'react';
import classes from './Review.module.css';

const Review = () => {
  return (
    <div className={classes.review}>
      <div className={classes.nameTime}>
        <h3>name</h3>
        <time>13h ago</time>
      </div>
      <blockquote>
        some good or bad review by someone ome good or bad review by someone
        good or bad review by someone ome good or bad review by someone ome good
        or bad review by someone ome good or bad review by someone
      </blockquote>
    </div>
  );
};

export default Review;
