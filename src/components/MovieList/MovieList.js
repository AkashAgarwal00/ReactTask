import Axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './MovieList.css';

const MovieList = ({setMovie}) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        Axios.get('https://api.tvmaze.com/search/shows?q=all')
            .then(res => { setData(res.data) })
            .catch(error => console.error(error));
    }, [])

    const handleClick = (movie) => {
        setMovie(movie);
        localStorage.setItem('movie', movie);
    }

    return (
        <div className='movie-list'>
            {
                data.map((e, i) => {
                    return <div className='movie-container'>

                        <div className='image'>
                            <img src={e.show.image.medium} alt="Cover Pic" />
                        </div>

                        <div className="content">
                            <h4>Show: {e.show.name}</h4>
                            <h4>Language: {e.show.language}</h4>
                            <h4>Genre: {e.show.genres}</h4>
                        </div>

                        <div className='btn'>
                            <Link to='/movieSummary'><button onClick={() => handleClick(e)}>Show Summary</button></Link>
                        </div>

                    </div>
                })
            }
        </div>
    )
}

export default MovieList;
