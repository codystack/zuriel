import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

function Home() {
  return (
    <>
    <Navbar />
        <main>
            {/*? Slider Area Start*/}
            <div className="slider-area">
                <div className="slider-active dot-style">
                    <div className="single-slider d-flex align-items-center slider-height">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-xl-7 col-lg-8 col-md-10 ">
                                    <div className="hero-wrapper">
                                        {/* Video icon */}
                                        <div className="video-icon">
                                            <a className="popup-video btn-icon" href="https://www.youtube.com/watch?v=up68UAfH0d0" data-animation="bounceIn" data-delay=".4s">
                                                <i className="fas fa-play" />
                                            </a>
                                        </div>
                                        <div className="hero__caption">
                                            <h1 data-animation="fadeInUp" data-delay=".3s">Health is wealth  keep it healthy </h1>
                                            <p data-animation="fadeInUp" data-delay=".6s">Almost before we knew it, we<br /> had left the ground</p>
                                            <a href="services.html" className="btn" data-animation="fadeInLeft" data-delay=".3s">Take a Service</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>   
                </div>
            </div>
            {/* Slider Area End */}

            {/*? About-2 Area Start */}
            <div className="about-area2 section-padding40">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7 col-md-12">
                            {/* about-img */}
                            <div className="about-img ">
                                <img src="assets/img/gallery/about.png" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-12">
                            <div className="about-caption">
                                {/* Section Tittle */}
                                <div className="section-tittle mb-35">
                                    <h2>Create a healthy 
                                    life you love!</h2>
                                </div>
                                <p className="pera-top mb-40">Almost before we knew it, we had left the ground</p>
                                <p className="pera-bottom mb-30">Praesent porttitor, nulla vitae posuere iaculis, arcu nisl
                                dignissim dolor, a pretium mi sem ut ipsum. Fusce
                                fermentum. Pellentesque libero tortor, tincidunt et.</p>
                                <div className="icon-about">
                                    <img src="assets/img/icon/about1.svg" alt="" className=" mr-20" />
                                    <img src="assets/img/icon/about2.svg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* About-2 Area End */}

            <section className="wantToWork-area section-bg3" style={{backgroundImage: `url("assets/img/gallery/section_bg01.png")`}}>
                <div className="container">
                    <div className="wants-wrapper w-padding2">
                        <div className="row align-items-center justify-content-between">
                            <div className="col-xl-7 col-lg-9 col-md-8">
                                <div className="wantToWork-caption wantToWork-caption2">
                                    <h2>Happy mind <br />healthy life</h2>
                                    <p>Almost before we knew it, we<br /> had left the ground</p>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-4">
                                <a href="services.html" className="btn f-right sm-left">Take a Service</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/*? Services Area Start */}
            <div className="service-area mb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-cat text-center mb-50">
                                <div className="cat-icon">
                                    <img src="assets/img/icon/services1.svg" alt="" />
                                </div>
                                <div className="cat-cap">
                                    <h5><a href="services.html">Physical Activity</a></h5>
                                    <p>Praesent porttitor, nulla vitae  posuere iaculis, arcu nisl dignissim dolor, a pretium mi  sem ut ipsum.</p>
                                    <a href="services.html" className="plus-btn"><i className="ti-plus" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-cat text-center mb-50">
                                <div className="cat-icon">
                                    <img src="assets/img/icon/services2.svg" alt="" />
                                </div>
                                <div className="cat-cap">
                                    <h5><a href="services.html">Physical Activity</a></h5>
                                    <p>Praesent porttitor, nulla vitae  posuere iaculis, arcu nisl dignissim dolor, a pretium mi  sem ut ipsum.</p>
                                    <a href="services.html" className="plus-btn"><i className="ti-plus" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-cat text-center mb-50">
                                <div className="cat-icon">
                                    <img src="assets/img/icon/services3.svg" alt="" />
                                </div>
                                <div className="cat-cap">
                                    <h5><a href="services.html">Physical Activity</a></h5>
                                    <p>Praesent porttitor, nulla vitae  posuere iaculis, arcu nisl dignissim dolor, a pretium mi  sem ut ipsum.</p>
                                    <a href="services.html" className="plus-btn"><i className="ti-plus" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Services Area End */}

            {/*? video_start */}
            <div className="container mt-30 pb-70">
                <div className="video-area section-bg2 d-flex align-items-center" style={{backgroundImage: `url("assets/img/gallery/video-bg.png")`}}>
                <div className="video-wrap position-relative">
                    <div className="video-icon">
                    <a className="popup-video btn-icon" href="https://www.youtube.com/watch?v=up68UAfH0d0"><i className="fas fa-play" /></a>
                    </div>
                </div>
                </div>
            </div>
            {/* video_end */}

        </main>
    <Footer />
    </>
  )
}

export default Home