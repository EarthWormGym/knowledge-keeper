import React from 'react'
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/library">Library</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
      <h1>Welcome to My Website</h1>
      <p>This is the homepage of my website.</p>
    </div>
  );
}

export default HomePage;
