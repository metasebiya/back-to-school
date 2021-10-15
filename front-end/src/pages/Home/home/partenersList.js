import React from "react";
import noospherelogo from "../assets/images/noospherelogo.png";
import aviationAcademylogo from "../assets/images/aviationAcademyLogo.png";
import intellectualSchoolLogo from "../assets/images/intellectualSchoolLogo.png";
export const PartenersList = () => {
  return (
    <div style={{marginTop:'10%'}} >
      {/*  <div style={{display: 'flex', flexWrap: 'wrap', flexDirection: 'row',marginLeft:'10%'}}>*/}
      {/*                <div style={{width:'30%'}}>*/}
      {/*                          <div >*/}
      {/*                            <img src={noospherelogo} style={{width:'30%'}}/>*/}
      {/*                          </div>*/}
      {/*                          <span className="partenersName">*/}
      {/*                            <p>Founder/Organizer</p>*/}
      {/*                          </span>*/}
      {/*                </div>*/}


      {/*                <div style={{width:'30%'}}>*/}
      {/*                      <div >*/}
      {/*                        <img src={aviationAcademylogo} style={{width:'30%'}}/>*/}
      {/*                      </div>*/}
      {/*                      <span className="partenersName">*/}
      {/*                        <p>Exclusive Official Partner</p>*/}
      {/*                      </span>*/}
      {/*                </div>*/}

      {/*      <div style={{width:'30%'}}>*/}
      {/*                      <div>*/}
      {/*                        <img src={intellectualSchoolLogo} style={{width:'30%'}} />*/}
      {/*                      </div>*/}
      {/*                      <span className="partenersName">*/}
      {/*                        <p>Education Partner</p>*/}
      {/*                      </span>*/}
      {/*                </div>*/}


      {/*</div>*/}
      <div
        className="collaboration container-fluid align-items-start justify-content-start"
        data-aos="fade-up">
        <h2 style={{marginLeft:'40%',margin:'3%',fontSize:'20px'}}>In Collabration With </h2>
        <div className="container">
          <ul className="col align-items-start justify-content-start">
            <li className="d-flex align-items-center justify-content-center">
              <i class="bi bi-star"></i>
              <div>
                <h5>FDRE Ministry of Technology & Innovation </h5>
              </div>
            </li>
            <li className="d-flex align-items-center justify-content-center">
              <i class="bi bi-star"></i>
              <div>
                <h5>Ministry of Science & Higher Education </h5>
              </div>
            </li>
            <li className="d-flex align-items-center justify-content-center">
              <i class="bi bi-star"></i>
              <div>
                <h5>FDRE Office of the Prime Minster </h5>
              </div>
            </li>
            <li
              id="parteneritems"
              className="d-flex align-items-center justify-content-center"
            >
              <i class="bi bi-star"></i>

              <div>
                <h5>FDRE Ministry of Education</h5>
              </div>
            </li>

            <li className="d-flex align-items-center justify-content-center">
              <i class="bi bi-star"></i>

              <div>
                <h5>Abrehot Library </h5>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
