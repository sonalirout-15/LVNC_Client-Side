import React from "react";

const AboutUs = () => {

  return (
    <>
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
                      <p className="font-weight-600 fs-15 " style={{ justifyContent: 'center'}}>
                        Lokvishwas News channel is a free-to-air Indian right-wing English-language news channel launched in May 2022.
                        It was co-founded by Chandrakant Kshirsagar before the latter relinquished his stake in May 2022,
                        leaving Chandrakant as the majority stakeholder.
                      </p>
                      <p className="font-weight-600 fs-15 mb-5 mt-4">
                        Lokvishwas News has been accused of practicing biased reporting in favour of the ruling BJP and stifling dissent;
                        fake news and Islamophobic rhetoric were published on multiple occasions. It has been convicted of breaching Telecom
                        Regulatory Authority of India and News Broadcasting Standards Authority rules. Lokvishwas news channel is being
                        investigated by the Mumbai Police after being accused of manipulating the viewership ratings.
                        The inflated TRP was allegedly used to bargain higher revenues from advertisers.
                      </p>
                      {/* <img
                        src="../assets/images/about/about.jpg"
                        alt="banner"
                        className="img-fluid mb-5"
                      /> */}
                      <h4>Lunch</h4>
                      <p className="font-weight-600 fs-15 text-center">
                        The channel was launched on 2022 as a free-to-air channel through most direct-to-home
                        television in India and cable television operators, Reporting on its launch, Business Standard wrote
                        "The company has already hired 300 people, of whom 215 are on board. A state-of-the-art-studio is being
                        built in Surat.
                      </p>
                      {/* <p className="font-weight-600 fs-15 mb-5 mt-4 text-center">
                        He has led a remarkable campaign, defying the traditional
                        mainstream parties courtesy of his En Marche! movement.
                        For many, however, the campaign has become less about
                        backing Macron and instead about voting against Le Pen,
                        the National Front candidate.
                      </p> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutUs;