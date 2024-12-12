import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-red-600 text-white py-6">
      
      <div className="text-center mt-6 border-t border-white pt-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} Blood Donation. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;