
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home  from './pages/Home/Home';
import Hotels  from './pages/Hotels/Hotels';
//import Navigue from './pages/Navigue/Navigue';
import Footer from './components/Footer/Footer';
import DetailsHotel from './pages/DetailsHotel/DetailsHotel';
//import Header from './components/Header/Header';

function App() {
  return (
   <BrowserRouter>  
                   <Navbar /> 
                   <Routes> 
                             <Route path='/' element={ <Home /> }>  </Route>
                             <Route path='/details_hotel' element={ <DetailsHotel /> }>  </Route>
                             <Route path='/hotels/:adult/:children/:room/:destin' element={ <Hotels /> }>  </Route>
                   </Routes>
                   <Footer />
   </BrowserRouter>
  );
}

export default App;
