import React from 'react';
import './App.css';
import Home from './Home';
//cruda
import Department from './cruds/Department';
import Employee from './cruds/Employee';
import Room from './cruds/Room';
import HouseKeeping from './cruds/HouseKeeping';
import Tickets from './cruds/Tickets';
import Paymentss from './cruds/Paymentss';
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import AboutUs from './aboutUs/AboutUs';
import Mailer from './contactUs/mailer';
import List from './Rezervime/List';
import HotelReservation from './Rezervime/HotelReservation';
import Navbar from './sideBar/components/Navbar';

import { SidebarData } from './sideBar/components/SlidebarData';
// import { HomeRezervimi } from './Rezervime/HomeReservimi';
import Portfolio from './blog/Portfolio';
import Blog from './blog/Blog';
import Cards from './Cards';
import Login from './login/Login';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/department' element={<Department />}/>
          <Route path='/employee' element={<Employee />}/>
          <Route path='/room' element={<Room />}/>
          <Route path='/housekeeping' element={<HouseKeeping />}/>

          <Route path='/tickets' element={<Tickets />}/>
          <Route path='/payments' element={<Paymentss />}/>
          
          
          <Route path='/cards' element={<Cards />}/>
          <Route path='/aboutus' element={<AboutUs />}/>
          <Route path='/contactus' element={<Mailer />}/>
          <Route path='/list' element={<List />}/>
          <Route path='/hotelReservation' element={<HotelReservation />}/>
          {/* <Route path='/home' element={<HomeRezervimi />}/> */}
          <Route path='/portfolio' element={<Portfolio />}/>
          <Route path='/blog' element={<Blog />}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/navbar' element={<Navbar/>}/>

          
        </Routes>
      </Router>
    </>
  );
}

export default App;
