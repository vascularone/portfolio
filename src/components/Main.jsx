import React, {useState, useEffect} from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useForm, ValidationError } from '@formspree/react';

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
            textShadow: '2px 0 0 teal,0 2px 0 teal,-2px 0 0 teal,0 -2px 0 teal',
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
          textShadow: '2px 0 0 teal,0 2px 0 teal,-2px 0 0 teal,0 -2px 0 teal',
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
          textShadow: '2px 0 0 teal,0 2px 0 teal,-2px 0 0 teal,0 -2px 0 teal',
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
        const contactC = document.querySelector(".C");
        const contactO = document.querySelector(".O");
        const contactN = document.querySelector(".N");
        const contactT = document.querySelector(".T");
        const contactA = document.querySelector(".A");
        const contactCc = document.querySelector(".Cc");
        const contactTt = document.querySelector(".Tt");
        const contactM = document.querySelector(".M");
        const contactE = document.querySelector(".E");
        const contactMeInputs = document.querySelector(".contactMeInputs");
        const submitButton = document.querySelector(".submit-button");
        window.addEventListener("scroll", () => {
          const scrollPosition = window.scrollY;
          if(scrollPosition > 2670)
          {
            submitButton.style.transform = "translateX(0rem)";
            submitButton.style.opacity = "1";
            
          } else {
            submitButton.style.transform = "translateX(15rem)";
            submitButton.style.opacity = "0";
          }
          if(scrollPosition > 2500)
          {
            contactMeInputs.style.transform = "translateX(0rem)";
            contactMeInputs.style.opacity = "1";
          } else {
            contactMeInputs.style.transform = "translateX(-22rem)";
            contactMeInputs.style.opacity = "0";
          }
          if(scrollPosition > 2350)
          {
            contactC.style.opacity = "1";
            contactC.style.transform = "translateX(0rem)";
            contactO.style.opacity = "1";
            contactO.style.transform ="translateX(0rem) translateY(0rem)";
            contactN.style.opacity = "1";
            contactN.style.transform ="translateY(0rem)";
            contactT.style.opacity = "1";
            contactT.style.transform ="translateX(0rem) translateY(0rem)";
            contactA.style.opacity = "1";
            contactA.style.transform ="translateX(0rem) translateY(0rem)";
            contactCc.style.opacity = "1";
            contactCc.style.transform ="translateX(0rem) translateY(0rem)";
            contactTt.style.opacity = "1";
            contactTt.style.transform ="translateX(0rem) translateY(0rem)";
            contactM.style.opacity = "1";
            contactM.style.transform ="translateX(0rem) translateY(0rem)";
            contactE.style.opacity = "1";
            contactE.style.transform ="translateX(0rem) translateY(0rem)";
            
          } else {
            contactC.style.opacity ="0";
            contactC.style.transform = "translateX(-15rem)";
            contactO.style.opacity = "0";
            contactO.style.transform ="translateX(-10rem) translateY(-10rem)";
            contactN.style.opacity = "0";
            contactN.style.transform ="translateY(-10rem)";
            contactT.style.opacity = "0";
            contactT.style.transform ="translateX(10rem) translateY(-10rem)";
            contactA.style.opacity = "0";
            contactA.style.transform ="translateY(10rem)";
            contactCc.style.opacity = "0";
            contactCc.style.transform ="translateX(5rem) translateY(10rem)";
            contactTt.style.opacity = "0";
            contactTt.style.transform ="translateX(10rem) translateY(5rem)";
            contactM.style.opacity = "0";
            contactM.style.transform ="translateX(5rem) translateY(-10rem)";
            contactE.style.opacity = "0";
            contactE.style.transform ="translateX(15rem)";
          }
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
                <a href="https://github.com/vascularone" target="_blank" className="navbar-photo-tag"></a>
                <span className="navbar-github">GitHub</span>
            </div>
        </div>
        <section className="main-text">
            <span className="main-text-main-text">{message}</span>
            <span className="main-text-second-main">{messagetwo}</span>
            <span className="main-text-second-text">Front-end  |  Teacher at ProUni KS  |  Student</span>
            <span className="main-text-third-text">Rinor Kastrati</span>
            <a href="#contactMe" className="contact-me-text" onMouseEnter={handleClick} onMouseLeave={handleClickLeave}>Contact me</a>
        </section>
        </header>
        {/* <span className="letterR" id="letterR" name="letterR"></span>
        <span className="letterK"></span> */}
            
        <div className="main-part">
            
            <div className="second-part">
                
                <section className="aboutme">
                <span className='aboutme-title'>About me</span>
                <span className="aboutme-text">Hi, I'm Rinor. I'm a student located in Prishtina, Kosovo.</span>
                <span className="aboutme-text-two">I'm 20 years old and currently a teacher at <a href="https://programmers-uni-site-client-o8e972i1f-davud600.vercel.app/" target="_blank"className="prouni">Programmer's University</a></span>
                <span className="aboutme-text-three">You can find me at <a href="https://www.linkedin.com/in/crkc/" target="_blank">LinkedIn</a></span>
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
        <div className="contactMe" id="contactMe">
          <div className="contactMeText">
          <span className="contactme-span C" id='contactme-span'>C</span>
          <span className="contactme-span O" id='contactme-span'>O</span>
          <span className="contactme-span N" id='contactme-span'>N</span>
          <span className="contactme-span T" id='contactme-span'>T</span>
          <span className="contactme-span A" id='contactme-span'>A</span>
          <span className="contactme-span Cc" id='contactme-span'>C</span>
          <span className="contactme-span Tt" id='contactme-span'>T</span>
          <span className="contactme-span M" id='contactme-span'>M</span>
          <span className="contactme-span E" id='contactme-span'>E</span>
          </div>
          <form>
          <div className="contactMeInputs">
          <span className="contact-span" style={emailLabelStyle}>Email</span>
          <input type="email" className="contact-input email-input"  onChange={handleEmailChange} value={email} required/>
          <span className="contact-span" style={nameLabelStyle}>Subject</span>
          <input type="text" className="contact-input subject-input"  onChange={handleNameChange} value={name} required/>
          <span className="contact-span" style={messageLabelStyle}>Message</span>
          <textarea className="contact-input message-input" name="message" rows="4" cols="40" value={messageContact} onChange={handleMessageChange} required></textarea>
          </div>
          <button className="submit-button">Submit</button>
          </form>
        </div>
        <footer>
        © Copyright 2023 Rinor 
        </footer>
    </div>
    
  )
}

export default Main