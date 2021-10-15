import React from "react";
// import "./pages/Home/assets/css/App.css";
import '../assets/css/App.css'
export const Carousel = () => {
  return (

    <section id="hero">
      <div class="container" data-aos="zoom-out" data-aos-delay="100" >
        {/*<h1 className="color-primary-green">*/}
        {/*  4th Edition Hybrid International Education <br />*/}
        {/*  Expo Onsite + Virtual*/}
        {/*</h1>*/}
        {/*<h2 class="headertwo">Back to School Ethiopia Expo, 2022</h2>*/}
        {/*<h2>Febrary 23-27/2022 @Abrehot Library</h2>*/}

        <div class="d-flex">
          {/*<h3>Do this easy thing!</h3>*/}
          <h3 href="" class="btn-get-started scrollto" style={{marginTop:'150%',marginLeft:'-40%'}}>
            <div >
              Register Now
            </div>

          </h3>
        </div>
      </div>
    </section>

  );
};
