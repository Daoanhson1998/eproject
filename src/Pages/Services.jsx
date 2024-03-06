import React from 'react';
import Menu from '../Components/Menu';

function Services() {
  return (
    <div>
      <div>
        {/* Navbar & Hero Start */}
        <div className="container-fluid position-relative p-0">
          <Menu />
          <div className="container-fluid bg-primary py-5 mb-5 hero-header">
            <div className="container py-5">
              <div className="row justify-content-center py-5">
                <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
                  <h1 className="display-3 text-white animated slideInDown">
                    Services
                  </h1>
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb justify-content-center">
                      <li className="breadcrumb-item">
                        <a href="/">Home</a>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="#">Pages</a>
                      </li>
                      <li
                        className="breadcrumb-item text-white active"
                        aria-current="page"
                      >
                        Services
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Navbar & Hero End */}

        {/* Service Start */}
        <div className="container-xxl py-5">
          <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
              <h6 className="section-title bg-white text-center text-primary px-3">
                Services
              </h6>
              <h1 className="mb-5">Our Services</h1>
            </div>
            <div className="row g-4">
              <div
                className="col-lg-3 col-sm-6 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="service-item rounded pt-3">
                  <div className="p-4">
                    <i className="fa fa-3x fa-globe text-primary mb-4" />
                    <h5>WorldWide Tours</h5>
                    <p>
                      We have tours available worldwide for you to choose from
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-sm-6 wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="service-item rounded pt-3">
                  <div className="p-4">
                    <i className="fa fa-3x fa-hotel text-primary mb-4" />
                    <h5>Hotel Reservation</h5>
                    <p>
                      Full-service hotel booking service catering to customers' needs                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-sm-6 wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <div className="service-item rounded pt-3">
                  <div className="p-4">
                    <i className="fa fa-3x fa-user text-primary mb-4" />
                    <h5>Travel Guides</h5>
                    <p>
                      Our highly professional tour guides will ensure your satisfaction
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-sm-6 wow fadeInUp"
                data-wow-delay="0.7s"
              >
                <div className="service-item rounded pt-3">
                  <div className="p-4">
                    <i className="fa fa-3x fa-cog text-primary mb-4" />
                    <h5>Event Management</h5>
                    <p>
                      We offer highly professional event planning services tailored to your needs
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-sm-6 wow fadeInUp"
                data-wow-delay="0.1s"
              >

              </div>
            </div>
          </div>
        </div>
        {/* Service End */}
        {/* Testimonial Start */}
        <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
          <div className="container">
            <div className="text-center">
              <h6 className="section-title bg-white text-center text-primary px-3">
                Testimonial
              </h6>
              <h1 className="mb-5">Our Clients Say!!!</h1>
            </div>
            <div className="owl-carousel testimonial-carousel position-relative">
              <div className="item bg-white text-center border p-4">
                <img
                  className="bg-white rounded-circle shadow p-1 mx-auto mb-3"
                  src="img/testimonial-1.jpg"
                  alt=""
                  style={{ width: 80, height: 80 }}
                />
                <h5 className="mb-0">John Doe</h5>
                <p>New York, USA</p>
                <p className="mb-0">
                  I had an amazing experience traveling in Vietnam. The food in Vietnam is delicious and affordable, it's truly fantastic.
                </p>
              </div>
              <div className="item bg-white text-center border p-4">
                <img
                  className="bg-white rounded-circle shadow p-1 mx-auto mb-3"
                  src="img/testimonial-2.jpg"
                  alt=""
                  style={{ width: 80, height: 80 }}
                />
                <h5 className="mb-0">Luis Dade</h5>
                <p>London, England</p>
                <p className="mt-2 mb-0">
                  My feedback on traveling to Thailand is that it was an incredible experience filled with stunning landscapes, rich culture, and warm hospitality.
                </p>
              </div>
              <div className="item bg-white text-center border p-4">
                <img
                  className="bg-white rounded-circle shadow p-1 mx-auto mb-3"
                  src="img/testimonial-3.jpg"
                  alt=""
                  style={{ width: 80, height: 80 }}
                />
                <h5 className="mb-0">David Luis</h5>
                <p>California, USA</p>
                <p className="mt-2 mb-0">
                  My feedback on traveling to Malaysia is that it was a captivating journey, immersing me in its diverse culture, breathtaking natural beauty, and mouthwatering cuisine.
                </p>
              </div>
              <div className="item bg-white text-center border p-4">
                <img
                  className="bg-white rounded-circle shadow p-1 mx-auto mb-3"
                  src="img/testimonial-4.jpg"
                  alt=""
                  style={{ width: 80, height: 80 }}
                />
                <h5 className="mb-0">Maria</h5>
                <p>Hanoi, Vietnam</p>
                <p className="mt-2 mb-0">
                  Visiting Vietnam was an amazing experience! The country's breathtaking landscapes, vibrant culture, and delicious cuisine made it a truly unforgettable trip.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Testimonial End */}
      </div>
    </div>
  );
}

export default Services;
