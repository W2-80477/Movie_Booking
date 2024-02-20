import React from 'react';
import "./Navbar.css";
import { Link, useNavigate,useParams } from 'react-router-dom';
import profile from "./Image/profile.jpeg"
import logo from "./Image/MovieLogo.png";


function Navbar() {
  const { user_id } = useParams();
  const navigate = useNavigate();

  const handleItemClick = (item) => {
    if (item === 'profile') {
      const userDetails = JSON.parse(localStorage.getItem('userDetails'));
      alert('userDetails:', userDetails);
      if (userDetails) {
        navigate(`/profile/${userDetails.user_id}`);
      } else {

        navigate('/signin');
      }
    } else if (item === 'logout') {
      localStorage.removeItem('jwt');
      localStorage.removeItem('userDetails');
      navigate("/signin");
    }
  };

  return (
    <>

      <nav className="navbar  navbar-expand-lg bg-dark" data-bs-theme="dark" >
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="#">
            <img src={logo} alt="Logo" className="logo" />
          </a>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/adminhome">Admin</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/signin">SignIn</Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>

            <div className='profile'>
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0 profile-menu">
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <div class="profile-pic">
                      <img src={profile} alt="Profile Picture" />
                    </div>
                   
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li onClick={() => handleItemClick('profile')}>
                  <i className="fas fa-sign-out-alt fa-fw"></i>Profile
                </li>
                <li><hr className="dropdown-divider" /></li>
                <li onClick={() => handleItemClick('logout')}><i className="fas fa-sign-out-alt fa-fw"></i> Log Out</li>
              </ul>
                </li>
              </ul>

            </div>
          </div>
        </div>
      </nav>

    </>

  )
}

export default Navbar
