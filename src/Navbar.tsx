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
        <li className={window.location.pathname === to ? "active -mb-px mr-1" : "mr-1"}>
            <Link className={window.location.pathname === to ? "active bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold" : "bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold"} 
                to={to}
                onClick={() => navigate(to)}>
                {children}
            </Link>
        </li>
    )
}

export default Navbar;