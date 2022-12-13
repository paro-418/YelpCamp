import { Route, Routes } from 'react-router-dom';
import AddCommentPage from './pages/AddCommentPage/AddCommentPage.js';
import CampGroundPage from './pages/CampGroundPage/CampGroundPage.js';
import LandingPage from './pages/LandingPage/LandingPage.js';
import SearchPage from './pages/SearchPage/SearchPage.js';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/campground' element={<CampGroundPage />} />
        <Route path='/post-review' element={<AddCommentPage />} />
        <Route path='/search' element={<SearchPage />} />
      </Routes>
    </div>
  );
}

export default App;
