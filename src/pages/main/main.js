import React from 'react'
import './main.css'
import JC from '../../assets/pic.PNG';


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
            DEAR CLIENTS AND FRIENDS
            </h5>
            <h5 className="text-black mb-5" style={styles.main}>
            I am excited to welcome you to DL Events, LLC !</h5>
              <h6>  DL Events is a creative team of wedding planners with a sense of style, cherishing family values and traditions, creating an indelible experience and magical moments.
We want to create a celebration that reflects your story, and visual aesthetics and the eyes of young people shining with happiness are what we call successful work.
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
