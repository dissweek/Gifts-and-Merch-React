import React from "react";
import item1 from "../../assets/img/popular-item.jpg";
import item2 from "../../assets/img/popular-item2.jpg";
import item3 from "../../assets/img/popular-item3.jpg";
import item4 from "../../assets/img/popular-item4.jpg";
import shopperImg from "../../assets/img/Header-shopper.png";

function Popular() {
  return (
    <>
      <section className="popular">
        <div className="popular__container wrapper">
          <div className="popular__nav-container">
            <div className="popular__nav_text-container">
              <h4 className="popular__nav-title">
                Самое популярное{" "}
                <i className="fa-solid fa-star popular__nav-title_icon cl-green"></i>
              </h4>
              <p className="popular__nav-subtext sub-text">
                Товары, которые наиболее часто заказывают наши клиенты
              </p>
            </div>
            <a href="./pages/catalog/index.html" className="popular__nav_link">
              Все товары <i className="fa fa-light fa-arrow-right-long"></i>
            </a>
          </div>
          <div className="popular__images_grid-container">
            <div className="popular__images_container popular__images_1">
              <img
                src={item1}
                alt=""
                className="popular__images_img"
              />
            </div>
            <div className="popular__images_container popular__images_2">
              <img
                src={item2}
                alt=""
                className="popular__images_img"
              />
            </div>
            <div className="popular__images_container popular__images_3">
              <img
                src={item3}
                alt=""
                className="popular__images_img"
              />
            </div>
            <div className="popular__images_container popular__images_4">
              <img
                src={item4}
                alt=""
                className="popular__images_img"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Popular;
