import ConfirmedBooking from './components/ConfirmedBooking';
import Footer from './components/Footer';
import Header from './components/Header';
import BookingPage from './pages/BookingPage';
import Home from './pages/Home';
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className='overflow-hidden'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/table-booking' element={<BookingPage />} />
        <Route path='/confirmed' element={<ConfirmedBooking />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
