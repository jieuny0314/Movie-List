/*eslint-disable*/
import React, {useEffect, useState } from 'react';
import Movie from '../components/Movie';
import Loading from '../components/Loading';
import './Home.css';

function Home(){
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async() => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
        )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(()=>{
    getMovies();
  },[]);
  // console.log(movies);
  return (
    <div>
      {loading ? (
        <Loading />
      ) : ( 
        <div className="movieContainer">
          {movies.map((movie)=>(
            <Movie 
              id={movie.id}
              mediumCoverImage={movie.medium_cover_image}
              title={movie.title}
              year={movie.year}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;