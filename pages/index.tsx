import type {NextPage} from 'next'
import {useRouter} from 'next/router';
import {useEffect} from 'react';

const Home: NextPage = () => {
    const router = useRouter();
    const handleRouteChange = (url: string) => {
        // @ts-ignore
        window.gtag('config', 'UA-214926520-1', {
            page_path: url,
        });
    };
    useEffect(() => {

        router.events.on('routeChangeComplete', handleRouteChange);
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, [router.events]);
    return (
        <div>
            <header id="header" className="fixed-top d-flex align-items-cente">
                <div className="container-fluid container-xl d-flex align-items-center justify-content-lg-between">

                    <h1 className="logo me-auto me-lg-0"><a href="index.html">Holygrail</a></h1>
                    <nav id="navbar" className="navbar order-last order-lg-0">
                        <ul>
                            <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
                            <li><a className="nav-link scrollto" href="#about">About us</a></li>
                            <li><a className="nav-link scrollto" href="#service">Our Services</a></li>
                            <li><a className="nav-link scrollto" href="#testi">Testimonials</a></li>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle"/>
                    </nav>
                </div>
            </header>

            <section id="hero" className="d-flex align-items-center">
                <div className="container position-relative text-center text-lg-start" data-aos="zoom-in"
                     data-aos-delay="100">
                    <div className="row">
                        <div className="col-lg-8">
                            <h1>Welcome to <span>Holygrail</span></h1>
                            <h2>Blue pen: Welcome to Holygrail Your Prime Servant</h2>

                        </div>
                        <div className="col-lg-4 d-flex align-items-center justify-content-center position-relative"
                             data-aos="zoom-in" data-aos-delay="200">
                            <a href="https://www.youtube.com/watch?v=u6BOC7CDUTQ" className="glightbox play-btn"/>
                        </div>

                    </div>
                </div>
            </section>

            <main id="main">
                <section id="about" className="about">
                    <div className="container" data-aos="fade-up">

                        <div className="row">
                            <div className="col-lg-6 order-1 order-lg-2" data-aos="zoom-in" data-aos-delay="100">
                                <div className="about-img">
                                    <img src="/static/img/about.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
                                <h3>About us </h3>
                                <p className="fst-italic">
                                    Holygrail is a shoes laundry service that provide the best quality in shoes cleaning
                                    and care with affordable price. It was first established at Bandung since February
                                    5, 2019 and followed with the next branch at Jambi on November 2020. Holygrail is
                                    aware the importance of appeareance from head to toe, and here we are as Your Prime
                                    Servant to help your best toe-look.
                                </p>

                            </div>
                        </div>

                    </div>
                </section>
                <section id="events" className="events">
                    <div className="container" data-aos="fade-up">

                        <div className="section-title">
                            <p>Our Services</p>
                        </div>

                        <div className="events-slider swiper" data-aos="fade-up" data-aos-delay="100">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <div className="row event-item">
                                        <div className="col-lg-6">
                                            <img src="/static/img/event-birthday.jpg" className="img-fluid" alt=""/>
                                        </div>
                                        <div className="col-lg-6 pt-4 pt-lg-0 content">
                                            <h3>Fast Cleaning</h3>
                                            <p className="fst-italic">
                                                The fastest shoes cleaning service for all your canvas shoes. Light dirt
                                                will no longer bother you
                                            </p>
                                        </div>

                                    </div>
                                </div>


                                <div className="swiper-slide">
                                    <div className="row event-item">
                                        <div className="col-lg-6">
                                            <img src="assets/img/event-private.jpg" className="img-fluid" alt=""/>
                                        </div>
                                        <div className="col-lg-6 pt-4 pt-lg-0 content">
                                            <h3>Private Parties</h3>
                                            <div className="price">
                                                <p><span>$290</span></p>
                                            </div>
                                            <p className="fst-italic">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore
                                                magna aliqua.
                                            </p>
                                            <ul>
                                                <li><i className="bi bi-check-circled"/> Ullamco laboris nisi ut
                                                    aliquip ex ea commodo consequat.
                                                </li>
                                                <li><i className="bi bi-check-circled"/> Duis aute irure dolor in
                                                    reprehenderit in voluptate velit.
                                                </li>
                                                <li><i className="bi bi-check-circled"/> Ullamco laboris nisi ut
                                                    aliquip ex ea commodo consequat.
                                                </li>
                                            </ul>
                                            <p>
                                                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                                dolor in reprehenderit in voluptate
                                                velit esse cillum dolore eu fugiat nulla pariatur
                                            </p>
                                        </div>
                                    </div>
                                </div>


                                <div className="swiper-slide">
                                    <div className="row event-item">
                                        <div className="col-lg-6">
                                            <img src="assets/img/event-custom.jpg" className="img-fluid" alt=""/>
                                        </div>
                                        <div className="col-lg-6 pt-4 pt-lg-0 content">
                                            <h3>Custom Parties</h3>
                                            <div className="price">
                                                <p><span>$99</span></p>
                                            </div>
                                            <p className="fst-italic">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore
                                                magna aliqua.
                                            </p>
                                            <ul>
                                                <li><i className="bi bi-check-circled"/> Ullamco laboris nisi ut
                                                    aliquip ex ea commodo consequat.
                                                </li>
                                                <li><i className="bi bi-check-circled"/> Duis aute irure dolor in
                                                    reprehenderit in voluptate velit.
                                                </li>
                                                <li><i className="bi bi-check-circled"/> Ullamco laboris nisi ut
                                                    aliquip ex ea commodo consequat.
                                                </li>
                                            </ul>
                                            <p>
                                                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                                dolor in reprehenderit in voluptate
                                                velit esse cillum dolore eu fugiat nulla pariatur
                                            </p>
                                        </div>
                                    </div>
                                </div>


                            </div>
                            <div className="swiper-pagination"/>
                        </div>
                        <div className="swiper-slide m-4">
                            <div className="row event-item">
                                <div className="col-lg-6">
                                    <img src="/static/img/event-private.jpg" className="img-fluid" alt=""/>
                                </div>
                                <div className="col-lg-6 pt-4 pt-lg-0 content">
                                    <h3>Deep Cleaning</h3>

                                    <p className="fst-italic">
                                        We will clean your shoes from inside out. Every details will be fully handled by
                                        our professional team. Make your old shoes like a new one.
                                    </p>

                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide m-4">
                            <div className="row event-item">
                                <div className="col-lg-6">
                                    <img src="/static/img/event-3.jpg" className="img-fluid" alt=""/>
                                </div>
                                <div className="col-lg-6 pt-4 pt-lg-0 content">
                                    <h3>Leather Treatment</h3>

                                    <p className="fst-italic">
                                        We treat each shoes like our babies. Gently handled and perfectly cleaned. With
                                        the best quality ingredients, we'll make sure every shoes deserve the best
                                        treatment with no exception.
                                    </p>

                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide m-4">
                            <div className="row event-item">
                                <div className="col-lg-6">
                                    <img src="/static/img/event-4.jpg" className="img-fluid" alt=""/>
                                </div>
                                <div className="col-lg-6 pt-4 pt-lg-0 content">
                                    <h3>Unyellowing</h3>

                                    <p className="fst-italic">
                                        No more yellowish from the rain, water crust or other stains that scar your
                                        shoes. Make your white shoes as white as the cloud.
                                    </p>

                                </div>
                            </div>
                        </div>
                        <div id="service" className="swiper-slide m-4">
                            <div className="row event-item">
                                <div className="col-lg-6">
                                    <img src="/static/img/event-5.jpg" className="img-fluid" alt=""/>
                                </div>
                                <div className="col-lg-6 pt-4 pt-lg-0 content">
                                    <h3>Other services</h3>

                                    <p className="fst-italic">
                                        Looking for other treatment to maximize your old shoes?
                                        We can repaint your shoes and make it totally like new. Today, we accept canvas
                                        and leather shoes only.
                                    </p>

                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide m-4">
                            <div className="row event-item">
                                <div className="col-lg-6">
                                    <img src="/static/img/event-private.jpg" className="img-fluid" alt=""/>
                                </div>
                                <div className="col-lg-6 pt-4 pt-lg-0 content">
                                    <h3>Pick-up and delivery service</h3>

                                    <p className="fst-italic">
                                        We understand about your high mobility. We have 2 drop points in Bandung where
                                        you can drop your shoes and deliver them to you in time. Yes, it's free of
                                        charge!
                                    </p>

                                </div>
                            </div>
                        </div>


                    </div>
                </section>
                <section id="testi" className="gallery">

                    <div className="container" data-aos="fade-up">
                        <div className="section-title">
                            <h2>Gallery</h2>
                            <p>Some photos </p>
                        </div>
                    </div>

                    <div className="container-fluid" data-aos="fade-up" data-aos-delay="100">

                        <div className="row g-0">

                            <div className="col-lg-3 col-md-4">
                                <div className="gallery-item">
                                    <a href="/static/img/gallery/gallery-1.jpg" className="gallery-lightbox"
                                       data-gall="gallery-item">
                                        <img src="/static//img/gallery/gallery-1.jpg" alt="" className="img-fluid"/>
                                    </a>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-4">
                                <div className="gallery-item">
                                    <a href="/static/img/gallery/gallery-2.jpg" className="gallery-lightbox"
                                       data-gall="gallery-item">
                                        <img src="/static/img/gallery/gallery-2.jpg" alt="" className="img-fluid"/>
                                    </a>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-4">
                                <div className="gallery-item">
                                    <a href="/static/img/gallery/gallery-3.jpg" className="gallery-lightbox"
                                       data-gall="gallery-item">
                                        <img src="/static/img/gallery/gallery-3.jpg" alt="" className="img-fluid"/>
                                    </a>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-4">
                                <div className="gallery-item">
                                    <a href="/static/img/gallery/gallery-4.jpg" className="gallery-lightbox"
                                       data-gall="gallery-item">
                                        <img src="/static/img/gallery/gallery-4.jpg" alt="" className="img-fluid"/>
                                    </a>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-4">
                                <div className="gallery-item">
                                    <a href="/static/img/gallery/gallery-5.jpg" className="gallery-lightbox"
                                       data-gall="gallery-item">
                                        <img src="/static/img/gallery/gallery-5.jpg" alt="" className="img-fluid"/>
                                    </a>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-4">
                                <div className="gallery-item">
                                    <a href="/static/img/gallery/gallery-6.jpg" className="gallery-lightbox"
                                       data-gall="gallery-item">
                                        <img src="/static/img/gallery/gallery-6.jpg" alt="" className="img-fluid"/>
                                    </a>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-4">
                                <div className="gallery-item">
                                    <a href="/static/img/gallery/gallery-7.jpg" className="gallery-lightbox"
                                       data-gall="gallery-item">
                                        <img src="/static/img/gallery/gallery-7.jpg" alt="" className="img-fluid"/>
                                    </a>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-4">
                                <div className="gallery-item">
                                    <a href="/static/img/gallery/gallery-8.jpg" className="gallery-lightbox"
                                       data-gall="gallery-item">
                                        <img src="/static/img/gallery/gallery-8.jpg" alt="" className="img-fluid"/>
                                    </a>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>

                <footer id="footer">
                    <div className="footer-top">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-3 col-md-6">
                                    <div className="footer-info">
                                        <h3>HolyGrail</h3>
                                        <p>
                                            Instagram, Youtube, Tiktok,
                                        </p>
                                        <div className="social-links mt-3">
                                            <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                                            <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                                            <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                                            <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
                                            <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                                        </div>
                                    </div>
                                </div>


                                <div className="col-lg-4 col-md-6 footer-newsletter">
                                    <h4>Our Newsletter</h4>
                                    <p>Instagram, Youtube, Tiktok</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="copyright">
                            &copy; Copyright <strong><span>Restaurantly</span></strong>. All Rights Reserved
                        </div>
                        <div className="credits">

                            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                        </div>
                    </div>
                </footer>

            </main>
        </div>
    )
}

export default Home
