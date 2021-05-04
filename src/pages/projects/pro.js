import React from 'react';
import Reveal from 'react-reveal/Reveal';
import GridComponent from '../../componets/Portfolio/grid'; 
import './pro.css';
import JC from '../../assets/pic.PNG'
import Clock from '../../assets/clock.jpg'
import Rabbit from '../../assets/rabbit.png'
import Code from '../../assets/code.jpg'
import Book from '../../assets/book.jpg'
import NB from '../../assets/note.jpg'
import Note from '../../assets/note2.jpg'


const Portfolio = () => ( 
    <div className="container">
            <div className="row">
                <div className="col-sm-12 col-lg-4">
                <Reveal effect="fadeInLeft" duration={2000}>
                <a href="https://github.com/brandonleepiercy/project-1" target="_blank" className="btn text-black mt-n4 repo" rel="noopener noreferrer" ><span className="fab fa-github"></span> Github Repository</a>
                    <GridComponent>
                    <a href="https://brandonleepiercy.github.io/project-1/" target="_blank" rel="noopener noreferrer">
                        <img className="rounded float-left img-fluid" src={Rabbit} width="350" height="350" alt="white Rabbit" />
                    </a>
                    </GridComponent>
                    </Reveal>
                </div>
                <div className="col-sm-12 col-lg-4">
                <Reveal effect="fadeIn" duration={3000}>
                <a href="https://github.com/wlawsonkelly/project-2" target="_blank" className="btn text-black mt-n4 repo"rel="noopener noreferrer" ><span className="fab fa-github"></span> Github Repository</a>
                    <GridComponent>
                    <a href="https://ancient-bayou-98985.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                        <img className="rounded float-left img-fluid" src={Code} width="350" height="350" alt="Code Mania" rel="noopener noreferrer" />
                    </a>
                    </GridComponent>
                    </Reveal>
                </div>
                <div className="col-sm-12 col-lg-4">
                <Reveal effect="fadeInRight" duration={2500}>
                <a href="https://github.com/luvwitch/project3po" target="_blank" className="btn text-black mt-n4 repo" rel="noopener noreferrer"><span className="fab fa-github"></span> Github Repository</a>
                    <GridComponent>
                    <a href="https://stormy-bayou-72071.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                        <img className="rounded float-left img-fluid" src={Clock} width="350" height="350" alt="Early Bird" />
                    </a>
                    </GridComponent>
                    </Reveal>
                </div>
                
            </div>
            
            <div className="row">
                <div className="col-sm-12 col-lg-4">
                <Reveal effect="fadeIn" duration={5500}>
                <a href="https://github.com/jcaro1993/GoogleBook" target="_blank" className="btn text-black mt-n4 repo" rel="noopener noreferrer"><span className="fab fa-github"></span> Github Repository</a>
                    <GridComponent>
                    <a href="https://googlebook20.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                        <img className="rounded float-left img-fluid" src={Book}  width="350" height="350" alt="book" />
                    </a>
                    </GridComponent>
                 </Reveal>
                </div>
                <div className="col-sm-12 col-lg-4">
                <Reveal effect="fadeInUp" duration={2750}>
                <a href="https://github.com/jcaro1993/note-recorder" target="_blank" className="btn text-black mt-n4 repo" rel="noopener noreferrer"><span className="fab fa-github"></span> Github Repository</a>
                        <GridComponent>
                    <a href="https://radiant-sea-15626.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                        <img className="rounded float-left img-fluid" src={NB}  width="350" height="350" alt="note" />
                    </a>
                    </GridComponent>
                   </Reveal>
                </div>
                <div className="col-sm-12 col-lg-4">
                <Reveal effect="fadeInLeft" duration={3000} >
                <a href="https://github.com/jcaro1993" target="_blank" className="btn text-black mt-n4 repo" rel="noopener noreferrer"><span className="fab fa-github"></span> My GitHub</a>
                        <GridComponent>
                    <a href="https://github.com/jcaro1993" target="_blank" rel="noopener noreferrer">
                    <img className="rounded float-left img-fluid" src={JC} width="350" height="350" alt="Git" />               
                    </a>
                    </GridComponent>
                     </Reveal>
                </div>
            </div>
        </div>
      );
    export default Portfolio;
