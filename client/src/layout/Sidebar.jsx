import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  // todo trebuie sa o fac sa dispara cand e ecranul mai mic de 600px si sa creez un echivalent al ei ca si o pagina separata 
  return (
    <div className='sidebar'>
      <Link to="/profile">
        <div>Profile</div>
      </Link>
      <Link to="/search">
        <div>Search</div>
      </Link>
      <Link to="/watchlist">
        <div>Watchlist</div>
      </Link>
      <Link to="/news">
        <div>News</div>
      </Link>
      <Link to="/alerts">
        <div>Alerts</div>
      </Link>
    </div>
  )
}

export default Sidebar