import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Hero = () => {
  const images = [
    {
      url: "https://imgs.search.brave.com/uZr0eGj3i1tK4KQ2QZ9N6XAJ38ByoXxwGHfesTrWec8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvc2Nob29sLWJ0/cWRzcmM4YWJyeXlh/cjEuanBn",
      alt: "Classroom"
    },
    {
      url: "https://imgs.search.brave.com/sGApbawMLRdot4pH6VUrdiWVzIofvTwB2armXCgLL6Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9zY2hvb2wtYnVp/bGRpbmctd2l0aC1w/bGF5Z3JvdW5kLWZv/cmVncm91bmRfMTE3/Nzk2NS05MTE2Mi5q/cGc_c2l6ZT02MjYm/ZXh0PWpwZw",
      alt: "School Building"
    },
    {
      url: "https://imgs.search.brave.com/jHeHgvC9uSD8KC9KF5vkM16r3TMgAWKrrezBzE4CmxQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA0LzkzLzg0LzY1/LzM2MF9GXzQ5Mzg0/NjU4OV9VcXRPV3VZ/QXR4ampESmwwUkpn/VU9LSmZEUFhtd1Ix/ZC5qcGc",
      alt: "Library"
    },
    {
      url: "https://imgs.search.brave.com/3yigJ5yxUnbixUmARKkTKZxy6mdCZcX-BSk7teE6pnI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQ0/MjIzODkwOC9waG90/by9tb2Rlcm4tbGli/cmFyeS1pbnRlcmlv/ci5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9OFZpU3M5amxm/U0xNRFRtV3hvQ0pm/TWdaUzdncmt2VDh0/Z0MwVU9aVmlfUT0",
      alt: "Playground"
    }
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState('right');

  const nextImage = () => {
    setSlideDirection('right');
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevImage = () => {
    setSlideDirection('left');
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="home" className="relative min-h-screen bg-black/90 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transform transition-transform duration-500 ${
              index === currentImageIndex
                ? 'translate-x-0'
                : slideDirection === 'right'
                ? index === (currentImageIndex + 1) % images.length
                  ? 'translate-x-full'
                  : '-translate-x-full'
                : index === (currentImageIndex - 1 + images.length) % images.length
                ? '-translate-x-full'
                : 'translate-x-full'
            }`}
          >
            <img src={image.url} alt={image.alt} className="w-full h-full object-cover opacity-20" />
          </div>
        ))}
      </div>

      <div className="relative text-center px-4 max-w-4xl mx-auto animate-fade-in">
        <h3 className="text-amber-100 mb-8 tracking-wide animate-slide-down">HAPPINESS & HYGIENE</h3>
        <h1 className="text-white text-6xl font-serif mb-8 animate-slide-up">
          For wisdom & development
          <br />
          of your child.
        </h1>
        <p className="text-gray-200 text-xl mb-12 animate-fade-in">
          A place for overall holistic development of ward
        </p>
        <button className="border-2 border-amber-100 text-amber-100 px-8 py-3 hover:bg-amber-100 hover:text-teal-900 transition-all duration-300 animate-bounce-subtle">
          BOOK A CALL
        </button>
      </div>

      <button
        onClick={prevImage}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors"
      >
        <ChevronLeft size={48} />
      </button>

      <button
        onClick={nextImage}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors"
      >
        <ChevronRight size={48} />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setSlideDirection(index > currentImageIndex ? 'right' : 'left');
              setCurrentImageIndex(index);
            }}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentImageIndex ? 'bg-amber-100' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;