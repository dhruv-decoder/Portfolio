import React from 'react';
import './Intro.css';
import profilePic from '../assets/profile.jpg'; // Ensure profile.jpg is in src/assets

const Intro = () => {
  return (
    <section className="intro">
      <div className="intro-content">
        <img src={profilePic} alt="Dhruv Tibarewal" className="profile-pic" />
        <div className="intro-text">
          <h1>Dhruv Tibarewal</h1>
          <p>
            Hey! I was someone who didn’t believe that AI is possible and can be so useful to make an impact on people's day-to-day life and make tasks so easy from writing, summarizing to advance use in medicine surgeries, etc. ChatGPT saved me so much time and I slowly felt the impact and I think it'll be more than what it is today. I want to spread this awareness and make an impact in people's lives.
          </p>
          <p>
            I am a 3rd-year B.Tech student. I love creating real-life ML applications and participating in Kaggle competitions. Currently, I am impressed by agentic AI and exploring MLOps. I am dedicated to making simple yet impactful solutions that can make our lives easier and save us time.
          </p>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/dhruv-tibarewal-98a135250/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/dhruv-decoder" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.kaggle.com/dhruvtibarewal" target="_blank" rel="noopener noreferrer">Kaggle</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;

