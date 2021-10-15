import React from "react";
import secondposterimage from "../assets/images/noosphere.jpg";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";

export const SecondPoster = () => {
  return (
    <section id="about" class="about section-bg">
      <Card style={{padding:'20px'}}><CardContent>
        <div style={{display: 'flex', flexDirection: 'row', width: '100%', marginLeft: '10%'}}>

          <div style={{marginTop: '0%'}}>
            <img src={secondposterimage} width="300px" height="300px"/>
          </div>
          <div style={{marginTop:'6%',marginLeft:'20%'}}>

              <h3 style={{marginTop: '3%',fontSize:'20px'}}>
                Enjoy Splendid Benefits of Our Hybrid fair,
              </h3>
            <span style={{fontSize:'22px',marginBottom:'5%'}}>Onsite & Virtual Fair!</span>
            <h4 style={{marginTop:'3%',fontSize:'18px',display:'flex',justifyContent:'center',maxWidth:'30%'}}>
              Foster Global Participation, Minimal Cost Maximum Gain, Delightful
              user Experience, Infinite Convenience, Measurable Results, Easy for
              Decision Making, It shows company care, Unlimited Availability, 24/7,
              100% Data Confidentiality
            </h4>

          </div>
        </div>
      </CardContent></Card>

    </section>
  );
};
