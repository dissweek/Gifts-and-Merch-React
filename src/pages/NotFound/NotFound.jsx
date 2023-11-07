import React from "react";
import style from './style.module.scss'
import { Link } from "react-router-dom";

function NotFound(){
    return(
        <div className={style.notFound_cnt}>
            <div className="wrapper">
                <div className={style.notFound_title_cnt}>
                    <p className={style.notFound_title}>404...</p>
                    <p className={style.notFound_title_sub}>this  page  not  found</p>
                </div>
                <div className={style.notFound_link}>
                    <Link to={'/'}>BACK TO MAIN PAGE</Link>
                </div>
            </div>
        </div>
    )
}

export default NotFound