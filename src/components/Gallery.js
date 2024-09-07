import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import './Gallery.css'; // Import the CSS file for styles

function Gallery() {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageUpload = (event) => {
    const files = event.target.files;
    const newImages = Array.from(files).map(file => URL.createObjectURL(file));
    setImages([...images, ...newImages]);
  };

  const handleNext = () => {
    if (currentIndex < images.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="h-[350px] bg-gray-800 shadow-md rounded-xl p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="px-10 py-4 bg-black rounded-3xl"><h2 className="text-lg text-white">Gallery</h2></div>
        <div className="flex space-x-4">
          <label
            htmlFor="imageUpload"
            className="py-2 px-4 bg-black text-white rounded-3xl cursor-pointer"
          >
            + ADD IMAGE
          </label>
          <button
            className="py-2 px-4 bg-black text-white rounded-full"
            onClick={handlePrev}
            disabled={currentIndex === 0}
          >
            <FaArrowLeft />
          </button>
          <button
            className="py-2 px-4 bg-black text-white rounded-full"
            onClick={handleNext}
            disabled={currentIndex >= images.length - 3}
          >
            <FaArrowRight />
          </button>
          <input
            type="file"
            id="imageUpload"
            multiple
            className="hidden"
            onChange={handleImageUpload}
          />
        </div>
      </div>
      <div className="px-4 flex space-x-5">
        {images.slice(currentIndex, currentIndex + 3).map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Gallery ${index}`}
            className="gallery-thumbnail object-cover rounded-3xl"
          />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
