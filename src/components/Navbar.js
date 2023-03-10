import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
        <header>
            <div className="header-area">
                <div className="main-header header-sticky">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            {/* Logo */}
                            <div className="col-xl-2 col-lg-2 col-md-1">
                                <div className="logo">
                                    <Link to='/'><img src="./logo-dark.svg" width={200} alt="logo" /></Link>
                                </div>
                            </div>

                            <div className="col-xl-10 col-lg-10 col-md-10">
                                <div className="menu-main d-flex align-items-center justify-content-end">
                                    {/* Main-menu */}
                                    <div className="main-menu f-right d-none d-lg-block">
                                        <nav> 
                                            <ul id="navigation">
                                                <li><a href="index.html">Home</a></li>
                                                <li><a href="about.html">About</a></li>
                                                <li><a href="services.html">Services</a></li>
                                                <li><a href="blog.html">Blog</a>
                                                    <ul className="submenu">
                                                    <li><a href="blog.html">Blog</a></li>
                                                    <li><a href="blog_details.html">Blog Details</a></li>
                                                    <li><a href="elements.html">Element</a></li>
                                                    </ul>
                                                </li>
                                                <li><Link to='/contact'>Contact</Link></li>
                                            </ul>
                                        </nav>
                                    </div>
                                    <div className="header-right-btn f-right d-none d-lg-block ml-15">
                                        <a href="#" className="btn header-btn">Make an Appointment</a>
                                    </div>
                                </div>
                            </div>  

                            {/* Mobile Menu */}
                            <div className="col-12">
                                <div className="mobile_menu d-block d-lg-none" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </>
  )
}

export default Navbar