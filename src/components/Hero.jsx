import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1>
          Awesome App <br /> App Landing Template
        </h1>

        <p>
          An awesome landing page template to showcase your app features,
          screenshots, pricing and download links.
        </p>

        <ul>
          <li>Amazing Design to Present Your App</li>
          <li>Fully Responsive and Modern Layout</li>
          <li>Very Easy to Customize and Setup</li>
        </ul>

        <button className="start-btn">Start Exploring</button>
      </div>

      <div className="hero-right">
        <img src="/phone.png.avif" alt="phone" />
      </div>
    </section>
  );
};

export default Hero;