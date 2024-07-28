import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
        <Link to="/">
          <img
            src="./logo.svg"
            alt="logo"
            className="h-16 w-24 md:h-16 md:w-40 lg:h-16 lg:w-40 "
          />
        </Link>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
            <a href="#" className="hover:text-gray-400">Home</a>
            <a href="#" className="hover:text-gray-400">About</a>
            <a href="#" className="hover:text-gray-400">Services</a>
            <a href="#" className="hover:text-gray-400">Contact</a>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-400">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7a4 4 0 01.29-1.493A3.978 3.978 0 0010 4a3.978 3.978 0 001.71.507A4 4 0 0114 7a4 4 0 01.29 1.493A3.978 3.978 0 0016 10a3.978 3.978 0 001.71-.507A4 4 0 0118 7a4 4 0 01-.29-1.493A3.978 3.978 0 0016 4a3.978 3.978 0 00-1.71.507A4 4 0 0114 7a4 4 0 01-.29 1.493A3.978 3.978 0 0010 10a3.978 3.978 0 00-1.71-.507A4 4 0 018 7z" />
              </svg>
            </a>
            <a href="#" className="hover:text-gray-400">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5h16M4 10h16M4 15h16m-7 4h7" />
              </svg>
            </a>
            <a href="#" className="hover:text-gray-400">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m12-6l-3 3 3 3M4 6h16M4 18h16" />
              </svg>
            </a>
          </div>
        </div>
        <div className="text-center mt-6">
          <p className="text-sm">&copy; 2024 AdventureBot. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
