
import React, { useEffect,useState,useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getShopItem, setCategory, setSearch } from "../../redux/slices/catalogSlice";
import CardCatalog from "../CardCatalog/CardCatalog";
import Skeleton from "./Skeleton";
import i18 from "../../utilites/i18next";

function SectionCatalog(){
    const filterList = [
      {
        name_ru: "Все товары",
        name_en: "All Goods",
        category: "",
       },
      {
        name_ru: "Толстовки",
        name_en: "Hoodie",
        category: "hoodie",
       },
      {
        name_ru: "Свитшот",
        name_en: "Sweatshot",
        category: "sweatshot",
       },
      {
        name_ru: "Футболки",
        name_en: "T-shirt",
        category: "t-shirt",
       },
      {
        name_ru: "Поло",
        name_en: "Polo",
        category: "polo",
       },
      {
        name_ru: "Жилетки",
        name_en: "Vest",
        category: "vest",
       },
      {
        name_ru: "Рюкзак",
        name_en: "Backpack",
        category: "backpack",
       },
      {
        name_ru: "Бананки",
        name_en: "Banana-Pack",
        category: "bnp",
       },
      {
        name_ru: "сумки/Шопперы",
        name_en: "Shopper",
        category: "shopper",
       },
      {
        name_ru: "Пледа",
        name_en: "Plaid",
        category: "plaid",
       },
      {
        name_ru: "Носки",
        name_en: "Socks",
        category: "socks",
       },
      {
        name_ru: "Маски",
        name_en: "Mask",
        category: "mask",
       },
    ];
    const {items,status,category,search} = useSelector((state)=>state.catalog)
    const [activeCategory,setActeiveCategory] = useState(0)
    const dispatch = useDispatch()
    
    // const getItem = (async () =>{
    //   dispatch(getShopItem({category,search}))
    // })

    // useEffect(()=>{ 
    //   getItem();
    // },[category])

    const getItem = useCallback(async () =>{
      dispatch(getShopItem({category,search}))
    }, [category, search,dispatch])
  
    useEffect(()=>{ 
      getItem();
    },[category, getItem])

    const menuClick = (i,index) =>{
      dispatch(setCategory(i.category))
      setActeiveCategory(index)
      !i.category && dispatch(setSearch(''))
    }

    return (
      <>
        <div className="background-space"></div>
        <section className="catalog">
          <div className="catalog_wrapper wrapper">
            <div className="catalog__filter_container">
              {filterList.map((i, index) => {
                return (
                  <div key={index} onClick={()=>menuClick(i,index)} className={`catalog__filter ${activeCategory === index && 'active'}`}>
                    <span className="catalog__filter_text">{i18.language === "ru" ? i.name_ru : i.name_en}</span>
                  </div>
                );
              })}
            </div>
            <div className="catalog__card_container">
              {status === "loading"
                ? [...new Array(12)].map((i, index) => <Skeleton key={index} />)
                : items.map((item, index) => {
                  return <CardCatalog key={item.id} i={item} />;
                })}
                {status === 'error' && 'Ууупс... Что-то пошло не так.Мы уже увольняем ответственного за это. Попробуй повторить запрос позже'}
            </div>
          </div>
        </section>
      </>
    );
}

export default SectionCatalog