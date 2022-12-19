import classes from './SearchPage.module.css';
import React, { useEffect, useRef } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';
import Card from '../../components/Card/Card';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchAllCamps,
  fetchSpecificCamps,
} from '../../Store/campground-slice';
import Select from '../../components/Select/Select';

const SearchPage = () => {
  const dispatch = useDispatch();
  const allCamps = useSelector((state) => state.campgroundReducers.allCamps);
  const categories = useSelector(
    (state) => state.campgroundReducers.categories
  );
  const isLoggedIn = useSelector((state) => state.userReducers.isLoggedIn);
  const categoryRef = useRef();
  useEffect(() => {
    dispatch(fetchAllCamps());
  }, [dispatch]);

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const selected = categoryRef.current.value;
    dispatch(fetchSpecificCamps(selected));
  };
  return (
    <main className={classes.main}>
      <Header />
      <div className={classes.formContainer}>
        <h2>Welcome to YelpCamp!</h2>
        <p className={classes.p}>
          View our hand-picked campground from all over the world, or add your
          own.
        </p>
        <form className={classes.form} onSubmit={formSubmitHandler}>
          <Select
            reference={categoryRef}
            className={classes.select}
            id='category'
            name='category'
            options={categories}
            defaultOption='All Campgrounds'
          />
          <Button type='submit' className={classes.searchBtn}>
            search
          </Button>
        </form>
        {isLoggedIn ? (
          <Link className={classes.Link} to='/campgrounds/add-campground'>
            Or add your own campground
          </Link>
        ) : (
          <Link to='/login' className={classes.Link}>
            {' '}
            Or Login to add your own campground
          </Link>
        )}
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
