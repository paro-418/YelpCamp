import React from 'react';
import classes from './LandingPage.module.css';
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <main className={classes.main}>
      <div className={classes.leftDiv}>
        <img src='/Assets/Logo.svg' alt='logo' className={classes.logo} />

        <div className={classes.heroDiv}>
          <img src='/Assets/HeroImage(TabletMobile).jpg' alt='logo' />
        </div>

        <div className={classes.subContainer}>
          <h1>Explore the best camps on Earth.</h1>
          <p className={classes.description}>
            YelpCamp is a curated list of best camping spots on Earth.
            Unfiltered and Unbiased reviews
          </p>
          <ul>
            <li>
              <img src='/Assets/CheckMark.svg' alt='checkMark' />
              Add your own camp suggestions.
            </li>
            <li>
              <img src='/Assets/CheckMark.svg' alt='checkMark' />
              Leave reviews and experiences.
            </li>
            <li>
              <img src='/Assets/CheckMark.svg' alt='checkMark' />
              See locations for all camps.
            </li>
          </ul>
          <Button className={classes.btn}>
            <Link className={classes.Link} to='/campground'>
              View CampGrounds
            </Link>
          </Button>

          <div className={classes.companiesDiv}>
            <p>Partnered with:</p>
            <div className={classes.companies}>
              <img
                className={classes.company}
                src='/Assets/Airbnb.svg'
                alt='air-bnb'
              />
              <img
                className={classes.company}
                src='/Assets/Booking.svg'
                alt='Booking.com'
              />
              <img
                className={classes.company}
                src='/Assets/PlumGuide.svg'
                alt='PlumGuide'
              />
            </div>
          </div>
        </div>
      </div>
      <div className={classes.rightDiv}>
        <img
          src='/Assets/HeroImage.jpg'
          alt='landing page'
          className={classes.heroImg}
        />
      </div>
    </main>
  );
};

export default LandingPage;
