import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300">
        <div className='border-t border-gray-700'></div>
      {/* Main Footer Content */}
      <div className="container mx-auto px-24 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-serif text-white mb-4">J.R Preporatory School</h3>
            <p className="text-sm leading-relaxed mb-4">
              Providing quality education and fostering a positive learning environment for students to grow and excel in their academic journey.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-amber-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-amber-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-amber-400 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About Us', 'Why Choose Us?', 'Contact Us'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm hover:text-amber-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-amber-400 flex-shrink-0 mt-1" />
                <span className="text-sm">Moh. Ganesh Ganj, Puranpur</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-amber-400" />
                <span className="text-sm">+91 8363655600</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-amber-400" />
                <span className="text-sm">jrpschool2008@gmail.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <Clock size={20} className="text-amber-400 flex-shrink-0 mt-1" />
                <span className="text-sm">Monday - Saturday<br />9:00 AM - 1:00 PM</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Enquiry</h4>
            <p className="text-sm mb-4 mt-4">Request an enquiry from us.</p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 bg-black border border-gray-700 rounded-lg focus:outline-none focus:border-amber-400 text-sm"
              />
              <button className="w-full px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors text-sm font-medium">
                Enquire Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <p className="text-sm text-center">
            © {new Date().getFullYear()} J.R Preparatory School. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;