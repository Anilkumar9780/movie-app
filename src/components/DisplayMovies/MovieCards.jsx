/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

// package
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'


export const MovieCard = ({
    // get props
    poster_path,
    name,
    vote_average,
    movie_id
}) => {
    return (
        <>
            <div className="movie-item-style-2 movie-item-style-1">
                <img src={"https://image.tmdb.org/t/p/w500" + poster_path} alt={poster_path} />
                <Link to={`/moviedetails/${movie_id}`} >
                    <div className="hvr-inner">
                        <a> Read more <i className="ion-android-arrow-dropright"></i> </a>
                    </div>
                </Link>
                <div className="mv-item-infor">
                    <h6><a>{name}</a></h6>
                    {/* <p><span style={{ color: "red" }}>{media_type}</span></p> */}
                    <p className="rate"><i className="ion-android-star"></i><span> {vote_average}</span> /10</p>
                </div>
            </div>
        </>
    )
}

/**
 *  Props types for our Component
 */
MovieCard.propTypes = {
    poster_path: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    first_air_date: PropTypes.string.isRequired
}