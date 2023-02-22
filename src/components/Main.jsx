import React, {useState, useEffect} from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Main = () => {
    const [message, setMessage] = useState(localStorage.getItem('message') || '');
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        localStorage.setItem('message', message);
    }, [message]);
    function handleClick() {
        setMessage('It`s free to have a chat!');
    }
    function handleClickLeave()
    {
        setMessage('Rinor Kastrati')
    }
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        beforeChange: (current, next) => setCurrentSlide(next),
      };
      
  return (
    <div>
        <div className="navbar">
            <div className="navbarTitle">
                <img src="rk-logo.svg" alt="not available" />
                <span className="profession-span">Web Designer & Dev</span>
                <a href="" className="navbar-photo-tag"></a>
            </div>
        </div>
        <section className="main-text">
            <span className="main-text-main-text">{message}</span>
            <span className="main-text-second-text">I am a web dev from Kosovo, Peja and currently in Prishtina.
            I enjoy building everything from small business to rich interactive websites.</span>
            <a href="" className="contact-me-text" onMouseEnter={handleClick} onMouseLeave={handleClickLeave}>Contact me</a>
        </section>
        <div className="slider-container">
        <Slider {...settings}>
        <div>
            <img src="firstSection.png" alt="project 1" />
        </div>
        <div>
            <img src="secondSection.png" alt="project 2" />
        </div>
        <div>
            <img src="thirdSection.png" alt="project 3" />
        </div>
        </Slider>
        </div>

        <footer>
            hello
        </footer>
    </div>
    
  )
}

export default Main