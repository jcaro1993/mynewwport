import React from 'react'
import './main.css'
import JC from '../../assets/pic2.png';


const styles = {
    main: {
      lineHeight: "1.5em",
      fontSize: "22px",
    },
    JC: {
        boxShadow: "5px 5px 20px -5px black",
        borderRadius: "25px"
    },
  };

function main() {
    return (
        <div className="about">
        <div className="row">
          <div className="col-12 col-lg-7 pl-lg-0 pr-lg-5">
            <h5 className="text-black mb-5" style={styles.main}>
            Hello My name is Javier Caro welcome to my page. 
            </h5>
           
              <h6> Hello, I recently graduated from UCLA Extension Coding Boot camp and I am now a full stack Developer looking to build a new career with the training and experience I learned. 
                I am knowledgeable in a wide range of different development languages. I'm a Bright critical thinker with proven talent for learning quickly in a results-oriented environment. 
                I also have a background in Financial Services and banking with years of experience enhancing profitability goals. Resourceful team player surpassing targets for creating new business opportunities.
                 On my free time I love to fish and hike or go mountain biking. I enjoy going to the beach and lake. I love the outdoors and like to discover new restaurants whenever I travel or visit new cities or states. 
               
                </h6>
              
          </div>
          <div className="col-12 ml-md-5 ml-lg-0 pl-md-5 pl-lg-0 col-lg-5 mt-lg-5 mt-xl-3 pt-lg-5 pt-xl-0 pr-lg-0">
              <img id="artist" src={JC} alt="Artist" className="img-fluid mb-xl-5" style={styles.JC} />
          </div>
        </div>  
      </div>
    )
}

export default main
