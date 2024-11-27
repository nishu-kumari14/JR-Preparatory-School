import React from 'react';
import { Mail, Phone, LinkedinIcon, Quote } from 'lucide-react';
import principal from '../assets/gallery/principal.jpg'

const Visionaries = () => {
  return (
    <div className="min-h-screen bg-black py-16 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-amber-500 text-sm font-semibold tracking-wider uppercase mb-4">Our Leadership</p>
          <h1 className="text-4xl font-serif text-white mb-4">Meet Our Visionaries</h1>
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-2 h-2 bg-amber-500 rounded-full"/>
            <div className="w-16 h-px bg-amber-500"/>
            <div className="w-2 h-2 bg-amber-500 rounded-full"/>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={principal}
                  alt="Principal"
                  className="w-full h-[600px] object-cover transform transition-transform duration-500 group-hover:scale-105"
                />
             
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center space-x-4">
                    <a href="mailto:principal@educare.com" className="p-3 bg-gray-800/80 backdrop-blur-sm rounded-full text-white hover:bg-amber-500 transition-colors duration-300">
                      <Mail size={20} />
                    </a>
                    <a href="tel:+1234567890" className="p-3 bg-gray-800/80 backdrop-blur-sm rounded-full text-white hover:bg-amber-500 transition-colors duration-300">
                      <Phone size={20} />
                    </a>
                    <a href="#linkedin" className="p-3 bg-gray-800/80 backdrop-blur-sm rounded-full text-white hover:bg-amber-500 transition-colors duration-300">
                      <LinkedinIcon size={20} />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -top-6 -left-6 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -z-10"></div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4 mb-6">
                <div className="h-px bg-amber-500 flex-grow"></div>
                <span className="text-amber-500 font-semibold">Principal</span>
              </div>

              <h2 className="text-3xl font-serif text-white mb-2">Gunjan Agrawal</h2>
              <p className="text-gray-400 text-lg mb-6">Ph.D. in Educational Leadership</p>

              <div className="relative mb-8">
                <Quote className="absolute -left-4 -top-4 w-8 h-8 text-amber-500/20" />
                <p className="text-gray-300 text-lg italic leading-relaxed">
                  Education is not just about academic excellence; it's about nurturing minds, 
                  building character, and preparing students for the challenges of tomorrow.
                </p>
              </div>

              <div className="space-y-6 text-gray-400">
                <p>
                J. R. Preparatory School, Puranpur, stands as a beacon of quality education in the region. Our school is dedicated to providing a holistic learning environment, fostering academic excellence, character development, and a spirit of inquiry among our students. With modern facilities, experienced educators, and a rich curriculum tailored to individual needs, we strive to cultivate young minds into confident, responsible, and compassionate individuals prepared to excel in a dynamic world.
                </p>
              </div>

              <div className="mt-8 p-6 bg-amber-500/10 rounded-xl border border-amber-500/20">
                <p className="text-white">
                  "Our mission is to create an environment where every student can discover 
                  their potential and pursue their dreams with confidence and determination."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Visionaries;