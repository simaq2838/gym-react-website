import React from 'react'
import "./Features.css"
import BodyBuilding from "../images/bodybuilding.jpg"
import Women from "../images/women.jpg"
const Features = () => {
  return (
    <div>
        <section className="features" id="features">
        <h1 class="heading"> <span>Gym features</span> </h1>

    <div class="box-container">
        {/* Import Image  and information */}
        <div class="box">
            <img src={BodyBuilding} alt=""/>
            <div class="content">
                <h3>Gym for Men</h3>
                <div class="share">
                </div>
            </div>
        </div>

         {/* Import Image  and information */}
        <div class="box">
            <img src={Women} alt=""/>
            <div class="content">
                <h3>Gym for Women</h3>
                <div class="share">
                </div>
            </div>
        </div>

    </div>

</section>
    </div>
  )
}

export default Features