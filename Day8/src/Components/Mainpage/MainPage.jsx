import React from 'react';
import './MainPage.css';
import Project1 from './MJ.jpg';
import Project2 from './VK.jpg';
import Project3 from './CG.jpg';
import Project4 from './JA.jpg';

import tiptrick1 from './SS.jpg';
import tiptrick2 from './SK.jpg';
import tiptrick3 from './KW.jpg';
import tiptrick4 from './DS.jpg';
  
export default function MainPage() {
  return (
    <div className="main-page">
        <div className="header">
            <h1>YOUR VOTE IS YOUR VOICE</h1>
        </div>
        <div className="featured-projects">
            <h2>BEST PLAYERS OF THE YEAR</h2>
            <div className='projects'>
              <div className="project-card">
                <img src={Project1} alt="Project 1" />
                <h3>MITCHELL JOHNSON</h3>
              </div>
              <div className="project-card">
                <img src={Project2} alt="Project 2" />
                <h3>VIRAT KOHLI</h3>
              </div>
              <div className="project-card">
                <img src={Project3} alt="Project 3" />
                <h3>CHRIS GAYLE</h3>
              </div>
              <div className="project-card">
                <img src={Project4} alt="Project 4" />
                <h3>JIMMY ANDERSON</h3>
               </div>
            </div>
        </div>
        <div className="latest-articles">
            <h2></h2>
            <div className='articles'>
              <div className="article-card">
                <img src={tiptrick1}/>
                <h3>STEVEN SMITH</h3>
              </div>
              <div className="article-card">
                <img src={tiptrick2}/>
                <h3>KUMAR SANGAKARA</h3>
              </div>
              <div className="article-card">
                <img src={tiptrick3}/>
                <h3>KANE WILLIAMSON</h3>
              </div>
              <div className="article-card">
                <img src={tiptrick4}/>
                <h3>DALE STEYN</h3>
               </div>
            </div>
        </div>
      
    </div>
  );
}
