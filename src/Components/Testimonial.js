import React from "react";

import AboutBackground from "../Assets/about-background.png";
import AboutBackground1 from "../Assets/right.png";

const Testimonial = () => {
  return (
    <div id="testimonial" className="work-section-wrapper">
       <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="workr">
        <img src={AboutBackground1} alt="" />
      </div>
      <div className="work-section-top">
        <h1 className="primary-heading"> Search for Recipes</h1>
        </div>
        <div class="search-container">
  <input type="text" placeholder="Tamato,onion,Pasta...."></input>
  <button type="submit">Submit <i class="fa fa-search"></i></button>
</div>



    </div>
  );
};

export default Testimonial;
