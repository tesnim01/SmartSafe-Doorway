import React from 'react';
import './aboutPage.css';
import 'react-slideshow-image/dist/styles.css';
import Header from "../../components/header/Header";
import { Slide } from 'react-slideshow-image';
import slide1 from './slide1.jpg';
import slide2 from './slide2.jpg';
import slide3 from './slide3.jpg';
import slide4 from './slide4.jpg';
//import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login';
const buttonStyle = {
    width: "10px",
    background: 'none',
    border: '0px'
};

const properties = {
    duration: 2000, 
    
    prevArrow: <button style={{ ...buttonStyle }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z"/></svg></button>,
    nextArrow: <button style={{ ...buttonStyle }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M512 256L270 42.6v138.2H0v150.6h270v138z"/></svg></button>
}

const AboutPage = () => {
  return (
    
    <div>
      <Header />
      <div style={{ float: 'left', width: '80%',backgroundColor:'black'}}>
        <Slide {...properties} >
          <div className="each-slide">
              <div style={{'backgroundImage': `url(${slide1})`}}>
              </div>
          </div>
          <div className="each-slide">
              <div style={{'backgroundImage': `url(${slide2})`}}>
              </div>
          </div>
          <div className="each-slide">
              <div style={{'backgroundImage': `url(${slide3})`}}>
              </div>
          </div>
          <div className="each-slide">
              <div style={{'backgroundImage': `url(${slide4})`}}>
              </div>
          </div>
          </Slide>
          <div className="slide-title">
            <h1>COVID-19
              Prevention
            </h1>
            <p>Your Safety Is Our Top Priority</p>
            <p>We are taking extra precautions against COVID-19 {'\n'}
              to help protect our staff and our world</p>
          </div>
          <h2 className='login-square'>Login</h2>
        </div>
      <div className="assets">
        <Login></Login>
      </div>
    </div>
  );
};


export default AboutPage;
