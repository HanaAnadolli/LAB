import React, { Component } from 'react';
import './Home.css';
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import Clients from './components/Clients';
import Ofers from './components/Ofers';
import Choose from './aboutUs/Choose';

function Home() {
  return (
      <div className="App container-fluid">

        <Navbar/>
        <br/><br/><br/><br/>
        <h1 id="titulli">Lifelong memories just a <br/> &nbsp;&nbsp; <span className="strong"> few seconds away</span> </h1>
        <br/>
        <p id="p">Let's start your journey with us, your dreams will come true</p>

        <br/> <br/>
        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://wallpaperaccess.com/full/1408398.jpg"
              alt="First slide"
              height={650} width={1400}
            />
            <Carousel.Caption>
              <h3>Book your dream vacation now!!</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://wallpaperaccess.com/full/1136600.jpg"
              alt="Second slide"
              height={650} width={1400}
            />

            <Carousel.Caption>
              <h3>Best offerts for the summer</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://4.bp.blogspot.com/-3LNWDRn_kTs/XFUltNu02GI/AAAAAAAABz0/-xewC2WBr_sRy62nyRfMcTf-HyKFAIUtQCKgBGAs/w4096-h2304-c/bora-bora-beach-mountain-nature-33-4K.jpg"
              alt="Third slide"
              height={650} width={1400}
            />

            <Carousel.Caption>
              <h3>We make your dreams true</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <br/> <br/>
        <Ofers/>
        <br/><br/><br/><br/>
        <hr style={{color:'yellow'}}/>
        <Clients />
        <hr style={{color:'yellow'}}/>
      </div>
  );
}

export default Home;