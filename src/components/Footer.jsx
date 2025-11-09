import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-auto">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
        <p className="mb-2 mb-md-0 text-white-50">© {new Date().getFullYear()} veteRUN. All rights reserved.</p>
        <div className="d-flex gap-3">
          <a href="#home" className="link-light text-decoration-none">Home</a>
          <a href="#login" className="link-light text-decoration-none">Login</a>
          <a href="#register" className="link-light text-decoration-none">Registration</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
