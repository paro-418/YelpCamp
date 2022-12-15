import classes from './SearchPage.module.css';
import React, { useEffect } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';
import Card from '../../components/Card/Card';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllCamps } from '../../Store/campground-slice';

const SearchPage = () => {
  const dispatch = useDispatch();
  const allCamps = useSelector((state) => state.campgroundReducers.allCamps);

  useEffect(() => {
    dispatch(fetchAllCamps());
  }, [dispatch]);
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
        {allCamps.length === 0 ? (
          <p>Loading...Please wait</p>
        ) : (
          allCamps.map((campground) => (
            <Card key={campground._id} campground={campground} />
          ))
        )}
      </div>
      <Footer />
    </main>
  );
};

export default SearchPage;
