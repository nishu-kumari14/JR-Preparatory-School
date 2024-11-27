import React from 'react';
import '../App.css';

const AboutUsSection = () => {
  const features = [
    {
      title: "Modern Classrooms",
      description: "State-of-the-art learning environments equipped with the latest educational technology",
      imageUrl: "https://imgs.search.brave.com/uNbqbYF4LlXVHFIAj8H7FoGJqmAjQ5LjYf78wtbuOwY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAzLzAxLzI0LzMz/LzM2MF9GXzMwMTI0/MzM3Nl90ZXhENDgw/WERlYXZRR1BET2FF/dEZqa0hpVkVxR1Uw/MC5qcGc"
    },
    {
      title: "Interactive Learning",
      description: "Hands-on activities and engaging materials to promote active learning",
      imageUrl: "https://imgs.search.brave.com/wYYr9ItqVwOQ6DplpTBCYuBUQs2duLVTgC23c1-JdqM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA5LzQ1LzMxLzY4/LzM2MF9GXzk0NTMx/Njg4M19xOGJMYzIy/ZWFPOVpRZ0ZSNERH/azZnRmJ3enBKNmUx/OC5qcGc"
    },
    {
      title: "Student Life",
      description: "Vibrant campus culture with events and activities throughout the year",
      imageUrl: "https://imgs.search.brave.com/9cPJbtfKjoiOxlopXmwu-Jip6e6IqXbBIiweMH6kNiI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJiYXQuY29t/L2ltZy81NjAzOTQt/c3R1ZGVudC1lZHVj/YXRpb24tc2Nob29s/LXN0dWRlbnRzLTEy/MDB4ODA5LXdhbGxw/YXBlci10ZWFodWJp/by5qcGc"
    }
  ];

  return (
    <div id='aboutus' className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="max-w-7xl w-full">
        {/* Header Section */}
        <div className="text-center mb-12 animate-fade-in">
          <p className="text-orange-400 uppercase tracking-wider text-sm mb-4 animate-fade-in">
            Education Has No Boundaries
          </p>
          <h1 className="text-4xl md:text-5xl font-light text-white mb-6 animate-fade-in">
            We Offer Excellence
          </h1>
          <p className="max-w-2xl mx-auto text-gray-300 animate-fade-in">
            Our commitment to education creates an environment where students can grow, 
            learn, and excel. We provide comprehensive education in a nurturing and 
            innovative setting.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="relative animate-fade-in">
              <div className="absolute -top-3 -right-3 w-24 h-24 opacity-20 animate-fade-in">
                <div className="w-full h-full border-t-2 border-r-2 border-orange-400" />
              </div>

              <div className="relative flex flex-col animate-fade-in">
                <div className="overflow-hidden mb-4 animate-fade-in">
                  <img
                    src={feature.imageUrl}
                    alt={feature.title}
                    className="w-full h-48 object-cover transition-transform duration-700 ease-in-out hover:scale-110 animate-fade-in"
                  />
                </div>
                <h3 className="text-xl font-light mb-2 text-center text-white animate-fade-in">
                  {feature.title}
                </h3>
                <button className="text-orange-400 text-sm uppercase tracking-wider mt-2 hover:text-orange-300 transition-colors text-center animate-fade-in">
                  View Gallery
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
