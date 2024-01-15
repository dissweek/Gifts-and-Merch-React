import React,{useState} from "react";
import style from "./style.module.scss";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useDispatch} from "react-redux";
import { addProduct, setWindowObj } from "../../redux/slices/cartSlice";
import { useTranslation } from "react-i18next";
import { CatalogItems } from "../../redux/slices/catalogSlice";

export const WindowItem:React.FC<CatalogItems> = (i) => {
  const dispatch = useDispatch()
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeSize,setActeiveSize] = useState(0)
  const [activeColor,setActeiveColor] = useState(0)
  const [itemAdd,setItemAdd] = useState(false)
  const {t} = useTranslation()

  const buy = () =>{
    
    const item = {
      id:i.id,
      article: i.article,
      category: i.category,
      fullName: i.fullName,
      name: i.name,
      price:i.price,
      size:i.size[activeSize],
      img: i.res[activeColor].img,
      color: i.res[activeColor].color,
      count: 1
    }

    dispatch(addProduct(item))
    setItemAdd(true)
    
    // dispatch(setWindowObj(''))
  }

  const changeSize = (index:number) =>{
    setActeiveSize(index);
    setItemAdd(false)
  }
  const changeColor = (index:number) =>{
    setActeiveColor(index);
    setItemAdd(false)
  }

  return (
    <div className={style.card_blur}>
      <div className={style.card_cnt}>

        <button onClick={()=>dispatch(setWindowObj(null))} className={style.closed_window}><i className="fa-solid fa-xmark"></i></button>
        <div className={style.left_cnt}>
          <div className={style.swiper_cnt}>
            <div className={style.swiper_slide}>
              <Swiper
                style={{
                  //@ts-ignore
                  "--swiper-navigation-color": "#000",
                  "--swiper-pagination-color": "#fff",
                }}
                key={'ms2'}
                spaceBetween={10}
                navigation={true}
                loop={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
              >
                {i.res.map((obj,index) => {
                  return (
                    <SwiperSlide key={index+obj.img}>
                      <div className={style.swiper_slide}>
                        <img className={style.swiper_slide_img} src={obj.img} alt="item" />
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
            <div className={style.swiper_slide_bar}>
              <Swiper
                key={'ms'}
                //@ts-ignore
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                loop={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
              >
                {i.res.map((obj,index) => {
                  return (
                    <SwiperSlide key={obj.img+index}>
                      <div className={style.swiper_slide}>
                        <img className={style.swiper_slide_img} src={obj.img} alt="slider" />
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
          <div className={style.table_cnt}>

          </div>
        </div>
        <div className={style.right_cnt}>
          <div className={style.right_title_cnt}>
            <p className={style.right_title}>{i.fullName}</p>
          </div>
          <div className={style.right_color_cnt}>
            {i.res.map((obj,index)=>{
              return(
                <button key={index} onClick={()=>changeColor(index)} className={`catalog__card_btn ${style.right_color} ${activeColor === index && 'active'}`} style={{backgroundColor:`${obj.color}`}}></button>
              )
            })}
          </div>
          <div className={style.right_price_cnt}>
            <p className={style.right_price}>From Price: {i.price}</p>
          </div>
          <div className={style.right_text_cnt}>
            <p className={`${style.right_text} sub-text`}>{i.about}</p>
          </div>
            <div className={style.right_size_cnt}>
              <div className={style.right_size_flex}>
                <span className={`${style.right_size_span} sub-text`}>{t('cardCart.size')}</span>
                <div className={style.right_size}>
                  {i.size.map((size,index)=>{
                    return(
                      <span key={index+size} onClick={()=>changeSize(index)} className={`${style.right_size_text} ${activeSize === index && 'active'}`}>{size}</span>
                    )
                  })}
                </div>
              </div>
              <div className={style.right_btnBuy_cnt}>
                <button onClick={()=>buy()} className={style.right_btnBuy}>
                  <span>{t('popUpItem.add')}</span>
                </button>
              </div>

            </div>
            <div className={style.right_params_cnt}>
              <p className={`style.right_params_par ${style.right_size_span} sub-text`}>{t('popUpItem.params')} <i className="fa-solid fa-chevron-up"></i></p>
              <div className={style.right_params}>
                {i.parametr.map((obj,index)=>{
                  return(
                    <div key={index+obj.value} className={style.right_params_text_cnt}>
                      <p className={`${style.right_params_text} sub-text`}>{obj.name}</p>
                      <p className={`${style.right_params_text} sub-text`}>{obj.value}</p>
                    </div>
                  )
                })}
              </div>
          </div>
        </div>
        {itemAdd && <div className={style.itemAdd_cnt}>
          <Link to={'/cart'} onClick={()=>dispatch(setWindowObj(null))} className={style.itemAdd_link}>{t('popUpItem.itemAdd')} <br /> {t('popUpItem.toCart')} <i className="fa-solid fa-arrow-right"></i></Link>        
        </div>}
      </div>
    </div>
  );
}