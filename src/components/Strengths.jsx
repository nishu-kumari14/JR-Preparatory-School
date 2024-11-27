import React from 'react';
import { Home, Trees, GraduationCap, Camera } from 'lucide-react';

const StrengthCard = ({ icon: Icon, title, description }) => (
  <div className="flex flex-col items-center px-4 sm:px-6 py-8 sm:py-12 text-center rounded-md bg-amber-50 transition-transform hover:transform hover:scale-105">
    <div className="p-3 sm:p-4 mb-3 sm:mb-4 rounded-full bg-amber-100">
      <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-amber-600" />
    </div>
    <h3 className="mb-2 sm:mb-3 text-lg sm:text-xl font-semibold text-gray-900">{title}</h3>
    <p className="text-xs sm:text-sm text-gray-700 max-w-xs">{description}</p>
  </div>
);

const OurStrengths = () => {
  const strengths = [
    {
      icon: Home,
      title: "Cleanliness",
      description: "Clean and pure campus to help students foster the value of cleanliness."
    },
    {
      icon: Trees,
      title: "Fresh Environment",
      description: "Fresh environment to maintain a fresh and positive attitude among students."
    },
    {
      icon: GraduationCap,
      title: "Skilled Teachers",
      description: "We have teachers from various backgrounds that possess expertise in the teaching field."
    },
    {
      icon: Camera,
      title: "Security",
      description: "CCTV monitoring during full school hours to maintain security and safety of students."
    }
  ];

  return (
    <div id='strength' className="min-h-screen flex items-center justify-center bg-black text-white py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="text-center mb-8 sm:mb-12">
          <p className="text-amber-400 mb-3 sm:mb-4 uppercase tracking-wider text-sm sm:text-base">
            WHY CHOOSE US
          </p>
          <div className="flex items-center justify-center gap-2 mb-4 sm:mb-6">
            <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-amber-400 rounded-full" />
            <div className="w-12 sm:w-16 h-px bg-amber-400" />
            <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-amber-400 rounded-full" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif mb-6 sm:mb-8">Our Strength</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {strengths.map((strength, index) => (
            <StrengthCard
              key={index}
              icon={strength.icon}
              title={strength.title}
              description={strength.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurStrengths;