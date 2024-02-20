import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'; 
// import "./home.css";
import landscapeAnimal from "../Image/landscapeAnimal.jpeg";
import landscapeHanuman from "../Image/landscapeHanuman.jpeg";
import landscapeSalaar from "../Image/landscapeSalaar.jpeg";

function HomeAdmin() {
  const [movies, setMovies] = useState([]);
  

  useEffect(() => {
    
    fetch('http://localhost:4000/movies')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => setMovies(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <>
    <div className='home'>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={landscapeAnimal} className="d-block w-100" alt="animal" />
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={landscapeHanuman} className="d-block w-100" alt="landscapeHanuman" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={landscapeSalaar} className="d-block w-100" alt="landscapeSalaar" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>

          </div>

        </div>
        
      </div>
      <div className="col-md-12 text-center">
      <Link to="/addmovie">
        <button type="button" className="btn btn-primary">Add Movie</button>
      </Link>
    </div>
      

      <div className="row row-cols-1 row-cols-md-3 g-2">
        {movies.map((movie, index)=>( 
        <div className="col" key={index}>
            <Link to={`/addmovie/${movie.movie_id}`}>
          <div className="card card-with-fixed-height">

            <img src={movie.image} className="card-img-top" alt={movie.title} />
            <div className="card-body">
              <h5 className="card-title">{movie.title}</h5>             
            </div>
          </div>
          </Link>
        </div>
         ))}
      </div>
      


      </div>
    </>
  )
}

export default HomeAdmin
