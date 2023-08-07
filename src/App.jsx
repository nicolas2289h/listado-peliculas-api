import { useState } from 'react'
import './App.css'
import MovieList from './components/MovieList'
import Navbar from './components/Navbar'
import './components/movie.css'
import UserContext from './contexts/userContext'

const initialUser = {
  id: 1,
  name: 'Nicolas',
  favoriteMovies: [1, 2]
}

function App() {
  const [user, setUser] = useState(initialUser)

  const login = ()=>{
    setUser(initialUser)
  }

  const toggleFavouriteMovieToUser = (movieId)=>{
    const isFavorite = user.favoriteMovies.includes(movieId)
    const favoriteMovies = isFavorite ? user.favoriteMovies.filter(movie => movie != movieId) : [...user.favoriteMovies, movieId]
    setUser({...user,favoriteMovies})
  }

  const logout = ()=>{
    setUser(null)
  }

  const data = { user, login, logout, toggleFavouriteMovieToUser }

  return (
    <>
      <div>
        <UserContext.Provider value={data}>
          <Navbar />
          <MovieList />
        </UserContext.Provider>
      </div>
    </>
  )
}

export default App
