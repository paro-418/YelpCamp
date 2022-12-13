import classes from './SearchPage.module.css';

import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';
import Card from '../../components/Card/Card';

const SearchPage = () => {
  return (
    <main className={classes.main}>
      <Header />
      <div className={classes.formContainer}>
        <h2>Welcome to YelpCamp!</h2>
        <p className={classes.p}>
          View our hand-picked campground from all over the world, or add your
          own.
        </p>
        <form className={classes.form}>
          <input
            type='text'
            placeholder='Search for camps'
            className={classes.input}
          />
          <Button className={classes.searchBtn}>search</Button>
        </form>
        <Link>Or add your own campground</Link>
      </div>
      <div className={classes.cardContainer}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Footer />
    </main>
  );
};

export default SearchPage;
