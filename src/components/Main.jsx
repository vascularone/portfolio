import React, {useState, useEffect} from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Main = () => {
    const [message, setMessage] = useState(localStorage.getItem('message') || 'Front-end Dev');
    const [messagetwo, setMessageTwo] = useState(localStorage.getItem('messagetwo') || 'Mentor');
    const [email, setEmail] = useState('');
    const [emailLabelStyle, setEmailLabelStyle] = useState({});
    const [nameLabelStyle, setNameLabelStyle] = useState({});
    const [name, setName] = useState('');
    const [messageLabelStyle, setMessageLabelStyle] = useState({});
    const [messageContact, setMessageContact] = useState('');
    useEffect(() => {
        localStorage.setItem('message', message);
        localStorage.setItem('messagetwo', messagetwo);
    }, [message, messagetwo]);
    function handleClick() {
        setMessage('Wanna have a chat?');
        setMessageTwo("I'll buy the coffee!");
    }
    function handleClickLeave()
    {
        setMessage('Front-end Dev');
        setMessageTwo("Mentor");
    }
    window.addEventListener('scroll', () => {
        const scroll = window.scrollY;
        console.log(scroll);
    });
    
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    
        // Check if the input field is not empty
        if (event.target.value !== '') {
          setEmailLabelStyle({
            transform: 'translateX(-5rem)',
            transition: 'all 0.2s',
          });
        } else {
          setEmailLabelStyle({
            transition: 'all 0.3s'
          });
        }
      };
    const handleNameChange = (event) => {
      setName(event.target.value);
      if(event.target.value !== '') {
        setNameLabelStyle({
          transform: 'translateX(-6rem)',
          transition: 'all 0.2s',
        });
      } else {
        setNameLabelStyle({
          transition: 'all 0.3s'
        })
      }
    };
    const handleMessageChange = (event) => {
      setMessageContact(event.target.value);
      if(event.target.value !== '') {
        setMessageLabelStyle({
          transform: 'translateX(-6.7rem)',
          transition: 'all 0.2s',
        });
      } else {
        setMessageLabelStyle({
          transition: 'all 0.3s'
        })
      }
    };
    useEffect(() => {
        const aboutMeText = document.querySelector(".aboutme-text");
        const aboutMeTextTwo = document.querySelector(".aboutme-text-two");
        const aboutMeSpan = document.querySelector(".aboutme-title");
        const aboutMeTextThree = document.querySelector(".aboutme-text-three");
        const aboutMeTextFour = document.querySelector(".aboutme-text-four");
        const firstImage = document.querySelector(".firstImage");
        const secondImage = document.querySelector(".secondImage");
        const thirdImage = document.querySelector(".thirdImage");
        const fourthImage = document.querySelector(".fourthImage");
        window.addEventListener("scroll", () => {
          const scrollPosition = window.scrollY;
          if(scrollPosition > 1800)
          {
            thirdImage.style.right = "0rem";
            thirdImage.style.transform = "translateY(0rem)";
            thirdImage.style.transition = "all 2s";
            thirdImage.style.opacity = "1";
            fourthImage.style.left = "0rem";
            fourthImage.style.transform = "translateY(0rem)";
            fourthImage.style.transition = "all 2s";
            fourthImage.style.opacity = "1";
          } else {
            thirdImage.style.right = "18rem";
            thirdImage.style.transform = "translateY(10rem)";
            thirdImage.style.transition = "all 2s";
            thirdImage.style.opacity = "0";
            fourthImage.style.left = "18rem";
            fourthImage.style.transform = "translateY(10rem)";
            fourthImage.style.transition = "all 2s";
            fourthImage.style.opacity = "0";
          }
          if(scrollPosition > 1450)
          {
            firstImage.style.right = "0rem";
            firstImage.style.transform = "translateY(0rem)";
            firstImage.style.transition = "all 2s";
            secondImage.style.left = "0rem";
            secondImage.style.transform = "translateY(0rem)";
            secondImage.style.transition = "all 2s";
            firstImage.style.opacity = "1";
            secondImage.style.opacity = "1";
          } else {
            firstImage.style.right = "18rem";
            firstImage.style.transform = "translateY(-10rem)";
            firstImage.style.transition = "all 2s";
            secondImage.style.left = "18rem";
            secondImage.style.transform = "translateY(-10rem)";
            secondImage.style.transition = "all 2s";
            firstImage.style.opacity = "0";
            secondImage.style.opacity = "0";
          }
          if(scrollPosition > 1060)
          {
            aboutMeTextFour.style.opacity = "1";
            aboutMeTextFour.style.transform = "translateY(40rem)";
            aboutMeTextFour.style.transition = "all 1.5s";
          }
          if(scrollPosition > 900)
          {
            aboutMeTextThree.style.opacity = "1";
            aboutMeTextThree.style.transform = "translateY(40rem)";
            aboutMeTextThree.style.transition = "all 1.5s";
          }
           if (scrollPosition > 670)
          {
            aboutMeTextTwo.style.opacity = "1";
            aboutMeTextTwo.style.transform = "translateY(20rem)";
            aboutMeTextTwo.style.transition = "all 1.5s";
          }
          if (scrollPosition > 470) {
            aboutMeSpan.style.opacity = "1";
            aboutMeSpan.style.transform = "translateY(10rem)";
            aboutMeSpan.style.transition = "all 1.5s";
            aboutMeText.style.opacity = "1";
            aboutMeText.style.transform = "translateY(0rem)";
            aboutMeText.style.transition = "all 1.5s";
          }  else {
            aboutMeSpan.style.opacity = "0";
            aboutMeSpan.style.transform = "translateY(20rem)";
            aboutMeSpan.style.transition = "all 1.5s";
            aboutMeText.style.opacity = "0";
            aboutMeText.style.transform = "translateY(20rem)";
            aboutMeText.style.transition = "all 1.5s";
            aboutMeTextTwo.style.opacity = "0";
            aboutMeTextTwo.style.transform = "translateY(40rem)";
            aboutMeTextTwo.style.transition = "all 1.5s";
            aboutMeTextThree.style.opacity = "0";
            aboutMeTextThree.style.transform = "translateY(55rem)";
            aboutMeTextThree.style.transition = "all 1.5s";
            aboutMeTextFour.style.opacity = "0";
            aboutMeTextFour.style.transform = "translateY(55rem)";
            aboutMeTextFour.style.transition = "all 1.5s";
          }
        });
      }, []);
  return (
    <div>
        <header>
        <div className="navbar">
            <div className="navbarTitle">
                <img src="rk-logo.svg" alt="not available" />
                <span className="profession-span">Web Designer & Dev</span>
                <a href="https://github.com/vascularone" className="navbar-photo-tag"></a>
                <span className="navbar-github">GitHub</span>
            </div>
        </div>
        <section className="main-text">
            <span className="main-text-main-text">{message}</span>
            <span className="main-text-second-main">{messagetwo}</span>
            <span className="main-text-second-text">Front-end  |  Teacher at ProUni KS  |  Student</span>
            <span className="main-text-third-text">Rinor Kastrati</span>
            <a href="" className="contact-me-text" onMouseEnter={handleClick} onMouseLeave={handleClickLeave}>Contact me</a>
        </section>
        </header>
        {/* <span className="letterR" id="letterR" name="letterR"></span>
        <span className="letterK"></span> */}
            
        <div className="main-part">
            
            <div className="second-part">
                
                <section className="aboutme">
                <span className='aboutme-title'>About me</span>
                <span className="aboutme-text">Hi, I'm Rinor. I'm a student located in Prishtina, Kosovo.</span>
                <span className="aboutme-text-two">I'm 20 years old and currently a teacher at <a href="https://programmers-uni-site-client-o8e972i1f-davud600.vercel.app/" className="prouni">Programmer's University</a></span>
                <span className="aboutme-text-three">You can find me at <a href="https://www.linkedin.com/in/crkc/">LinkedIn</a></span>
                <span className="aboutme-text-four">I enjoy creating responsive and interactive website which you can check out below!</span>
                </section>

            </div>
        </div>
        {/* <div className="slider-container">
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
        </div> */}
        <div className="image-grid">
                <img src="firstSection.png" alt="" className='firstImage'/>
                <img src="secondSection.png" alt="" className='secondImage'/>
                <img src="thirdSection.png" alt="" className='thirdImage'/>
                <img src="fourthSection.png" alt="" className='fourthImage'/>
        </div>

        <div className="contactMe">
          <span className="contactme-span">CONTACT ME</span>
          <form>
          <span className="email-span" style={emailLabelStyle}>Email</span>
          <input type="email" className="email-input"  onChange={handleEmailChange} value={email} required/>
          <span className="email-span" style={nameLabelStyle}>Subject</span>
          <input type="text" className="email-input"  onChange={handleNameChange} value={name} required/>
          <span className="email-span" style={messageLabelStyle}>Message</span>
          {/* <input type="email" className="email-input message-input"  onChange={handleMessageChange} value={messageContact} required/> */}
          <textarea className="email-input message-input" name="message" rows="4" cols="40" value={messageContact} onChange={handleMessageChange} required></textarea>
          </form>
        </div>
        <footer>
        © Copyright 2023 Rinor 
        </footer>
    </div>
    
  )
}

export default Main