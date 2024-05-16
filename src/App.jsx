import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { MdPhonelinkRing } from "react-icons/md";
import { FaPen } from "react-icons/fa";
import { SlLike } from "react-icons/sl";
import { SlMustache } from "react-icons/sl";
const App = () => {
  return (
    <div>
       <div className="header ">
      <div className="container">
        <div className="row ">
          <div className="col-12 "><h1>Stylish Portfolio</h1></div>
          <div className="col-12 mt-4 mb-5"><p>A Free Bootstrap Theme by Start Bootstrap</p></div>
          <div className="col-12"><button className='butn btn1'>Find Out More</button></div>
        </div>
        </div>
        </div>

        <div className="project">
          <div className="container">
        <div className="row">
          <div className="col-12"><h2>Stylish Portfolio is the perfect theme for your next project!</h2></div>
          <div className="col-12"><p>This theme features a flexible, UX friendly sidebar menu and stock photos from our friends at Unsplash !</p></div>
          <div className="col-12 mt-5"><button className='butn btn2'>What We Offer</button></div>
        </div>
        </div>
      </div>

     <div className="offer">
      <div className="container">
        <div className="row">
          <div className="col-12"><span style={{ color:"#ec9823",fontSize:"15px",fontWeight:"bold"}}>SERVICES</span></div>
          <div className="col-12 mt-3 mb-5"><h3>What We Offer</h3></div>
          
        </div>
        <div className="row">
          <div className="col-lg-3 col-sm-6"><MdPhonelinkRing className='icon'/><h4>Responsive</h4><span>Looks great on any screen size!</span></div>
          <div className="col-lg-3 col-sm-6 "><FaPen className='icon'/><h4>Redesigned</h4><span>Freshly redesigned for Bootstrap 5.</span></div>
          <div className="col-lg-3 col-sm-6"><SlLike className='icon' /><h4>Favorited</h4><span>Millions of users  Start Bootstrap!</span></div>
          <div className="col-lg-3 col-sm-6"><SlMustache className='icon' /><h4>Question</h4><span>I mustache you a question...</span></div>
        </div>
      </div> 
     </div>
     <div className="welcome">
      <div className="container">
        <div className="row">
         <div className="col-12"> <h1>Welcome to your next website!</h1></div>
         <div className="col-12 mt-5"> <button  className='butn btn1'>Download Now</button></div>
        </div>
      </div>
     </div>
      </div>
  
  )
}

export default App