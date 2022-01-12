import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Movie.css';

function Movie({ id, mediumCoverImage, title, year, summary, genres }){
  return(
    <div>
      <div className="total">
        <div className="coverImg">
            <img src={mediumCoverImage} />
        </div>
        <div className="content">
            <div className="box">
                <h2>
                <Link className="title" to={`/movie/${id}`}>{title}</Link>
                </h2>
                <h3>{year}</h3>
                <p>{summary}</p>
                <ul>
                {genres && genres.map((genre)=>(
                    <li key={id}>{genre}</li>
                ))}
                </ul>
            </div>
        </div>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  mediumCoverImage : PropTypes.string.isRequired,
  title : PropTypes.string.isRequired,
  summary : PropTypes.string.isRequired,
  genres : PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;