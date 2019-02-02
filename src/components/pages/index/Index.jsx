import React, { Fragment } from "react";
import Layout from "../../public/Layout";
import Slider from 'react-slick';

const sliderOprions = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

const Index = ({ page, user, setUser }) => {
  return (
    <Fragment>
      <Layout user={user} setUser={setUser}>
        <div className="content">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="content__main">
                  <div className="content__slider saleSlider">
                  <Slider {...sliderOprions} >
                    <div className="saleSlider__item">
                      <img
                        src="http://localhost:3000/img/sale.jpg"
                        alt=""
                        className="saleSlider__itemImg"
                      />
                    </div>
                    <div className="saleSlider__item">
                      <img
                        src="http://localhost:3000/img/sale2.jpg"
                        alt=""
                        className="saleSlider__itemImg"
                      />
                    </div>
                    <div className="saleSlider__item">
                      <img
                        src="http://localhost:3000/img/sale3.jpg"
                        alt=""
                        className="saleSlider__itemImg"
                      />
                    </div>
                    </Slider>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </Fragment>
  );
};

export default Index;