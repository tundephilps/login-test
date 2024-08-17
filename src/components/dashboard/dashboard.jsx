import React from 'react';
import { Link } from 'react-router-dom';
import './dashboard.css';

const transactions = [
  { id: '030f9bbc9fcd0c44', date: 'July 14 at 3:15 PM CST', name: 'Ritcher School District', amount: '507032', image: 'assets/images/backgrounds/bg-2.png', status: 'Pending Transaction' },
  // Add more transaction objects here
];

const Dashboard = () => {
  return (
    <>
      <header>
        <div className="container">
          <div className="header-inner">
            <Link to="/dashboard">
              <img src="../assets/images/logo/logo.png" alt="Logo" />
            </Link>
            <div className="pill-navigation-middle">
              <button className="active">transactions</button>
              <button>assessment</button>
              <button>insights</button>
            </div>
            <div className="pill-navigation-right">
              <button className="active"><i className="far fa-circle-question"></i></button>
              <button><i className="far fa-bell"></i></button>
              <button><img src="../assets/images/backgrounds/user.jpg" alt="User" /></button>
            </div>
          </div>
        </div>
      </header>

      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3">
            <div className="well p-5">
              <h1 className="mt-0">Hello, John</h1>
              <p>There have been 297 transactions processed since your last login.</p>
              <input type="text" className="form-control form-control-lg py-3 rounded-pill" placeholder="Search transaction" />
              <h4 className="fw-bold">Sort By</h4>
              <div className="d-flex flex-column">
                <label className="custom-radio me-3 fw-bold mb-3">Newest
                  <input type="radio" name="radio" />
                  <span className="checkmark"></span>
                </label>
                <label className="custom-radio fw-bold">Oldest
                  <input type="radio" name="radio" />
                  <span className="checkmark"></span>
                </label>
              </div>
              <div className="w-100">
                <hr />
              </div>
              <h4 className="fw-bold">Upload Bundle</h4>
              <div className="ratio ratio-1x1">
                <div className="bg-white border border-2 rounded-5 d-flex flex-column p-5">
                  <div className="my-auto">
                    <strong className="text-secondary">Bundle upload complete</strong>
                    <div className="w-100">
                      <div className="progress w-100" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                        <div className="progress-bar bg-secondary" style={{ width: '25%' }}></div>
                      </div>
                    </div>
                    <p className="text-secondary">
                      Please see the Recent Transaction pane for the status of the bundle.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="well p-5 bg-white">
              <h1 className="mt-0">Recent Transactions</h1>
              <div className="w-100">
                <div className="row">
                  {transactions.map((transaction, index) => (
                    <div className="col-lg-4 mb-3" key={index}>
                      <div className="well p-3 bg-white w-100">
                        <div className="d-flex flex-row w-100 dropleft">
                          <div className="d-flex flex-column">
                            <strong>{transaction.id}</strong>
                            <small>{transaction.date}</small>
                          </div>
                          <button className="btn btn-muted btn-lg ms-auto" data-bs-toggle="dropdown">
                            <i className="fas fa-ellipsis"></i>
                          </button>
                          <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                          </ul>
                        </div>
                        <div className="d-flex flex-row w-100">
                          <strong>{transaction.name}</strong>
                          <strong className="ms-auto">{transaction.amount}</strong>
                        </div>
                        <img src={transaction.image} className="w-100" alt="Transaction" />
                        <strong>{transaction.status}</strong>
                        <button className="mt-2 btn btn-lg btn-outline-secondary w-100">View Details</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
