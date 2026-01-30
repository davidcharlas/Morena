import React from "react";
import { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { IoCloseOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";



export default function NavBar() {
    const [visible, setVisible] = useState(false)
    return (
        <div className="navbar">
            <div className="logo"><img id="logo-img" src="/logo.png" alt="logo" srcset="/logo.png" /></div>

            <div className="nav-links">
                <ul>
                    <li className="nav-li"><a className="nav-a" href="#"><span className="nav-span">Home</span></a></li>
                    <li className="nav-li"><a className="nav-a" href="#"><span className="nav-span">Posts</span></a><MdOutlineKeyboardArrowDown color="white" marg />
                        <ul className="dropdown">
                            <li className="dropdown-item"><a className="dropdown-item-a" href="#">Default</a></li>
                            <li className="dropdown-item"><a className="dropdown-item-a" href="#">No Sidebar</a></li>
                            <li className="dropdown-item"><a className="dropdown-item-a" href="#">Sidebar Left</a></li>
                            <li className="dropdown-item"><a className="dropdown-item-a" href="#">Hero Image</a></li>
                        </ul>
                    </li>
                    <li className="nav-li"><a className="nav-a" href="#"><span className="nav-span">Policy</span></a></li>
                    <li className="nav-li"><a className="nav-a" href="#"><span className="nav-span">Features</span></a><MdOutlineKeyboardArrowDown color="white" />
                        <ul className="dropdown">
                            <li className="dropdown-item"><a className="dropdown-item-a" href="#">Submenu1</a></li>
                            <li className="dropdown-item"><a className="dropdown-item-a" href="#">Submenu2</a></li>
                            <li className="dropdown-item"><a className="dropdown-item-a" href="#">Submenu3</a></li>
                            <li className="dropdown-item"><a className="dropdown-item-a" href="#">Submenu4</a></li>
                        </ul>
                    </li>
                    <li className="nav-li"><a className="nav-a" href="#"><span className="nav-span">Megamenu</span></a><MdOutlineKeyboardArrowDown color="white" />
                        <ul className="menu-dropdown">
                            <li className="menu-dropdown-li">
                                <div className="menu-card">
                                    <img src="/imgs/1.jpg" alt="dog-img" srcset="" />
                                    <div className="menu-card-meta"><span>friends</span> January 26, 2026</div>
                                    <h4>Disney Announces Plans for Theme Park on the Moon</h4>
                                </div>
                            </li>
                            <li className="menu-dropdown-li">
                                <div className="menu-card">
                                    <img src="/imgs/2.jpg" alt="dog-img" srcset="" />
                                    <div className="menu-card-meta"><span>friends</span> January 26, 2026</div>
                                    <h4>Disney Announces Plans for Theme Park on the Moon</h4>
                                </div>
                            </li>
                            <li className="menu-dropdown-li">
                                <div className="menu-card">
                                    <img src="/imgs/3.jpg" alt="dog-img" srcset="" />
                                    <div className="menu-card-meta"><span>friends</span> January 26, 2026</div>
                                    <h4>Disney Announces Plans for Theme Park on the Moon</h4>
                                </div>
                            </li>
                            <li className="menu-dropdown-li">
                                <div className="menu-card">
                                    <img src="/imgs/4.jpg" alt="dog-img" srcset="" />
                                    <div className="menu-card-meta"><span>friends</span> January 26, 2026</div>
                                    <h4>Disney Announces Plans for Theme Park on the Moon</h4>
                                </div>
                            </li>
                            <li className="menu-dropdown-li">
                                <div className="menu-card">
                                    <img src="/imgs/5.jpg" alt="dog-img" srcset="" />
                                    <div className="menu-card-meta"><span>friends</span> January 26, 2026</div>
                                    <h4>Disney Announces Plans for Theme Park on the Moon</h4>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-li"><a className="nav-a" href="#"><span className="nav-span">Contact</span></a></li>
                    <li className="nav-li"><a className="nav-a" href="#"><span className="nav-span">Blog</span></a></li>
                </ul>
            </div>
            <div
                className="search"
                onClick={() => setVisible(prev => !prev)}
            >
                {visible
                    ? <IoCloseOutline color="white" size={20} />
                    : <BsSearch color="white" size={16} />
                }

            </div>
            {visible && <div className="search-bar">
                <input type="text" name="search" id="" placeholder="Search" />
                <button type="submit"><IoSearch color="white" size={20}/></button>
            </div>}

        </div>

    )
}