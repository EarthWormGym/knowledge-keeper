import React from 'react'
import { Link, NavigateFunction, useNavigate } from 'react-router-dom'

function Navbar() {
    const navigate = useNavigate();

    return (
        <>
        <nav className="nav">
            <ul className="flex border-b">
                <CustomLink to="/" navigate={navigate}>Home</CustomLink>
                <CustomLink to="/library" navigate={navigate}>Library</CustomLink>
                <CustomLink to="/login" navigate={navigate}>Login</CustomLink>
            </ul>
        </nav>
      </>
    )
}

interface CustomLinkProps {
    to: string;
    children: React.ReactNode;
    navigate: NavigateFunction;
}

function CustomLink({ to, children, navigate}: CustomLinkProps) {
    return(
        <li className={window.location.pathname === to ? "active" : ""}>
            <Link className={window.location.pathname === to ? "active" : ""} 
                to={to}
                onClick={() => navigate(to)}>
                {children}
            </Link>
        </li>
    )
}

export default Navbar;