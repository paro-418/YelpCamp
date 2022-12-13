import { Route, Routes } from 'react-router-dom';
import CampGroundPage from './pages/CampGroundPage/CampGroundPage.js';
import LandingPage from './pages/LandingPage/LandingPage.js';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/campground' element={<CampGroundPage />} />
      </Routes>
    </div>
  );
}

export default App;
