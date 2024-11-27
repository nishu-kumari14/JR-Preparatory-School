import React, { useState } from 'react';
import { Mail, Lock, User, Eye, EyeOff, Github } from 'lucide-react';
import { FaGoogle } from "react-icons/fa";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    confirmPassword: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const InputField = ({ icon: Icon, type, placeholder, name, value, onChange, required = true }) => (
    <div className="relative">
      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
        <Icon size={20} />
      </div>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full bg-gray-800 text-white px-10 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all duration-300 placeholder-gray-500"
      />
    </div>
  );

  const SocialButton = ({ icon: Icon, label }) => (
    <button className="flex items-center justify-center space-x-2 w-full bg-gray-800 hover:bg-gray-700 text-white px-4 py-3 rounded-lg transition-colors duration-300">
      <Icon size={20} />
      <span>Continue with {label}</span>
    </button>
  );

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 py-8 pt-32">
      <div className="w-full max-w-md">
 
        <div className="bg-gray-800/40 backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden">

          <div className="p-1 bg-gray-700/50 m-4 rounded-lg flex">
            <button
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-3 rounded-lg transition-all duration-300 ${
                isLogin 
                  ? 'bg-amber-100 text-black' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-3 rounded-lg transition-all duration-300 ${
                !isLogin 
                  ? 'bg-amber-100 text-black' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Sign Up
            </button>
          </div>

          <div className="p-8 pt-4">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">
              {isLogin ? 'Welcome Back!' : 'Create Account'}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">

              {!isLogin && (
                <InputField
                  icon={User}
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              )}
              
              <InputField
                icon={Mail}
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
              />

              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <Lock size={20} />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-gray-800 text-white px-10 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all duration-300 placeholder-gray-500"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-300"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>

              {!isLogin && (
                <InputField
                  icon={Lock}
                  type={showPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                />
              )}

              <button
                type="submit"
                className="w-full bg-amber-100 hover:bg-amber-300 text-black py-3 rounded-lg transition-colors duration-300 transform hover:scale-105"
              >
                {isLogin ? 'Login' : 'Sign Up'}
              </button>

              <div className="flex items-center my-6">
                <div className="flex-1 border-t border-gray-700"></div>
                <span className="px-4 text-sm text-gray-400">OR</span>
                <div className="flex-1 border-t border-gray-700"></div>
              </div>
              <div className="space-y-3">
                <SocialButton icon={FaGoogle} label="Google" />
                <SocialButton icon={Github} label="GitHub" />
              </div>
            </form>

            <div className="mt-6 text-center">
              <a href="#" className="text-amber-500 hover:text-amber-400 text-sm">
                {isLogin ? 'Forgot Password?' : 'Already have an account?'}
              </a>
            </div>
          </div>
        </div>

        <p className="text-gray-400 text-center mt-6 text-sm">
          By continuing, you agree to our{' '}
          <a href="#" className="text-amber-500 hover:text-amber-400">Terms of Service</a>
          {' '}and{' '}
          <a href="#" className="text-amber-500 hover:text-amber-400">Privacy Policy</a>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;