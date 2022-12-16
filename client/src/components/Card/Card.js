import classes from './Card.module.css';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

import React from 'react';

const Card = ({ campground }) => {
  return (
    <div className={classes.card}>
      <div className={classes.imageContainer}>
        <img
          src={campground.campImage}
          alt={campground.campName}
          className={classes.campImage}
        />
      </div>
      <h4 className={classes.campName}>{campground.campName}</h4>
      <p className={classes.description}>{campground.campDescription}</p>
      <Button className={classes.btn}>
        <Link to={`/campgrounds/${campground._id}`} className={classes.Link}>
          View CampGround
        </Link>
      </Button>
    </div>
  );
};

export default Card;
