import React from 'react';

const highlights = [
  {
    title: '5K Fun Run',
    desc: 'Perfect for beginners and families. Enjoy the energy and finish strong.',
    color: 'bg-danger',
  },
  {
    title: '10K Challenge',
    desc: 'Pick up the pace and push your personal best across a fast course.',
    color: 'bg-dark',
  },
  {
    title: 'Half Marathon',
    desc: 'Test endurance with a scenic route supported by vibrant crowds.',
    color: 'bg-secondary',
  },
];

const EventHighlights = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-4">
          <h2 className="fw-bold">Race Categories</h2>
          <p className="text-muted">Choose your distance and own the finish line.</p>
        </div>
        <div className="row g-4">
          {highlights.map((h) => (
            <div className="col-md-4" key={h.title}>
              <div className={`card text-white border-0 shadow-sm ${h.color}`}>
                <div className="card-body p-4">
                  <h5 className="card-title fw-bold">{h.title}</h5>
                  <p className="card-text text-white-50">{h.desc}</p>
                  <a href="#register" className="btn btn-outline-light btn-sm mt-2">Register</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventHighlights;
