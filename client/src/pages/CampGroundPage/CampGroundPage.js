import React, { Fragment, useEffect, useState } from 'react';
import classes from './CampGroundPage.module.css';
import Footer from '../../components/Footer/Footer.js';
import Review from '../../components/Review/Review';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllReviews } from '../../Store/review-slice';

const CampGroundPage = () => {
  const allReviews = useSelector((state) => state.reviewReducers.allReviews);
  const dispatch = useDispatch();
  const { campId } = useParams();
  const [campInfo, setCampInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCampInfo = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/campgrounds/${campId}`
        );
        setCampInfo(response.data.camp);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    fetchCampInfo();
  }, [campId]);

  useEffect(() => {
    dispatch(fetchAllReviews(campId));
  }, [dispatch, campId]);
  return (
    <Fragment>
      <Header header={classes.header} />
      {loading ? (
        <h1>Loading...Please wait</h1>
      ) : (
        <main className={classes.main}>
          <div className={classes.mapContainer}>
            <img src='/Assets/Map.png' alt='map' className={classes.mapImage} />
          </div>
          <div className={classes.infoContainer}>
            <div className={classes.camp}>
              <img
                src={campInfo.campImage}
                alt={campInfo.campName}
                className={classes.campImage}
              />
              <article className={classes.campInfo}>
                <div className={classes.campTitle}>
                  <h4 className={classes.campName}>{campInfo.campName}</h4>
                  <span className={classes.campPrice}>$104.99/night</span>
                </div>
                <p className={classes.campDescription}>
                  {campId.campDescription}
                </p>
                <span className={classes.submittedBy}>
                  Submitted by {campInfo.createdBy}
                </span>
              </article>
            </div>
            <div className={classes.reviews}>
              {allReviews.map((review) => (
                <Review key={review._id} review={review} />
              ))}
              <Button className={classes.reviewBtn}>
                <Link
                  to={`/campgrounds/review/post-review/${campId}`}
                  className={classes.Link}
                >
                  <img src='/Assets/Chat Bubble.svg' alt='add review button' />
                  Leave a review
                </Link>
              </Button>
            </div>
          </div>
        </main>
      )}
      <Footer className={classes.footer} />
    </Fragment>
  );
};

export default CampGroundPage;
