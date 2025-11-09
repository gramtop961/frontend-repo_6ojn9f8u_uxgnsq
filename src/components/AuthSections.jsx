import React from 'react';

const AuthSections = () => {
  return (
    <section className="py-5" id="auth">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-6" id="login">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body p-4">
                <h3 className="fw-bold mb-3">Login</h3>
                <form className="row g-3">
                  <div className="col-12">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" placeholder="you@example.com" />
                  </div>
                  <div className="col-12">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" placeholder="••••••••" />
                  </div>
                  <div className="col-12 d-flex justify-content-between align-items-center">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="rememberMe" />
                      <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                    </div>
                    <button type="submit" className="btn btn-dark">Login</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-6" id="register">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body p-4">
                <h3 className="fw-bold mb-3">Registration</h3>
                <form className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label">First Name</label>
                    <input type="text" className="form-control" placeholder="Jane" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Last Name</label>
                    <input type="text" className="form-control" placeholder="Doe" />
                  </div>
                  <div className="col-12">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" placeholder="jane@example.com" />
                  </div>
                  <div className="col-12">
                    <label className="form-label">Race Category</label>
                    <select className="form-select">
                      <option>5K Fun Run</option>
                      <option>10K Challenge</option>
                      <option>Half Marathon</option>
                    </select>
                  </div>
                  <div className="col-12 d-flex justify-content-end">
                    <button type="submit" className="btn btn-danger">Register</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthSections;
