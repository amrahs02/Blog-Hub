// components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-8">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} BlogSphere. All Rights Reserved.</p>
        <p>Design and Developed by  <a href="https://amrahs.vercel.app" target='_blank' className="text-blue-400 font-bold hover:underline">Sandeep Sharma</a></p>
      </div>
    </footer>
  );
};

export default Footer;
