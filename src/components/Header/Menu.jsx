import React, { useState } from "react";

function Menu (props){
    const [extramenu,setExtramenu]=useState(false)
    // console.log(props.submenu)
    return(
        <li className={`header__item ${extramenu? 'active' : ''}`} onMouseOver={(()=>{setExtramenu(true)})} onMouseOut={(()=>{setExtramenu(false)})}><a href={props.link} className={`header__item-span ${extramenu? 'active' : ''}`}>{props.name}</a>
        {props.submenu &&
            <div className={`header__item_menu ${extramenu? 'active' : ''}`}>
                <ul>
                    {props.submenu.map((i,index)=>{
                        return(
                            <li className="header__item_menu-item">
                                <div className="header__item_menu-cnt">
                                    <a href={i.link} className="header__item_menu-list ">{i.name}</a>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        }
        </li>
    )
}

export default Menu