
import React, { useEffect, useState, useRef } from 'react';

import blockImgX1 from "./img/e1.jpg";
import blockImgX2 from "./img/e2.jpg";
import blockImgX3 from "./img/e3.jpg";
import blockImgX4 from "./img/e4.jpg";
import blockImgX5 from "./img/e5.jpeg";
import blockImgX6 from "./img/e6.jpeg";
import blockImgX7 from "./img/e7.jpg";
import blockImgX8 from "./img/e8.jpeg";
import blockImgX9 from "./img/e9.jpeg";
import blockImgX10 from "./img/e10.jpeg";
import blockImgX11 from "./img/skills.png";
import blockImgX12 from "./img/discount.png";
import blockImgX13 from "./img/contone.png";
import blockImgX14 from "./img/cont.svg";
import blockImgX15 from "./img/cont2.jpg";
import blockImgX16 from "./img/cont4.jpg";
import blockImgX17 from "./img/cont5.jpg";


export default function Home() {

    useEffect(() => {
        let contentImg = document.querySelector(".cont-img");

        let imgArray = ['cont1.jpg', '03.jpg', '04.jpg',];

        setInterval(() => {

            let randomNumber = Math.floor(Math.random() * imgArray.length);

            contentImg.style.backgroundImage = 'url("img/' + imgArray[randomNumber] + '")';

        }, 10000);

    }, []);

    const [showPopup, setShowPopup] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [started, setStarted] = useState(false);
    const numsRef = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const [activeTab, setActiveTab] = useState('.one');

    const handleTabClick = (dataCont) => {
        setActiveTab(dataCont);
    };


    const openPopup = (imgSrc) => {
        setSelectedImage(imgSrc);
        setShowPopup(true);
    };

    const closePopup = () => {
        setShowPopup(false);
    };

    const toggleMenu = () => {
        setIsActive(!isActive);
    };

    const images = [
        { id: 1, src: blockImgX1 },
        { id: 2, src: blockImgX2 },
        { id: 3, src: blockImgX3 },
        { id: 4, src: blockImgX4 },
        { id: 5, src: blockImgX5 },
        { id: 6, src: blockImgX6 },
        { id: 7, src: blockImgX7 },
        { id: 8, src: blockImgX8 },
        { id: 9, src: blockImgX9 },
        { id: 10, src: blockImgX10 }
    ];


    useEffect(() => {
        const handleScroll = () => {
            let ourOfSetTop = document.querySelector(".Our-SKILLS");

            if (ourOfSetTop) {
                let skillsOffsetTop = ourOfSetTop.offsetTop;
                let skillsOffsetHeight = ourOfSetTop.offsetHeight;
                let windowHeight = window.innerHeight;
                let windowScrollTop = window.pageYOffset;

                if (windowScrollTop > (skillsOffsetTop + skillsOffsetHeight - windowHeight)) {
                    let skills = document.querySelectorAll(".skill-box .skill-prorams span");

                    skills.forEach(skill => {
                        skill.style.width = skill.dataset.progres;
                    });
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    useEffect(() => {
        const nums = numsRef.current.querySelectorAll(".num");
        const section = numsRef.current.querySelector(".number");

        const startCount = (el) => {
            const goal = parseInt(el.dataset.goal);
            let currentValue = 0;
            const interval = setInterval(() => {
                currentValue++;
                el.textContent = currentValue;
                if (currentValue === goal) {
                    clearInterval(interval);
                }
            }, 2000 / goal);
        };

        const isElementInViewport = (el) => {
            const rect = el.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        };

        const handleScroll = () => {
            if (!started && isElementInViewport(section)) {
                nums.forEach(num => startCount(num));
                setStarted(true);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [started]);

    return (
        <>
            <div className={`navbar ${isActive ? 'active' : ''}`}>
                <div className="container">
                    <div className="content">
                        <div className="section1">
                            <div className="logo">
                                <h2>MOHAMED</h2>
                            </div>
                            <div class="left">
                                <a href=""><i class="fa-brands fa-linkedin"></i></a>
                                <a href=""><i class="fa-brands fa-twitter"></i></a>
                                <a href=""><i class="fa-brands fa-facebook"></i></a>
                            </div>
                            <div className="menu-btn" onClick={toggleMenu}>
                                <svg className="open-menu" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                                <svg className="close-menu" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            </div>
                        </div>
                        <div className="links">
                            <a href="#">home</a>
                            <a href="#">abute</a>
                            <a href="#">Contact</a>
                            <a href="#">content</a>
                            <a class="user" href="">
                                <i class="fa-solid fa-user"></i>
                                <span>10</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="cont-img"></div>
            </div>


            {/* end nav par */}

            {/* <!-- start icon --> */}
            <div class="home-element">
                <h2>HELLO WELCOM</h2>
                <div class="main-span">
                    <span></span>
                </div>
            </div>
            <div class="contener-element">
                <div class="contact-icon">
                    <div class="contact-left">
                        <div class="element-text">
                            <h2>WE MEET DEADLINES</h2>
                        </div>
                        <div class="prgram">
                            <div class="icon">
                                <i class="fa-solid fa-check"></i>
                            </div>
                            <div class="text">
                                distinctio consectetur a ratione, nam quibusdam autem quasi ullam nulla maxime placeat ex?
                                Veniam dicta dolorum alias aut molestias.
                            </div>
                        </div>
                        <div class="element-text">
                            <h2>WE MEET DEADLINES</h2>
                        </div>
                        <div class="prgram">
                            <div class="icon">
                                <i class="fa-solid fa-list"></i>
                            </div>
                            <div class="text">
                                distinctio consectetur a ratione, nam quibusdam autem quasi ullam nulla maxime placeat ex?
                                Veniam dicta dolorum alias aut molestias.
                            </div>
                        </div>
                    </div>
                    <div class="contact-right">
                        <div class="element-text">
                            <h2>WE MEET DEADLINES</h2>
                        </div>
                        <div class="prgram">
                            <div class="icon">
                                <i class="fa-solid fa-comments"></i>
                            </div>
                            <div class="text">
                                distinctio consectetur a ratione, nam quibusdam autem quasi ullam nulla maxime placeat ex?
                                Veniam dicta dolorum alias aut molestias.
                            </div>
                        </div>
                        <div class="element-text">
                            <h2>WE MEET DEADLINES</h2>
                        </div>
                        <div class="prgram">
                            <div class="icon">
                                <i class="fa-solid fa-barcode"></i>
                            </div>
                            <div class="text">
                                distinctio consectetur a ratione, nam quibusdam autem quasi ullam nulla maxime placeat ex?
                                Veniam dicta dolorum alias aut molestias.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- end icon --> */}

            {/*start gallary img */}
            <div className="gallery">
                <div className="prog-text">
                    <h2>Our Gallery</h2>
                    <span></span>
                </div>
                <div className="contener-element">
                    <div className="imges-box">
                        {images.map((img) => (
                            <img
                                key={img.id}
                                src={img.src}
                                alt={`Image ${img.id}`}
                                onClick={() => openPopup(img.src)}
                            />
                        ))}
                    </div>
                </div>
                {showPopup && (
                    <div className="popup-overlay" onClick={closePopup}>
                        <div className="popup-box" onClick={(e) => e.stopPropagation()}>
                            <img src={selectedImage} alt="Popup Image" />
                            <span className="close-button" onClick={closePopup}>X</span>
                        </div>
                    </div>
                )}
            </div>

            {/* <!-- end galrry --> */}

            {/* Content switcher section */}
            <div className="content-switcher">
                <div className="content">
                    <ul className="switcher-imgs">
                        <li className={activeTab === '.one' ? 'active' : ''} onClick={() => handleTabClick('.one')} data-cont=".one">
                            <i className="fa-solid fa-laptop"></i>
                        </li>
                        <li className={activeTab === '.tow' ? 'active' : ''} onClick={() => handleTabClick('.tow')} data-cont=".tow">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </li>
                        <li className={activeTab === '.three' ? 'active' : ''} onClick={() => handleTabClick('.three')} data-cont=".three">
                            <i className="fa-solid fa-code"></i>
                        </li>
                        <li className={activeTab === '.four' ? 'active' : ''} onClick={() => handleTabClick('.four')} data-cont=".four">
                            <i className="fa-solid fa-wifi"></i>
                        </li>
                        <li className={activeTab === '.faive' ? 'active' : ''} onClick={() => handleTabClick('.faive')} data-cont=".faive">
                            <i className="fa-brands fa-facebook">
                            </i></li>
                    </ul>
                    <div className="content-gallery">
                        <div className={`one ${activeTab === '.one' ? 'active' : ''}`}>
                            <div className="cont">
                                <div className="program">
                                    <div className="main-text">
                                        <div className="text">
                                            <h3>FRONT END</h3>
                                        </div>
                                        <div className="main-span">
                                            <span></span>
                                        </div>
                                    </div>
                                    <div>
                                        <p>vero voluptatum magnam ex pariatur iure fugit, laborum commodi voluptas eius
                                            aspernatur excepturi. Modi placeat et nostrum dicta.
                                        </p>
                                    </div>
                                </div>
                                <div className="in-img">
                                    <img src={blockImgX13} alt="Content One" />
                                </div>
                            </div>
                        </div>
                        <div className={`tow ${activeTab === '.tow' ? 'active' : ''}`}>
                            <div className="cont">
                                <div className="program">
                                    <div className="main-text">
                                        <div className="text">
                                            <h3>FRONT END</h3>
                                        </div>
                                        <div className="main-span">
                                            <span></span>
                                        </div>
                                    </div>
                                    <p>vero voluptatum magnam ex pariatur iure fugit, laborum commodi voluptas eius aspernatur
                                        excepturi. Modi placeat et nostrum dicta.
                                        excepturi. Modi placeat et nostrum dicta.
                                    </p>
                                </div>
                                <div className="in-img">
                                    <img src={blockImgX14} alt="Content Two" />
                                </div>
                            </div>
                        </div>
                        <div className={`three ${activeTab === '.three' ? 'active' : ''}`}>
                            <div className="cont">
                                <div className="program">
                                    <div className="main-text">
                                        <div className="text">
                                            <h3>FRONT END</h3>
                                        </div>
                                        <div className="main-span">
                                            <span></span>
                                        </div>
                                    </div>
                                    <p>vero voluptatum magnam ex pariatur iure fugit, laborum commodi voluptas eius aspernatur
                                        excepturi. Modi placeat et nostrum dicta.
                                        excepturi. Modi placeat et nostrum dicta.
                                    </p>
                                </div>
                                <div className="in-img">
                                    <img src={blockImgX15} alt="Content Three" />
                                </div>
                            </div>
                        </div>
                        <div className={`four ${activeTab === '.four' ? 'active' : ''}`}>
                            <div className="cont">
                                <div className="program">
                                    <div className="main-text">
                                        <div className="text">
                                            <h3>FRONT END</h3>
                                        </div>
                                        <div className="main-span">
                                            <span></span>
                                        </div>
                                    </div>
                                    <p>vero voluptatum magnam ex pariatur iure fugit, laborum commodi voluptas eius aspernatur
                                        excepturi. Modi placeat et nostrum dicta.
                                        excepturi. Modi placeat et nostrum dicta.
                                    </p>
                                </div>
                                <div className="in-img">
                                    <img src={blockImgX16} alt="Content Four" />
                                </div>
                            </div>
                        </div>
                        <div className={`faive ${activeTab === '.faive' ? 'active' : ''}`}>
                            <div className="cont">
                                <div className="program">
                                    <div className="main-text">
                                        <div className="text">
                                            <h3>FRONT END</h3>
                                        </div>
                                        <div className="main-span">
                                            <span></span>
                                        </div>
                                    </div>
                                    <p>vero voluptatum magnam ex pariatur iure fugit, laborum commodi voluptas eius aspernatur
                                        excepturi. Modi placeat et nostrum dicta.
                                        excepturi. Modi placeat et nostrum dicta.
                                    </p>
                                </div>
                                <div className="in-img">
                                    <img src={blockImgX17} alt="Content Five" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* start our skils */}
            <div className="Our-SKILLS">
                <h2>Our SKILLS</h2>
                <div className="main-span">
                    <span></span>
                </div>
                <div className="container-box">
                    <div className="element-img">
                        <img src={blockImgX11} />
                    </div>
                    <div className="skills">
                        <div className="skill-box">
                            <div className="skill-name">HTML</div>
                            <div className="skill-prorams">
                                <span className="progress-bar" data-progres="100%"></span>
                            </div>
                        </div>
                        <div className="skill-box">
                            <div className="skill-name">CSS</div>
                            <div className="skill-prorams">
                                <span className="progress-bar" data-progres="100%"></span>
                            </div>
                        </div>
                        <div className="skill-box">
                            <div className="skill-name">JavaScript</div>
                            <div className="skill-prorams">
                                <span className="progress-bar" data-progres="100%"></span>
                            </div>
                        </div>
                        <div className="skill-box">
                            <div className="skill-name">React.js</div>
                            <div className="skill-prorams">
                                <span className="progress-bar" data-progres="100%"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* end skils */}

            {/* start container-number */}
            <div className="container-number" ref={numsRef}>
                <div className="Our-number">
                    <div>
                        <h2>Our Awesome Stats</h2>
                    </div>
                    <div className="main-span">
                        <span></span>
                    </div>
                </div>
                <div className="number">
                    <div className="nums">
                        <div className="icon">
                            <i className="far fa-user fa-2x fa-fw"></i>
                            <div className="num" data-goal="100">0</div>
                            <span className="text">Clients</span>
                        </div>
                        <div className="icon">
                            <i className="fas fa-code fa-2x fa-fw"></i>
                            <div className="num" data-goal="200">0</div>
                            <span className="text">Projects</span>
                        </div>
                        <div className="icon">
                            <i className="fas fa-globe-asia fa-2x fa-fw"></i>
                            <div className="num" data-goal="300">0</div>
                            <span className="text">Countries</span>
                        </div>
                        <div className="icon">
                            <i className="far fa-money-bill-alt fa-2x fa-fw"></i>
                            <div className="num" data-goal="500">0</div>
                            <span className="text">Money</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* end container-number */}

            {/* <!-- Start Discount --> */}
            <div className="discount" id="discount">
                <div className="image">
                    <div className="content">
                        <h2>We Have A Discount</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi asperiores consectetur,
                            recusandae
                            ratione provident necessitatibus, cumque delectus commodi fuga praesentium beatae. Totam vel
                            similique
                            laborum dicta aperiam odit doloribus corporis.
                        </p>
                        <img decoding="async" src={blockImgX12} alt="" />
                    </div>
                </div>
                <div className="form">
                    <div className="content">
                        <h2>Request A Discount</h2>
                        <form action="">
                            <input className="input" type="text" placeholder="Your Name" name="name" />
                            <input className="input" type="email" placeholder="Your Email" name="email" />
                            <input className="input" type="text" placeholder="Your Phone" name="mobile" />
                            <textarea className="input" placeholder="Tell Us About Your Needs" name="message"></textarea>
                            <input type="submit" value="Send" />
                        </form>
                    </div>
                </div>
            </div>
            {/* <!-- End Discount --> */}

            {/* <!-- start footer  --> */}
            <div className="footer">
                <div className="container">
                    <div className="content-one">
                        <div className="mooo">
                            <h2>MOHAMED</h2>
                        </div>
                        <div className="icon">
                            <div className="faceBook main-icon">
                                <i className="fa-brands fa-square-facebook"></i>
                            </div>
                            <div className="twitter main-icon">
                                <i className="fa-brands fa-twitter"></i>
                            </div>
                            <div className="youtube main-icon">
                                <i className="fa-brands fa-youtube"></i>
                            </div>
                        </div>
                        <div className="programs">
                            <div>Lorem ipsum, dolor sit amet</div>
                            <div>consectetur adipisicing elit.</div>
                            <div>Temporibus nulla rem, dignissimos</div>
                            <div>iste aspernatur</div>
                        </div>
                    </div>
                    <div className="content-tow">
                        <div className="home-span">
                            <div className="main-span">
                                <span>&gt;&gt;</span>
                            </div>
                            <div className="cont-rogram">
                                <span>Important Link 1</span>
                            </div>
                        </div>
                        <div className="home-span">
                            <div className="main-span">
                                <span>&gt;&gt;</span>
                            </div>
                            <div className="cont-rogram">
                                <span>Important Link 2</span>
                            </div>
                        </div>
                        <div className="home-span">
                            <div className="main-span">
                                <span>&gt;&gt;</span>
                            </div>
                            <div className="cont-rogram">
                                <span>Important Link 3</span>
                            </div>
                        </div>
                        <div className="home-span">
                            <div className="main-span">
                                <span>&gt;&gt;</span>
                            </div>
                            <div className="cont-rogram">
                                <span>Important Link 4</span>
                            </div>
                        </div>
                        <div className="home-span">
                            <div className="main-span">
                                <span>&gt;&gt;</span>
                            </div>
                            <div className="cont-rogram">
                                <span>Important Link 5</span>
                            </div>
                        </div>
                    </div>
                    <div className="content-three">
                        <div className="content">
                            <div className="element">
                                <div className="home-icon">
                                    <i className="fas fa-map-marker-alt fa-fw"></i>
                                </div>
                                <div className="main-span">
                                    <div>Egypt, Giza, Inside The Sphinx,
                                        <div>Room Number 220</div>
                                    </div>
                                </div>
                            </div>
                            <div className="element">
                                <div className="home-icon">
                                    <i className="far fa-clock fa-fw"></i>
                                </div>
                                <div className="main-span">
                                    <div>Business Hours
                                        <div>: From 10:00 To 18:00</div>
                                    </div>
                                </div>
                            </div>
                            <div className="element">
                                <div className="home-icon">
                                    <i className="fas fa-phone-volume fa-fw"></i>
                                </div>
                                <div className="main-span">
                                    <div>+20123456789<div>
                                        <div>+20198765432</div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="abute">
                    <div>© Drafted by Victorflow - Powered by Webflow</div>
                </div>
            </div>


            {/* <!-- end footer  --> */}
        </>
    )
}