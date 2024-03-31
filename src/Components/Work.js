import React from "react";
import PickMeals from "../Assets/save.png";
import ChooseMeals from "../Assets/search.png";
import DeliveryMeals from "../Assets/heart.png";
import BannerBackground from "../Assets/right.png";

import AboutBackground from "../Assets/about-background.png";





const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Register",
      text: "Register with your email",
    },
    {
      image: ChooseMeals,
      title: "Search",
      text: "Discover Recipes Based on What's in Your Fridge and Cupboard",
    },
    {
      image: DeliveryMeals,
      title: "Save Favourites",
      text: "Save Your Favorite Recipes with Ease – Flavor Finder Keeps Your Best Dishes Handy",
    },
  ];
  return (
    <div className="work-section-wrapper">
     
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        </div>
      
    
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        
     
        <p className="primary-text">
        With our intuitive search feature, you can explore a vast array of recipes tailored to your taste preferences. Simply register with us to unlock a world of flavor possibilities. Save your go-to recipes for easy access, and even share your culinary creations with friends and family.
        </p>
        <p className="primary-text">
        Let's make cooking exciting, effortless, and oh-so-delicious!"
        </p>
        <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      </div>
      
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
