import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
        <section className="about-low-area mt-30 pt-90">
            <div className="container">
                <div className="about-cap-wrapper">
                    <div className="row">
                        <div className="col-xl-5  col-lg-6 col-md-10 offset-xl-1">
                            <div className="about-caption mb-50">
                                {/* Section Tittle */}
                                <div className="section-tittle mb-35">
                                    <h2>100% satisfaction guaranteed.</h2>
                                </div>
                                <p>Almost before we knew it, we had left the ground</p>
                                <a href="about.html" className="border-btn">Make an Appointment</a>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            {/* about-img */}
                            <div className="about-img">
                                <div className="about-font-img">
                                    <img src="assets/img/gallery/about2.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <footer>
            <div className="footer-wrappr section-bg3" style={{backgroundImage: `url("assets/img/gallery/footer-bg.png")`}}>
                <div className="footer-area footer-padding ">
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-xl-8 col-lg-8 col-md-6 col-sm-12">
                                <div className="single-footer-caption mb-50">
                                    {/* logo */}
                                    <div className="footer-logo mb-25">
                                        <Link to='/'><img src="./footer-logo.svg" width={350} alt="" /></Link>
                                    </div>
                                    <d iv className="header-area">
                                        <div className="main-header main-header2">
                                            <div className="menu-main d-flex align-items-center justify-content-start">
                                                {/* Main-menu */}
                                                <div className="main-menu main-menu2">
                                                    <nav> 
                                                        <ul>
                                                            <li><Link to='/'>Home</Link></li>
                                                            <li><Link to='/about'>About</Link></li>
                                                            <li><Link to='/services'>Services</Link></li>
                                                            <li><Link to='/contact'>Contact</Link></li>
                                                        </ul>
                                                    </nav>
                                                </div>
                                            </div>  
                                        </div>
                                    </d>
                                    {/* social */}
                                    <div className="footer-social mt-50">
                                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter" /></a>
                                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f" /></a>
                                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                                <div className="single-footer-caption">
                                    <div className="footer-tittle mb-50">
                                        <h4>Subscribe newsletter</h4>
                                    </div>
                                    {/* Form */}
                                    <div className="footer-form">
                                        <div id="mc_embed_signup">
                                            <form target="_blank" action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&id=92a4423d01" method="get" className="subscribe_form relative mail_part" noValidate="true">
                                            <input type="email" name="EMAIL" id="newsletter-form-email" placeholder=" Email Address " className="placeholder hide-on-focus" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter your email'" />
                                            <div className="form-icon">
                                                <button type="submit" name="submit" id="newsletter-submit" className="email_icon newsletter-submit button-contactForm">
                                                Subscribe
                                                </button>
                                            </div>
                                            <div className="mt-10 info" />
                                            </form>
                                        </div>
                                    </div>
                                    <div className="footer-tittle">
                                        <div className="footer-pera">
                                            <p>Praesent porttitor, nulla vitae posuere iaculis, arcu nisl dignissim dolor, a pretium misem ut ipsum.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* footer-bottom area */}
                <div className="footer-bottom-area">
                    <div className="container">
                        <div className="">
                            <div className="row">
                                <div className="col-xl-12 ">
                                    <div className="footer-copy-right text-center">
                                        <p>© {(new Date().getFullYear())} All rights reserved Zuriel Health Services Inc. <br />Built with <i className="fa fa-heart" aria-hidden="true" /> by <a href="https://thankgodokoro.xyz" target="_blank">TeeGee</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer