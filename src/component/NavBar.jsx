import { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { HiOutlineMenu } from "react-icons/hi";
import { IoCloseOutline, IoSearch } from "react-icons/io5";

export default function NavBar() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);

  return (
    <div className="container-fluid navbar-bg p-0">
      <div className="container navbar d-flex align-items-center justify-content-between flex-wrap">

        
        {!menuVisible && (
          <div className="logo">
            <img id="logo-img" src="/logo.png" alt="logo" />
          </div>
        )}

        {!menuVisible && (
          <div
            className="hamburger d-lg-none"
            onClick={() => setMenuVisible(true)}
            style={{ cursor: "pointer" }}
          >
            <HiOutlineMenu color="white" size={24} />
          </div>
        )}

        {menuVisible && (
          <div className="small-screen-menu d-flex flex-column position-fixed top-0 start-0 w-100 h-100 bg-dark text-white p-4" style={{ zIndex: 999 }}>
            
            <div className="d-flex justify-content-between align-items-center mb-4">
              <div className="logo">
                <img id="logo-img" src="/logo.png" alt="logo" style={{ maxHeight: '40px' }} />
              </div>
              <IoCloseOutline size={32} onClick={() => setMenuVisible(false)} style={{ cursor: "pointer" }} />
            </div>

            <ul className="nav-links flex-column list-unstyled">
              <li className="nav-li mb-3">
                <a className="nav-a text-white text-decoration-none fs-5" href="#">Home</a>
              </li>
              <li className="nav-li mb-3">
                <a className="nav-a text-white text-decoration-none fs-5 d-flex align-items-center" href="#">
                  Posts <MdOutlineKeyboardArrowDown className="ms-1" />
                </a>
                <ul className="dropdown list-unstyled ps-3 mt-2">
                  <li className="dropdown-item mb-2"><a className="text-white-50 text-decoration-none" href="#">Default</a></li>
                  <li className="dropdown-item mb-2"><a className="text-white-50 text-decoration-none" href="#">No Sidebar</a></li>
                  <li className="dropdown-item mb-2"><a className="text-white-50 text-decoration-none" href="#">Sidebar Left</a></li>
                  <li className="dropdown-item mb-2"><a className="text-white-50 text-decoration-none" href="#">Hero Image</a></li>
                </ul>
              </li>
              <li className="nav-li mb-3">
                <a className="nav-a text-white text-decoration-none fs-5" href="#">Policy</a>
              </li>
              <li className="nav-li mb-3">
                <a className="nav-a text-white text-decoration-none fs-5 d-flex align-items-center" href="#">
                  Features <MdOutlineKeyboardArrowDown className="ms-1" />
                </a>
                <ul className="dropdown list-unstyled ps-3 mt-2">
                  <li className="dropdown-item mb-2"><a className="text-white-50 text-decoration-none" href="#">Submenu1</a></li>
                  <li className="dropdown-item mb-2"><a className="text-white-50 text-decoration-none" href="#">Submenu2</a></li>
                  <li className="dropdown-item mb-2"><a className="text-white-50 text-decoration-none" href="#">Submenu3</a></li>
                  <li className="dropdown-item mb-2"><a className="text-white-50 text-decoration-none" href="#">Submenu4</a></li>
                </ul>
              </li>
              <li className="nav-li mb-3">
                <a className="nav-a text-white text-decoration-none fs-5" href="#">Megamenu</a>
              </li>
              <li className="nav-li mb-3">
                <a className="nav-a text-white text-decoration-none fs-5" href="#">Contact</a>
              </li>
              <li className="nav-li mb-3">
                <a className="nav-a text-white text-decoration-none fs-5" href="#">Blog</a>
              </li>
            </ul>

            <div className="search-bar mt-auto">
              <div className="d-flex">
                <input 
                  type="text" 
                  className="form-control me-2" 
                  placeholder="Search" 
                  style={{ 
                    backgroundColor: 'white',
                    border: 'none',
                    borderRadius: '4px'
                  }}
                />
                <button 
                  className="btn" 
                  style={{
                    backgroundColor: '#ff6b7a',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    minWidth: '50px'
                  }}
                >
                  <IoSearch size={20} />
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="d-none d-lg-flex align-items-center w-100 justify-content-between">
          <ul className="nav-links d-flex flex-row mb-0 list-unstyled">
            <li className="nav-li me-3">
              <a className="nav-a text-white text-decoration-none" href="#">Home</a>
            </li>
            <li className="nav-li me-3">
              <a className="nav-a text-white text-decoration-none d-flex align-items-center" href="#">
                Posts <MdOutlineKeyboardArrowDown className="ms-1" />
              </a>
              <ul className="dropdown position-absolute bg-white mt-2 list-unstyled shadow">
                <li className="dropdown-item p-2"><a className="text-dark text-decoration-none" href="#">Default</a></li>
                <li className="dropdown-item p-2"><a className="text-dark text-decoration-none" href="#">No Sidebar</a></li>
                <li className="dropdown-item p-2"><a className="text-dark text-decoration-none" href="#">Sidebar Left</a></li>
                <li className="dropdown-item p-2"><a className="text-dark text-decoration-none" href="#">Hero Image</a></li>
              </ul>
            </li>
            <li className="nav-li me-3">
              <a className="nav-a text-white text-decoration-none" href="#">Policy</a>
            </li>
            <li className="nav-li me-3">
              <a className="nav-a text-white text-decoration-none d-flex align-items-center" href="#">
                Features <MdOutlineKeyboardArrowDown className="ms-1" />
              </a>
              <ul className="dropdown position-absolute bg-white mt-2 list-unstyled shadow">
                <li className="dropdown-item p-2"><a className="text-dark text-decoration-none" href="#">Submenu1</a></li>
                <li className="dropdown-item p-2"><a className="text-dark text-decoration-none" href="#">Submenu2</a></li>
                <li className="dropdown-item p-2"><a className="text-dark text-decoration-none" href="#">Submenu3</a></li>
                <li className="dropdown-item p-2"><a className="text-dark text-decoration-none" href="#">Submenu4</a></li>
              </ul>
            </li>
            <li className="nav-li me-3">
              <a className="nav-a text-white text-decoration-none" href="#">Contact</a>
            </li>
          </ul>

          <div
            className="search ms-3"
            onClick={() => setSearchVisible(prev => !prev)}
            style={{ cursor: "pointer" }}
          >
            {searchVisible ? <IoCloseOutline color="white" size={20} /> : <IoSearch color="white" size={20} />}
          </div>

          {searchVisible && (
            <div className="search-bar d-flex ms-3">
              <input type="text" className="form-control me-2" placeholder="Search" />
              <button className="btn btn-outline-light">
                <IoSearch size={20} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// import React from "react";
// import { useState } from "react";
// import { MdOutlineKeyboardArrowDown } from "react-icons/md";
// import { BsSearch } from "react-icons/bs";
// import { IoCloseOutline } from "react-icons/io5";
// import { IoSearch } from "react-icons/io5";



// export default function NavBar() {
//     const [visible, setVisible] = useState(false)
//     return (
//         <div className="container-fluid navbar-bg p-0">
//             <div className="container navbar">
//                 <div className="logo"><img id="logo-img" src="/logo.png" alt="logo" srcSet="/logo.png" /></div>

//                 <div className="nav-links">
//                     <ul>
//                         <li className="nav-li"><a className="nav-a" href="#"><span className="nav-span">Home</span></a></li>
//                         <li className="nav-li"><a className="nav-a" href="#"><span className="nav-span">Posts</span></a><MdOutlineKeyboardArrowDown color="white" marg />
//                             <ul className="dropdown">
//                                 <li className="dropdown-item"><a className="dropdown-item-a" href="#">Default</a></li>
//                                 <li className="dropdown-item"><a className="dropdown-item-a" href="#">No Sidebar</a></li>
//                                 <li className="dropdown-item"><a className="dropdown-item-a" href="#">Sidebar Left</a></li>
//                                 <li className="dropdown-item"><a className="dropdown-item-a" href="#">Hero Image</a></li>
//                             </ul>
//                         </li>
//                         <li className="nav-li"><a className="nav-a" href="#"><span className="nav-span">Policy</span></a></li>
//                         <li className="nav-li"><a className="nav-a" href="#"><span className="nav-span">Features</span></a><MdOutlineKeyboardArrowDown color="white" />
//                             <ul className="dropdown">
//                                 <li className="dropdown-item"><a className="dropdown-item-a" href="#">Submenu1</a></li>
//                                 <li className="dropdown-item"><a className="dropdown-item-a" href="#">Submenu2</a></li>
//                                 <li className="dropdown-item"><a className="dropdown-item-a" href="#">Submenu3</a></li>
//                                 <li className="dropdown-item"><a className="dropdown-item-a" href="#">Submenu4</a></li>
//                             </ul>
//                         </li>
//                         <li className="nav-li"><a className="nav-a" href="#"><span className="nav-span">Megamenu</span></a><MdOutlineKeyboardArrowDown color="white" />
//                             <ul className="menu-dropdown">
//                                 <li className="menu-dropdown-li">
//                                     <div className="menu-card">
//                                         <img src="/imgs/1.jpg" alt="dog-img" srcSet="" />
//                                         <div className="menu-card-meta"><span>friends</span> January 26, 2026</div>
//                                         <h4>Disney Announces Plans for Theme Park on the Moon</h4>
//                                     </div>
//                                 </li>
//                                 <li className="menu-dropdown-li">
//                                     <div className="menu-card">
//                                         <img src="/imgs/2.jpg" alt="dog-img" srcSet="" />
//                                         <div className="menu-card-meta"><span>friends</span> January 26, 2026</div>
//                                         <h4>Disney Announces Plans for Theme Park on the Moon</h4>
//                                     </div>
//                                 </li>
//                                 <li className="menu-dropdown-li">
//                                     <div className="menu-card">
//                                         <img src="/imgs/3.jpg" alt="dog-img" srcSet="" />
//                                         <div className="menu-card-meta"><span>friends</span> January 26, 2026</div>
//                                         <h4>Disney Announces Plans for Theme Park on the Moon</h4>
//                                     </div>
//                                 </li>
//                                 <li className="menu-dropdown-li">
//                                     <div className="menu-card">
//                                         <img src="/imgs/4.jpg" alt="dog-img" srcSet="" />
//                                         <div className="menu-card-meta"><span>friends</span> January 26, 2026</div>
//                                         <h4>Disney Announces Plans for Theme Park on the Moon</h4>
//                                     </div>
//                                 </li>
//                                 <li className="menu-dropdown-li">
//                                     <div className="menu-card">
//                                         <img src="/imgs/5.jpg" alt="dog-img" srcSet="" />
//                                         <div className="menu-card-meta"><span>friends</span> January 26, 2026</div>
//                                         <h4>Disney Announces Plans for Theme Park on the Moon</h4>
//                                     </div>
//                                 </li>
//                             </ul>
//                         </li>
//                         <li className="nav-li"><a className="nav-a" href="#"><span className="nav-span">Contact</span></a></li>
//                         <li className="nav-li"><a className="nav-a" href="#"><span className="nav-span">Blog</span></a></li>
//                     </ul>
                    
//                 </div>
//                 <div
//                         className="search"
//                         onClick={() => setVisible(prev => !prev)}
//                     >
//                         {visible
//                             ? <IoCloseOutline color="white" size={20} />
//                             : <BsSearch color="white" size={16} />
// }

//                     </div>

//                 {visible && <div className="search-bar">
//                     <input type="text" name="search" id="" placeholder="Search" />
//                     <button type="submit"><IoSearch color="white" size={20} /></button>
//                 </div>}

//             </div>
//         </div>

//     )
// }