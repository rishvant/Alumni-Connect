import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Dropdown, Collapse, initMDB } from "mdb-ui-kit";
import { Fade, Fade as Hamburger } from 'hamburger-react'
import toast from "react-hot-toast";
import axios from "axios";

const Navbar = () => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState();
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [user, setUser] = useState();

    const handleMobileMenuToggle = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };    
    useEffect(() => {
        initMDB({ Dropdown, Collapse });
    });

    useEffect(() => {
        const authenticateUser = async () => {
            try {
                const token = localStorage.getItem("accessToken");
                const response = await axios.get("https://alumni-connect-backend-swwq.onrender.com/alumni/user", {
                    headers: {
                        Authorization: token
                    }
                });
                setUser(response.data.response);
                if (token) {
                    setIsLoggedIn(true);
                }
                else {
                    setIsLoggedIn(false);
                }
            }
            catch (err) {
                console.log("Error:", err);
            }
        }
        authenticateUser();
    }, []);

    const handleHome = async () => {
        try {
            window.location.href="/";
        }
        catch (err) {
            console.log("Error:", err);
        }
    }

    const adminLogin = async () => {
        try {
            window.open("http://localhost:5173");
        }
        catch (err) {
            console.log(err);
        }
    }

    const handleLogout = async () => {
        try {
            localStorage.removeItem("accessToken");
            toast.success("Successfully Logged Out!");
            setIsLoggedIn(false);
        }
        catch (err) {
            console.log("Error:", err);
        }
    }
    
    return (
        <header className={`header ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
            <div className="topbar">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-5 col-12">
                            <div className="logo-top">
                                <Link to="https://iiitu.ac.in/"><img src="/topbar-logo-1.png" alt="iiitu" /></Link>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-7 col-12">
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-inner">
                <div className="container">
                    <div className="inner">
                        <div className="row">
                            <div className="col-lg-3 col-md-3 col-12">
                                <img className="mobile-logo-main" src="/iiitu-logo.png" />
                                <div className="mobile-nav">
                                    <div className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`} onClick={handleMobileMenuToggle}>
                                        {isMobileMenuOpen ? <Fade direction="right" color="white" easing="ease-in" label="Show Menu" rounded /> : <Fade color="white" easing="ease-in" label="Hide Menu" rounded />}
                                    </div>
                                </div>
                                {isMobileMenuOpen && (
                                    <div className="mobile-menu">
                                        <nav className="navigation">
                                            <ul className="nav menu">
                                                <li><Link onClick={handleHome}>Home</Link></li>
                                                <li><Link to="/directory">Alumni</Link></li>
                                                <li>
                                                    <Link to="#">
                                                        Events
                                                    </Link>
                                                    <ul className="dropdown">
                                                        <li><Link to="/convocation">Convocation</Link></li>
                                                        <li><Link to="/events/alumni-meet">Alumni Meet</Link></li>
                                                        <li><Link to="/gallery">Gallery</Link></li>
                                                    </ul>
                                                </li>
                                                <li><Link to="/convocation">Convocation</Link></li>
                                                <li><Link to="/events/alumni-meet">Alumni Meet</Link></li>
                                                <li><Link to="/login">Sign In</Link></li>
                                                <li><Link onClick={adminLogin}>Admin Login</Link></li>
                                            </ul>
                                        </nav>
                                    </div>
                                )}
                                <div className="logo-1">
                                    <h2 className="logo-1-head">
                                        IIITU ALUMNI CONNECT
                                    </h2>
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-9 col-12">
                                <div className="main-menu">
                                    <nav className="navigation">
                                        <ul className="nav menu">
                                            <div className="nav-menu-l">
                                                <li className="active"><Link onClick={handleHome}>Home</Link>
                                                </li>
                                                <li><Link to="/directory">Alumni</Link></li>
                                                <li><Link to="#">Events<i className="icofont-rounded-down"></i></Link>
                                                    <ul className="dropdown">
                                                        <li><Link to="/convocation">Convocation</Link></li>
                                                        <li><Link to="/events/alumni-meet">Alumni Meet</Link></li>
                                                        <li><Link to="/gallery">Gallery</Link></li>
                                                    </ul>
                                                </li>
                                            </div>
                                            <div className="logo">
                                                <Link to="https://iiitu.ac.in/"><img src="/logo-anim.gif" alt="iiitu-logo" /></Link>
                                            </div>
                                            <div className="nav-menu-r">
                                                <li><Link to="#">Awards<i className="icofont-rounded-down"></i></Link>
                                                    <ul className="dropdown">
                                                        <li><Link to="https://iiitu.ac.in/about/organization/senate/placements-statistics/">Placements</Link></li>
                                                        <li><Link to="blog-single.html">Alumni Achievements</Link></li>
                                                    </ul>
                                                </li>
                                                <li><Link to="#">About Us<i className="icofont-rounded-down"></i></Link>
                                                    <ul className="dropdown">
                                                        <li><Link to="blog-single.html">Message from the Director</Link></li>
                                                    </ul>
                                                </li>
                                            </div>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-lg-2 col-12 login-btn-top">
                                {isLoggedIn && user ? (
                                    <div className="container-fluid profile-icon">
                                        <div className="dropdown" style={{ width: "50px", marginTop: "10px", marginRight: "-25px" }}>
                                            <a
                                                data-mdb-dropdown-init
                                                className="d-flex align-items-center hidden-arrow"
                                                id="navbarDropdownMenuAvatar"
                                                role="button"
                                                aria-expanded="false"
                                            >
                                                <img
                                                    src={user.image}
                                                    className="rounded-circle"
                                                    height="50"
                                                    width="50"
                                                    alt="Black and White Portrait of a Man"
                                                    loading="lazy"
                                                />
                                            </a>
                                            <ul
                                                className="dropdown-menu dropdown-menu-end"
                                                aria-labelledby="navbarDropdownMenuAvatar"
                                            >
                                                <li>
                                                    <Link className="dropdown-item" to="/profile">My profile</Link>
                                                </li>
                                                <li>
                                                    <Link className="dropdown-item" onClick={handleLogout}>Logout</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="get-quote">
                                        <Link to="/login" class="btn">Login / Sign Up</Link>
                                    </div>
                                )}
                                <div className="get-quote admin-login">
                                    <button onClick={adminLogin} className="btn">Admin Login</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar;