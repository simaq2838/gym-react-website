import React from 'react'
import "./About.css"
import Strength from "../images/hero.jpg"
import Cardio from "../images/cardio.jpg"
import Crossfit from "../images/crossfit.webp"
const About = () => {
  return (
    <div>
        <section className="about" id="about">

    {/* Overview  */}
    <div className="container">
        <h1 className="training-option__heading text-center">Your Training <span>Options</span></h1>
        <p className="training-options__body text-center">Defy your limits and pursue your fitness goals with a complimentary all-access gym pass! Try our wide-variety of classNamees, train with world-className coaches, and access the equipment you need. Available at participating locations. Offers vary by location. Terms and conditions may apply.</p>

     {/* Strength training details  */}
    <div className="training training--options pt-1">
        <a href="#home" className="training__card">
        <h3 className="training__card-title">Strength Training</h3>
        <p className="training__card-body">Expect the unexpected in our signature high-intensity interval training className. Cycle through timed interval stations designed to consistently shock your system and deliver results.</p>
        <div className="image-overlay"></div>
        <div className="training__image">
            <img src={Strength} alt="Strength"/>
        </div>
    </a>

    {/* Cardio training details*/}
    <a href="#home" className="training__card">
        <h3 className="training__card-title">Cardio Training</h3>
        <p className="training__card-body">Develop strength, conditioning, and flexibility with our ZOO 365 - inspired fitness routines. These efficient, effective, total-body workouts can be done at home with minimal equipment.</p>
        <div className="image-overlay"></div>
        <div className="training__image">
            <img src={Cardio} alt="Cardio"/>
        </div>
    </a>

    {/* Cross Fit Details */}
    <a href="#home" className="training__card">
        <h3 className="training__card-title">Cross Fit Training</h3>
        <p className="training__card-body">Receive expert advice, a personalized plan, and 1-on-1 real-time attention with online personal training. Regardless of goal or athletic ability, we have a coach for you. Equipment not necessary.</p>
        <div className="image-overlay"></div>
        <div className="training__image">
            <img src={Crossfit} alt="Crossfit"/>
        </div>
    </a>
</div>


</div>

</section>
    </div>
  )
}

export default About