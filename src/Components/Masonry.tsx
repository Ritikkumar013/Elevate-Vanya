"use client";
import React, { useState } from "react";
import Image from "next/image";

const categories = {
  Interiors: ["/img1.png", "/img2.png", "/img3.png", "/img4.png","/img5.jpg", "/img6.jpg", "/img7.jpg","/img8.jpg","/img9.png","/img10.jpg"],
  Facade: ["/img5.jpg", "/img6.jpg", "/img7.jpg","/img5.jpg", "/img6.jpg", "/img7.jpg"],
  Clubhouse: ["/img8.jpg", "/img9.png", "/img10.jpg","/img5.jpg", "/img6.jpg", "/img7.jpg"],
  Landscape: ["/img11.png", "/img12.jpg","/img5.jpg", "/img6.jpg", "/img7.jpg"],
};

const Masonry: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false); // Modal open state
  const [currentIndex, setCurrentIndex] = useState<number | null>(null); // Current image index
  const [activeCategory, setActiveCategory] = useState<keyof typeof categories>("Interiors"); // Active tab
  const images = categories[activeCategory]; // Images for the active tab

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
    setCurrentIndex(null);
  };

  const goToPrevious = () => {
    if (currentIndex !== null) {
      setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    }
  };

  const goToNext = () => {
    if (currentIndex !== null) {
      setCurrentIndex((currentIndex + 1) % images.length);
    }
  };

  return (
    <div className="mx-28 space-y-6 mb-20">
      {/* Tabs for Categories */}
      <div className="flex space-x-4 justify-center">
        {Object.keys(categories).map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category as keyof typeof categories)}
            className={`px-6 py-2 ${
              activeCategory === category
                ? "bg-[#B79868] text-white"
                : "bg-[#2d2d2d] text-white"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Masonry Layout */}
      <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 p-4">
        <div className="my-5 p-5">
          <h1 className="text-4xl font-heading">{activeCategory}</h1>
          <p className="text-sm my-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
            <br /> Lorem Ipsum has been the industry&apos;s standard dummy text{" "}
          </p>
        </div>
        {images.map((src, index) => (
          <div
            key={index}
            className="break-inside-avoid cursor-pointer"
            onClick={() => openLightbox(index)} // Open modal on click
          >
            <Image
              src={src}
              alt={`Gallery Image ${index + 1}`}
              width={500}
              height={500}
              className="w-full h-auto rounded-md shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {isOpen && currentIndex !== null && (
        <div className="fixed -inset-6 z-50 flex items-center justify-center bg-black bg-opacity-80">
          {/* Close Button */}
          <button
            className="absolute top-4 right-14 text-white text-3xl"
            onClick={closeLightbox}
          >
            &times;
          </button>

          {/* Image Display */}
          <div className="relative max-h-full max-w-4xl mx-auto flex items-center">
            {/* Previous Button */}
            <button
              className="absolute left-0 text-white text-3xl p-3 bg-black bg-opacity-50 rounded-full hover:bg-opacity-75"
              onClick={goToPrevious}
            >
              &#8249;
            </button>

            <Image
              src={images[currentIndex]}
              alt={`Gallery Image ${currentIndex + 1}`}
              width={800}
              height={800}
              className="rounded-md h-full"
            />

            {/* Next Button */}
            <button
              className="absolute right-0 text-white text-3xl p-3 bg-black bg-opacity-50 rounded-full hover:bg-opacity-75"
              onClick={goToNext}
            >
              &#8250;
            </button>
          </div>
        </div>
      )}
      <div className="flex justify-center">
      <button className="bg-[#2d2d2d] text-white py-2 px-6 rounded-sm mb-5">Load More!</button>
      </div>  
    </div>
  );
};

export default Masonry;
