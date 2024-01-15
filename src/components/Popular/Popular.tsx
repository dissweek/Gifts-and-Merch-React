import React from "react";
import item1 from "../../assets/img/popular-item.jpg";
import item2 from "../../assets/img/popular-item2.jpg";
import item3 from "../../assets/img/popular-item3.jpg";
import item4 from "../../assets/img/popular-item4.jpg";
import { Link } from "react-router-dom";
import { setCategory } from "../../redux/slices/catalogSlice";
import { useTranslation } from "react-i18next";
import { useAppDispatch } from "../../hooks/hooks";

export const Popular: React.FC = () => {
  const dispatch = useAppDispatch()
  const {t} = useTranslation()

  return (
    <>
      <section className="popular">
        <div className="popular__container wrapper">
          <div className="popular__nav-container">
            <div className="popular__nav_text-container">
              <h4 className="popular__nav-title">
                {t('popular.title')}{" "}
                <i className="fa-solid fa-star popular__nav-title_icon cl-green"></i>
              </h4>
              <p className="popular__nav-subtext sub-text">
                {t('popular.subText')}
              </p>
            </div>
            <Link to={'/catalog'} className="popular__nav_link">
            {t('popular.link')} <i className="fa fa-light fa-arrow-right-long"></i>
            </Link>
          </div>
          <div className="popular__images_grid-container">
            <div className="popular__images_container popular__images_1">
              <Link to={'/catalog'} onClick={()=>dispatch(setCategory('shopper'))}>
                <img
                  src={item1}
                  alt=""
                  className="popular__images_img"
                />
              </Link>
            </div>
            <div className="popular__images_container popular__images_2">
              <Link to={'/catalog'} onClick={()=>dispatch(setCategory(''))}>
                <img
                  src={item2}
                  alt=""
                  className="popular__images_img"
                />
              </Link>
            </div>
            <div className="popular__images_container popular__images_3">
              <Link to={'/catalog'} onClick={()=>dispatch(setCategory('shopper'))}>
                <img
                  src={item3}
                  alt=""
                  className="popular__images_img"
                />
              </Link>
            </div>
            <div className="popular__images_container popular__images_4">
              <Link to={'/catalog'} onClick={()=>dispatch(setCategory('t-shirt'))}>
                <img
                  src={item4}
                  alt=""
                  className="popular__images_img"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}