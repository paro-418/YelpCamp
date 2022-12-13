import React, { Fragment } from 'react';
import classes from './CampGroundPage.module.css';
import Footer from '../../components/Footer/Footer.js';
import Review from '../../components/Review/Review';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';

const CampGroundPage = () => {
  return (
    <Fragment>
      <Header header={classes.header} />
      <main className={classes.main}>
        <div className={classes.mapContainer}>
          <img src='/Assets/Map.png' alt='map' className={classes.mapImage} />
        </div>
        <div className={classes.infoContainer}>
          <div className={classes.camp}>
            <img
              src='/Assets/Camp Images/HighQuality-Images/LatikRiverside.jpg'
              alt='camp'
              className={classes.campImage}
            />
            <article className={classes.campInfo}>
              <div className={classes.campTitle}>
                <h4 className={classes.campName}>Mount Ulap</h4>
                <span className={classes.campPrice}>$104.99/night</span>
              </div>
              <p className={classes.campDescription}>
                good or bad review by someone good or bad review by someone ome
                good or bad review by someone ome good or bad review by someone
                ome good or bad review by someone
              </p>
              <span className={classes.submittedBy}>
                Submitted by Andrew Mikes
              </span>
            </article>
          </div>
          <div className={classes.reviews}>
            <Review />
            <Review />
            <Review />
            <Review />
            <Button className={classes.reviewBtn}>
              <Link to='/post-review' className={classes.Link}>
                <img src='/Assets/Chat Bubble.svg' alt='add review button' />
                Leave a review
              </Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer className={classes.footer} />
    </Fragment>
  );
};

export default CampGroundPage;
