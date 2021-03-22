import React from 'react'
// import React, { useState } from 'react'
// import axios from 'axios'

function About() {

  return <div>
    <section className="hero is-info is-medium is-bold">
      <div className="hero-body post-background">
        <div className="has-text-centered">
          
          
          <h1 className="title has-text-centered ">
            About Us
          </h1>
        </div>
      </div>
    </section>
    <div className="column is-8 is-offset-2" >
      <div className="box article">
        <div className="box-content">
          <div className="content article-body">
            <p>We are three General Assembly Students completing this for our final project for the Software Engineering Immersive Course. We completed this website as our fourth and final project on our course. Using a flask backend and React frontend, we are very proud of the website we created. Please look at our Linkedins and Githubs for examples of our other projects!</p>
            <div className='is-centered' id='our-info-box' margin='0 auto'>
              <div className='card pt-4 mr-1 ml-1' id='creator-info'>
                <h4 id='olive-green-text'>Benjamin Shamash </h4>
                <a href='https://www.linkedin.com/in/benjamin-shamash-4a93b9112/'>LinkedIn</a>  
                <br />
                <a href='https://github.com/shammyb'>Github</a>  
              </div>
              <div className='card pt-4 mr-1 ml-1' id='creator-info'>
              <h4 id='olive-green-text'>Katherine Herbert </h4>
                <a href='https://www.linkedin.com/in/katherinekherbert/'>LinkedIn</a>  
                <br />
                <a href='https://github.com/kkherbert'>Github</a> 
              </div>
              <div className='card pt-4 mr-1 ml-1' id='creator-info'>
              <h4 id='olive-green-text'>Emily Kulesa </h4>
                <a href='https://www.linkedin.com/in/eekulesa/'>LinkedIn</a>  
                <br />
                <a href='https://github.com/emilieeileen'>Github</a> 
              </div>

            </div>
            <div className="is-centered" >
              <br />
            <h3 className="has-text-centered">Technologies Used</h3>
            <ul className="column is-centered" id='center-list'>
              <li className="is-centered">HTML</li>
              <li className="is-centered">SCSS</li>
              <li className="is-centered">Python</li>
              <li className="is-centered">React</li>
              <li className="is-centered">PostgreSQL</li>
              <li className="is-centered">Bulma</li>
              <li className="is-centered">Formik</li>
              
            </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>




}

export default About