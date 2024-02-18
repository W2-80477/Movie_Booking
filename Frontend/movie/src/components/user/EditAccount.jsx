
import React from 'react';

const EditAccount = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-header">
              <h3>Profile</h3>
            </div>
            <div className="card-body">
              <div className="mb-3">
                <label htmlFor="first_name" className="form-label">First Name:</label>
                <input type="text" id="username" className="form-control" value="FirstName" readOnly />
              </div>
              <div className="mb-3">
                <label htmlFor="last_name" className="form-label">Last Name:</label>
                <input type="text" id="username" className="form-control" value="LastName" readOnly />
              </div>
              <div className="mb-3">
                <label htmlFor="email_id" className="form-label">Email:</label>
                <input type="email" id="email" className="form-control" value="sampleuser@example.com" readOnly />
              </div>
              <div className="mb-3">
                <label htmlFor="date_of_birth" className="form-label">Date of Birth:</label>
                <div className="d-flex">
                  <select className="form-select mr-2" aria-label="Day">
                    <option selected>Day</option>
                    {/* Add day options */}
                    {Array.from({ length: 31 }, (_, i) => i + 1).map(day => (
                      <option key={day} value={day}>{day}</option>
                    ))}
                  </select>
                  <select className="form-select mr-2" aria-label="Month">
                    <option selected>Month</option>
                    {/* Add month options */}
                    <option value="January">January</option>
                    <option value="February">February</option>
                    {/* ... more options ... */}
                  </select>
                  <select className="form-select" aria-label="Year">
                    <option selected>Year</option>
                    {/* Add year options */}
                    {Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i).map(year => (
                      <option key={year} value={year}>{year}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="mob_no" className="form-label">Mobile no:</label>
                <input type="number" id="username" className="form-control"placeholder='+91 xxxxxxxxxx' readOnly />
              </div>
              
              {/* Add more user information fields as needed */}

              <button className="btn btn-primary">Update Profile</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditAccount;
