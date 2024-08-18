// src/components/Slideshow.js
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { slideshowImages } from "../../utils/NewsImages";

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically move to the next slide every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  // Function to go to the next slide
  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slideshowImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to go to the previous slide
  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slideshowImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className=" w-full mx-auto">
      {slideshowImages.map((image, index) => (
        <div
          key={index}
          className={` transition-opacity duration-1000  ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-[100%] h-auto rounded-xl"
          />
        </div>
      ))}
    </div>
  );
};

export default Slideshow;
