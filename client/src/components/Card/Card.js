import classes from './Card.module.css';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

import React from 'react';

const Card = () => {
  return (
    <div className={classes.card}>
      <div className={classes.imageContainer}>
        <img
          src='/Assets/CampImages/HighQuality-Images/MountUlap.png'
          alt='camp'
          className={classes.campImage}
        />
      </div>
      <h4 className={classes.campName}>Mount Ulap</h4>
      <p className={classes.description}>
        mount Ulap is very good place to visit
      </p>
      <Button className={classes.btn}>
        <Link to='Mount-Ulap' className={classes.Link}>
          View CampGround
        </Link>
      </Button>
    </div>
  );
};

export default Card;
