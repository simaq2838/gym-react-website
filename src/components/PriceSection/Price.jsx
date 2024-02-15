import React from 'react';
import "./Price.css";

const Price = ({ plans }) => {
  return (
    <div>
       {/* Pricing Details*/}
      <h1 className="heading"> <span>Pricing</span> </h1>
      <section className="pricing" id="pricing">
        {plans.map((plan, index) => (
          <div className={`plan ${plan.type}`} key={index}>
            <h3>{plan.name}</h3>
            <div className="price"><span>₹</span>{plan.price}<span>/mo</span></div>
            <div className="list">
              {plan.features.map((feature, i) => (
                <p key={i}> <i className="fas fa-check"></i> {feature} </p>
              ))}
            </div>
            <a href="#home" className="btn">get started</a>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Price;