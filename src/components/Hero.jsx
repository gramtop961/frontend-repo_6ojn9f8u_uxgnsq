import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section id="home" className="position-relative" style={{ minHeight: '70vh', backgroundColor: '#0f0f10' }}>
      <div className="container position-relative" style={{ zIndex: 2 }}>
        <div className="row align-items-center" style={{ minHeight: '70vh' }}>
          <div className="col-lg-6 text-white py-5">
            <h1 className="display-4 fw-bold mb-3">
              Push Your Limits with <span className="text-danger">vete</span>RUN
            </h1>
            <p className="lead text-secondary">
              Join the most electrifying running event of the season. Choose your category, register in minutes, and get ready to conquer the course.
            </p>
            <div className="d-flex gap-3 mt-4">
              <a href="#register" className="btn btn-danger btn-lg px-4">Register Now</a>
              <a href="#login" className="btn btn-outline-light btn-lg px-4">Login</a>
            </div>
          </div>
          <div className="col-lg-6 d-none d-lg-block" style={{ height: '70vh' }} aria-hidden>
            <div className="rounded-4 overflow-hidden shadow-lg" style={{ height: '100%', border: '1px solid rgba(255,255,255,0.1)' }}>
              <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            </div>
          </div>
        </div>
      </div>
      <div className="position-absolute top-0 start-0 w-100 h-100" style={{ zIndex: 1 }}>
        <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: 'linear-gradient(90deg, rgba(15,15,16,0.95) 0%, rgba(15,15,16,0.7) 40%, rgba(15,15,16,0.2) 100%)' }} />
      </div>
    </section>
  );
};

export default Hero;
