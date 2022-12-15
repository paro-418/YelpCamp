import classes from './SearchPage.module.css';
import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';
import Card from '../../components/Card/Card';
import axios from 'axios';

const SearchPage = () => {
  const apiRoute = 'http://localhost:5000';
  const [campgrounds, setCampgrounds] = useState([]);
  const getAllCampGrounds = async () => {
    try {
      const response = await axios.get(
        `${apiRoute}/campgrounds/all-campgrounds`
      );
      console.log(response.data.allCamps);
      setCampgrounds(response.data.allCamps);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllCampGrounds();
  }, []);
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
        <Link to='/campgrounds/add-campground'>Or add your own campground</Link>
      </div>
      <div className={classes.cardContainer}>
        {campgrounds.length === 0 ? (
          <p>Loading...Please wait</p>
        ) : (
          campgrounds.map((campground) => (
            <Card key={campground._id} campground={campground} />
          ))
        )}
      </div>
      <Footer />
    </main>
  );
};

export default SearchPage;
