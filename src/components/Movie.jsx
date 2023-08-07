import React from 'react'
import { useContext } from 'react'
import UserContext from '../contexts/userContext'

function Movie({ movie }) {
    const {user, login, logout, toggleFavouriteMovieToUser} = useContext(UserContext)
    const isFavorite = user?.favoriteMovies?.includes(movie.id)

    return (
        <div className='card mb-4'>
            <img className='img' src={movie.imageUrl} alt={movie.title} />
            <div className='card-body'>
                <h4 className='fs-5'>{movie.title}</h4>
                <button onClick={()=>toggleFavouriteMovieToUser(movie.id)} className={`btn ${isFavorite ? 'btn-success' : 'btn-outline-primary'}`}>Favoritos</button>
            </div>
        </div>
    )
}

export default Movie