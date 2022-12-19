import { Route, Routes } from 'react-router-dom';
import AddCommentPage from './pages/AddCommentPage/AddCommentPage.js';
import AddNewCampGroundPage from './pages/AddNewCampGroundPage/AddNewCampGroundPage.js';
import CampGroundPage from './pages/CampGroundPage/CampGroundPage.js';
import LandingPage from './pages/LandingPage/LandingPage.js';
import SearchPage from './pages/SearchPage/SearchPage.js';
import SignUpPage from './pages/SignUpPage/SignUpPage.js';
import axios from 'axios';
import Cookies from 'universal-cookie';

function App() {
  const cookies = new Cookies();
  const token = cookies.get('YELP_CAMP_JWT_TOKEN') || undefined;
  axios.defaults.headers.common = {
    Authorization: token,
  };
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/campgrounds' element={<SearchPage />} />
        <Route
          path='/campgrounds/add-campground'
          element={<AddNewCampGroundPage />}
        />
        <Route path='/campgrounds/:campId' element={<CampGroundPage />} />
        <Route
          path='campgrounds/review/post-review/:campId'
          element={<AddCommentPage />}
        />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/login' element={<SignUpPage />} />
      </Routes>
    </div>
  );
}

export default App;
