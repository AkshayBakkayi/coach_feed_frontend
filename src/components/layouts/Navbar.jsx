import { Link, useLocation } from "react-router-dom";

import "../../styles/navbar.css";

function Navbar() {

    const location = useLocation();

    return (

        <nav className="navbar">

            <div className="logo">

                Coach Feed

            </div>

            <div className="nav-links">

                <Link
                    to="/"
                    className={
                        location.pathname === "/"
                        ? "active"
                        : ""
                    }
                >
                    User
                </Link>

                <Link
                    to="/admin"
                    className={
                        location.pathname === "/admin"
                        ? "active"
                        : ""
                    }
                >
                    Admin
                </Link>

            </div>

        </nav>
    );
}

export default Navbar;