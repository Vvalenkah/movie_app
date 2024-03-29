import React from 'react';
import PropTypes from 'prop-types';
import './movie.css';

function Movie({id, year, title, summary, cover, genres}) {
    return <div className='movie'>
        <img src={cover} alt={title} title={title}></img>
        <div className='movie__column'>
        <h3 className='movie__title'>{title}</h3>
        <h5 className='movie__year'>{year}</h5>
        <ul className='movie__genres'>
            {genres.map((genre, number) => {
                return <li key={number} className='movie__genre'>{genre}</li>}
            )}
        </ul>
        <p className='movie__summary'>{summary.slice(0, 140)}...</p>
        </div>
    </div>
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;