import React from 'react'
import "./Footer.css"
const Footer = () => {
  return (
    <div>
        <section className="footer" id="contact">

<div className="box-container">
     {/* Gym Timimg */}
    <div className="box" id= "timing">
        <h3>opening hours</h3>
        <p> monday : <i> 5:30am - 11:00am </i> & <i>4:30pm - 9:30pm</i></p>
        <p> tuesday : <i> 7:00am - 10:30pm </i> & <i>4:30pm - 9:30pm</i></p>
        <p> Saturday : <i> 7:00am - 10:30pm </i> & <i>4:30pm - 9:30pm</i></p>
        <p> friday : <i> 7:00am - 10:30pm </i>& <i>4:30pm - 9:30pm</i> </p>
        <p> saturday : <i> 7:00am - 10:30pm </i>& <i>4:30pm - 9:30pm</i> </p>
        <p> sunday : <i> closed </i> </p>
    </div>

     {/* Conatct details */}
    <div className="box">
        <h3>opening hours</h3>
        <p> <i className="fas fa-phone"></i> +123-456-7890 </p>
        <p> <i className="fas fa-phone"></i> +111-222-3333 </p>
        <p> <i className="fas fa-envelope"></i> key2fitness@gmail.com </p>
        <p> <i className="fas fa-map"></i> Erode, Tamilnadu - 638011 </p>
        <div className="share">
            <a href='#home' className="fab fa-facebook-f"><span></span></a>
            <a href="#home" className="fab fa-twitter" ><span></span></a>
            <a href="#home" className="fab fa-instagram"><span></span></a>
        </div>
    </div>

    <div className="box">
        <h3>newsletter</h3>
        <p>subscribe for latest updates</p>
        <form action="">
            <input type="email" name="" className="email" placeholder="Enter your email" id=""/>
            <input type="submit" value="subscribe" className="btn"/>
        </form>
    </div>

</div>

</section>

<div className="credit"> Created by <span>Simaq
    </span> | all rights reserved! | Copyright © 2023 </div>
    </div>
  )
  
}

export default Footer