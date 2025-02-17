import Footer from './components/Footer';
import Header from './components/Header';
import Booking from './pages/Booking';
import Home from './pages/Home';
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className='overflow-hidden'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/table-booking' element={<Booking />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
