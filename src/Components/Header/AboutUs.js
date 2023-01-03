import React from "react";

const AboutUs = () => {

  return (
      <div className="container-scroller">
        <div className="content-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="card" data-aos="fade-up">
                  <div className="card-body">
                    <div className="aboutus-wrapper">
                      <h1 className="mt-5">
                        About Us
                      </h1>
                       <img
                        src="../assets/images/newspaper-banner.jpeg"
                        alt="banner"
                        className="img-fluid mb-5"
                      />
                      <p className="font-weight-600 fs-15 " style={{ justifyContent: 'center'}}>
                        LVNC is abbreviation of lok vishvas news channer that provides daily basis latest news and weekly blogs and articles.
                        Lokvishwas News channel is a free-to-air Indian right-wing English-language news channel launched in May 2022.
                        It was co-founded by Chandrakant Kshirsagar before the latter relinquished his stake in May 2022,
                        leaving Chandrakant as the majority stakeholder.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default AboutUs;