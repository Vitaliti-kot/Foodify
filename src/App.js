import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Routes,
  Route
} from 'react-router-dom';
import {Home} from './Pages/Home';
import {Favourit} from './Pages/Favourit';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/favourites' element={<Favourit/>}/>
    </Routes>
    </>
  );
  
}

export default App;
