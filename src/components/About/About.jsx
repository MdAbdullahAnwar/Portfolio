import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/Profile.jpg';

const About = () => {
  return (
    <section
      id="about"
      className="py-18 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-1 md:mt-2 lg:mt-3"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-2 md:mt-0">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className="text-4xl sm:text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            MD Abdullah Anwar
          </h2>
          {/* Skills Heading with Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>
            <span className="text-[#8245ec]">
              <Typewriter
                words={[
                  "Frontend Developer",
                  "Fullstack Explorer",
                  "AI Enthusiast",
                  "Problem Solver",
                  "Coder",
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </h3>
          {/* About Me Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            I’m a passionate Frontend Developer and AI enthusiast, always eager
            to push boundaries in the ever-evolving tech world. I specialize in
            building intuitive, responsive and user-focused interfaces that
            balance creativity and functionality. Currently exploring backend
            development to become a well-rounded full-stack developer, I love
            diving into new frameworks, experimenting with AI tools and
            tackling challenges head-on. What sets me apart is my drive for
            continuous growth, clean code and a strong belief in crafting
            meaningful digital experiences.
          </p>
          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1KILjBjPv_iFa6jnisFq3K1xAhDpbF5Zt/view"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
            }}
          >
            DOWNLOAD CV
          </a>
        </div>
        
        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end ml-6">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="MD Abdullah Anwar"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
