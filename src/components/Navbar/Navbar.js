import React from "react";
import style from './Navbar.module.css';
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={style.nav}>
      <ul>
        <li className={style.item}><NavLink to="profile" className={(navData) => navData.isActive ? `${style.active}` : "" }>Profile</NavLink></li>
        <li className={style.item}><NavLink to="messages" className={(navData) => navData.isActive ? `${style.active}` : "" }>Messages</NavLink></li>
        <li className={style.item}><NavLink to="news" className={(navData) => navData.isActive ? `${style.active}` : "" }>News</NavLink></li>
        <li className={style.item}><NavLink to="music" className={(navData) => navData.isActive ? `${style.active}` : "" }>Music</NavLink></li>
        <li className={style.item}><NavLink to="settings" className={(navData) => navData.isActive ? `${style.active}` : "" }>Setings</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;