import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';
import image1 from '../assets/gallery/1.jpg'
import image2 from '../assets/gallery/2.jpg'
import image3 from '../assets/gallery/3.jpg'
import image4 from '../assets/gallery/4.jpg'
import image5 from '../assets/gallery/5.jpg'
import image6 from '../assets/gallery/6.jpg'
import image7 from '../assets/gallery/7.jpg'
import image8 from '../assets/gallery/8.jpg'
import image9 from '../assets/gallery/9.jpg'
import image10 from '../assets/gallery/10.jpg'
import image11 from '../assets/gallery/11.jpg'
import image12 from '../assets/gallery/12.jpg'
import image13 from '../assets/gallery/13.jpg'
import image14 from '../assets/gallery/14.jpg'
import image15 from '../assets/gallery/15.jpg'
import image16 from '../assets/gallery/16.jpg'
import image17 from '../assets/gallery/17.jpg'
import image18 from '../assets/gallery/18.jpg'
import image19 from '../assets/gallery/19.jpg'
import image20 from '../assets/gallery/20.jpg'
import image21 from '../assets/gallery/21.jpg'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = ['all', 'campus', 'events', 'activities', 'sports'];
  
  const images = [
    {
      id: 1,
      category: 'campus',
      src: `${image6}`,
      title: 'Modern Campus Building',
      description: 'Our state-of-the-art main campus building'
    },
    {
      id: 2,
      category: 'events',
      src: `${image2}`,
      title: 'Annual Day Celebration',
      description: 'Students performing at the annual day function'
    },
    {
      id: 3,
      category: 'activities',
      src: `${image1}`,
      title: 'Science Exhibition',
      description: 'Students showcasing their science projects'
    },
    {
      id: 4,
      category: 'sports',
      src: `${image18}`,
      title: 'Sports Meet',
      description: 'Annual sports competition'
    },
    {
      id: 5,
      category: 'campus',
      src: `${image7}`,
      title: 'Library',
      description: 'Our well-stocked modern library'
    },
    {
      id: 6,
      category: 'events',
      src: `${image4}`,
      title: 'Graduation Day',
      description: 'Celebrating student achievements'
    },
    {
      id: 7,
      category: 'activities',
      src: `${image3}`,
      title: 'Art Workshop',
      description: 'Students exploring their creativity'
    },
    {
      id: 8,
      category: 'sports',
      src: `${image17}`,
      title: 'Basketball Court',
      description: 'Professional basketball court facility'
    },
    {
      id: 9,
      category: 'events',
      src: `${image5}`,
      title: 'Graduation Day',
      description: 'Celebrating student achievements'
    },
  ];

  const filteredImages = activeCategory === 'all' 
  ? images 
  : images.filter(img => img.category === activeCategory);

const Modal = ({ image, onClose }) => {
  if (!image) return null;
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center animate-fadeIn">
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-amber-400 transition-colors"
      >
        <X size={32} />
      </button>
      <div className="max-w-4xl mx-4 relative">
        <img 
          src={image.src} 
          alt={image.title}
          className="w-full h-auto rounded-lg shadow-2xl"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
          <h3 className="text-white text-xl font-semibold mb-2">{image.title}</h3>
          <p className="text-gray-300">{image.description}</p>
        </div>
      </div>
    </div>
  );
};

return (
  <div id='gallery' className="min-h-screen bg-black text-white pt-28">
    <div className="py-12 text-center">
      <h1 className="text-4xl font-serif mb-4">Our Gallery</h1>
      <p className="text-gray-400 mb-8">Explore our campus life through images</p>
      
      <div className="flex flex-wrap justify-center gap-4 mb-8 px-24">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105
              ${activeCategory === category 
                ? 'bg-amber-500 text-white' 
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>
    </div>

    <div className="container mx-auto px-24 pb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredImages.map(image => (
          <div
            key={image.id}
            className="group relative overflow-hidden rounded-lg cursor-pointer transform transition-all duration-300 hover:scale-105"
            onClick={() => setSelectedImage(image)}
          >
            <img
              src={image.src}
              alt={image.title}
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
              <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300" size={32} />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-white font-semibold">{image.title}</h3>
              <p className="text-gray-300 text-sm">{image.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Modal */}
    <Modal image={selectedImage} onClose={() => setSelectedImage(null)} />
  </div>
);
};

export default Gallery;