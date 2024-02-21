import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import "./editProfile.css";

const EditAccount = () => {
  const { user_id } = useParams();
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email_id: "",
    date_of_birth: null,
    mob_no: ""
  });

  useEffect(() => {
    
    fetch(`http://localhost:4000/user/${user_id}`)
      .then(response => response.json())
      .then(data => {
        const selectedUser = data[0] || {}; 
        setUser(selectedUser);
      })
      .catch(error => console.error('Error fetching user details:', error));
  }, [user_id]);





  const handleUpdateProfile = () => {
    console.log('Before update - User state:', user);
    fetch(`http://localhost:4000/user/${user_id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log('User details updated successfully:', data);
       
      })
      .catch(error => console.error('Error updating user details:', error));
  };


  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
        <div className="card edit-account-card">
            <div className="card-header">
              <h3><b>Edit Profile</b></h3>
            </div>
            <div className="card-body">
              <div className="mb-3">
                <label htmlFor="first_name" className="form-label">First Name:</label>
                <input type="text" id="username" className="form-control" value={user.first_name} onChange={(e) => setUser({ ...user, first_name: e.target.value })}  />
              </div>
              <div className="mb-3">
                <label htmlFor="last_name" className="form-label">Last Name:</label>
                <input type="text" id="username" className="form-control" value={user.last_name} onChange={(e) => setUser({ ...user, last_name: e.target.value })} />
              </div>
             
              {/* <div className="mb-3">
                <label htmlFor="date_of_birth" className="form-label">Date of Birth:</label>
                <div className="d-flex">
                  <select className="form-select mr-2" aria-label="Day">
                    <option selected>Day</option>
                    
                    {Array.from({ length: 31 }, (_, i) => i + 1).map(day => (
                      <option key={day} value={day}>{day}</option>
                    ))}
                  </select>
                  <select className="form-select mr-2" aria-label="Month">
                    <option selected>Month</option>
                    
                    <option value="January">January</option>
                    <option value="February">February</option>
                   
                  </select>
                  <select className="form-select" aria-label="Year">
                    <option selected>Year</option>
                  
                    {Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i).map(year => (
                      <option key={year} value={year}>{year}</option>
                    ))}
                  </select>
                </div>
              </div> */}

              <div className="mb-3">
                <label htmlFor="mob_no" className="form-label">Mobile no:</label>
                <input type="phone" id="username" className="form-control" value={user.mob_no} onChange={(e) => setUser({ ...user, mob_no: e.target.value })} />
              </div>
              
              <button className="btn btn-primary" onClick={handleUpdateProfile}>Update Profile</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditAccount;
