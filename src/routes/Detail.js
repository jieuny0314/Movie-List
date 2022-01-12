/*eslint-disable*/

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import Loading from '../components/Loading';
// import './Detail.css';

function Detail(){
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const {id} = useParams();
  const getMovie = async() => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
      ) 
    ).json();
    // console.log(json);
    setMovie(json.data.movie);
    setLoading(false);
    // console.log(movie);
  };
  useEffect(()=>{
    getMovie();
  },[])
  return(
    <div>
     <GlobalStyle />
      {loading ? (
      <Loading />
      ) : (
            <Template>
            <CoverImg src={movie.large_cover_image} />
                <Content >
                    <Box>
                        <Title>Title<br /> {movie.title}</Title>
                        <hr />
                        <Genres>
                            Genres :  
                            {movie.genres.map((genre, i)=>(
                            <Genre key={i}>{genre}</Genre>
                            ))}
                        </Genres>
                        <Year>Year : {movie.year}</Year>
                        <Rating>Rating : {movie.rating}</Rating>
                <Summary>{movie.description_intro}</Summary>
                </Box>
            </Content>
            </Template>
      )}
    </div>
  )
}
const GlobalStyle = createGlobalStyle `		      
  @font-face {
    font-family: 'Sans';	
    src: url(${require('./OpenSansCondensed-Light.ttf')});
  }
  body {
      font-family: 'Sans', sans-serif;
  }
`;


const Template = styled.div`
`;

const CoverImg = styled.img`
    opacity: 0.5;
    position: absolute;
    z-index: 100;
    height: 100vh;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const Content = styled.div`
    position: absolute;
    z-index: 200;
    width: 400px;
    height: 500px;
    background-color: white;
    opacity: 0;
    opacity: 0.8;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
    border-radius: 5px;
`;

const Box = styled.div`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
`;

const Title = styled.h2`

`;

const Wrapper = styled.div`

`;

const Genres = styled.ul`
    margin: 0;
    padding: 0;
`;

const Genre = styled.li`
    display: inline-block;
    list-style: none;
    margin-right: 5px;
    margin-left: 5px;
`;

const Year = styled.h3`
    font-weight: 100;
`;

const Rating = styled.h3`
    font-weight: 100;
`;

const Summary = styled.p`
    width: 380px;
    height: 180px;
    padding: 10px;
    margin: 0;
    overflow: scroll;
`;


export default Detail;