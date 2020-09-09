import React from 'react';
function About() {
  return (
    <div className='about-container'>
      <div className='image-container'>
        <img
          className='about-image'
          src='../images/IMG-20171231-WA0002.jpg'
          alt='not found'
        />
      </div>
      <div className='about-info'>
        <h2>
          Hi everyone, <br />
          My name is Vaibhav Srivastava
        </h2>
        <p>
          I am a software developer trainee in MountBlue Technologies.
          <br /> I am from Prayagraj Uttar Pradesh currently residing in
          Bangalore. <br />I am aspiring to be a Full Stack JavaScript
          Developer.
          <br /> I love playing Football and Listening to Music.
          <br /> Nice to meet you all.
          <br /> Vaibhav
        </p>
      </div>
    </div>
  );
}

export default About;
