import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
        <nav className="nav">
            <ul className="flex border-b">
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/library">Library</CustomLink>
                <CustomLink to="/login">Login</CustomLink>
            </ul>
        </nav>
      </>
    )
}

interface CustomLinkProps {
    to: string;
    children: React.ReactNode;
}

function CustomLink({ to, children, ...props}: CustomLinkProps) {
    const path = window.location.pathname
    return(
        <li className={path === to ? "active -mb-px mr-1" : "mr-1"}>
            <Link className={path === to ? "active bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold" : "bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold"} to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}

export default Navbar;