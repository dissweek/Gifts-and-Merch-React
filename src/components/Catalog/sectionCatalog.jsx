
import React, { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getShopItem, setCategory, setSearch } from "../../redux/slices/catalogSlice";
import CardCatalog from "../CardCatalog/CardCatalog";
import Skeleton from "./Skeleton";



function SectionCatalog(){
    const filterList = [
      { name: "Все товары", category: "" },
      { name: "Толстовки", category: "hoodie" },
      { name: "Свитшот", category: "sweatshot" },
      { name: "Футболки", category: "t-shirt" },
      { name: "Поло", category: "polo" },
      { name: "Жилетки", category: "vest" },
      { name: "Рюкзак", category: "backpack" },
      { name: "Бананки", category: "bnp" },
      { name: "сумки/Шопперы", category: "shopper" },
      { name: "Пледа", category: "plaid" },
      { name: "Носки", category: "socks" },
      { name: "Маски", category: "mask" },
    ];
    const {items,status,category,search} = useSelector((state)=>state.catalog)
    const [activeCategory,setActeiveCategory] = useState(0)
    const dispatch = useDispatch()

    const getItem = async () =>{
      dispatch(getShopItem({category,search}))
    }

    useEffect(()=>{ 
        getItem();
    },[category])

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
                    <span className="catalog__filter_text">{i.name}</span>
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