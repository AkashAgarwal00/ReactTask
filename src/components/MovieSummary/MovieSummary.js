import { useState } from 'react';

import './MovieSummary.css';

const MovieSummary = ({ movie }) => {
    const [isHidden, setIsHidden] = useState(true);
    const [mail, setMail] = useState('');
    const [phnNo, setPhnNo] = useState(null);
    const [tickets, setTickets] = useState(0);

    const handleClick = (e) => {
        e.preventDefault();

        if (isHidden) setIsHidden(false);
        else setIsHidden(true);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (mail === '' || phnNo === null || tickets === 0) {
            alert('Fill all the entries');
            return;
        }

        const movieName = movie.show.name;
        localStorage.setItem('data', JSON.stringify({ movieName, mail, tickets, phnNo }));
        alert('Show Booked!');
    }

    return (
        <div className='movie-summary'>

            <div className='movie-summary-container'>
                <h1>Movie Summary</h1>
                
                <div className='image'>
                    <img src={movie.show.image.medium} alt="Cover Pic" />
                </div>

                <h3>{movie.show.name}</h3>
                <h3>Language: {movie.show.language}</h3>
                <h3>Genre: {movie.show.genres}</h3>
                <h3>Rating: {movie.show.rating.average}</h3>

                <p dangerouslySetInnerHTML={{ __html: movie.show.summary }}></p>

                <button className={isHidden ? 'show' : 'hide'} 
                onClick={handleClick} 
                name='BookShow'> Book Show </button>

                <div className={isHidden ? 'hide' : 'show'}>
                    <table>
                        <tbody>
                            <tr>
                                <td><label for="movieName">Movie Name:</label></td>
                                <td><input type="text" name='movieName' 
                                value={movie.show.name} required /> </td>
                            </tr>

                            <tr>
                                <td><label for="email">Email:</label> </td>
                                <td><input type="email" name='email' 
                                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                placeholder='Enter Email' 
                                onChange={(e) => setMail(e.target.value)} 
                                required /> </td>
                            </tr>

                            <tr>
                                <td><label for="phnNo">Phone Number:</label> </td>
                                <td><input type="tel" name='phnNo' 
                                placeholder='Enter Phone Number' 
                                onChange={(e) => setPhnNo(e.target.value)} 
                                required /> </td>
                            </tr>

                            <tr>
                                <td><label for="tickets">Tickets:</label> </td>
                                <td><input type="number" name="tickets" 
                                onChange={(e) => setTickets(e.target.value)} 
                                placeholder='1' required /> </td>
                            </tr>

                            <tr>
                                <td><button onClick={handleClick}>Cancel</button></td>
                                <td><button onClick={handleSubmit}>Submit</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>

        </div>
    )
}

export default MovieSummary
