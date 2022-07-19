import React from 'react';
import PropTypes from 'prop-types';

function Movie({id, year, title, summary, cover}) {
    return <div>
        <h2>{title}</h2>
        <h4>id: {id}</h4>
    </div>
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,

}

export default Movie;