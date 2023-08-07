import React from 'react'
import Movie from './Movie'
import initialMovies from '../consts/initialMovies'

function MovieList() {
    return (
        <div className='container'>
            <div className='row'>
                {initialMovies.map(movie => (
                    <div key={movie.id} className="col-md-4">
                        <Movie movie={movie} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MovieList