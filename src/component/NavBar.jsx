import { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoCloseOutline, IoSearch } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

export default function NavBar() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);

  const handleMenu = () => setMenuVisible(!menuVisible);

  return (
    <div className="navbar-bg">
      <div className="container w-100 d-flex align-items-center justify-content-between">

        {menuVisible && (
          <div
            className="small-screen-menu d-flex flex-column position-fixed top-0 start-0 w-100 h-100 bg-dark text-white"
            style={{ zIndex: 999 }}
          >
            <div className="d-flex justify-content-between align-items-center">
              <div className="logo m-0">
                <img id="logo-img" src="/logo.png" alt="logo" style={{ maxHeight: '40px' }} />
              </div>
              <div onClick={handleMenu} style={{ cursor: "pointer" }}>
                <RxHamburgerMenu color="white" fill="#fff" size={24} />
              </div>
            </div>

            <ul className="nav-links flex-column list-unstyled">
              <li className="nav-li p-0 py-2">
                <a className="nav-a text-white  fs-5" href="#">Home</a>
              </li>
              <li className="nav-li p-0 py-2">
                <a className="nav-a text-white  fs-5 d-flex align-items-center" href="#">
                  Posts <MdOutlineKeyboardArrowDown className="ms-1" />
                </a>
                <ul className="dropdown list-unstyled ps-3 mt-2">
                  <li className="dropdown-item mb-2"><a className="text-white-50 " href="#">Default</a></li>
                  <li className="dropdown-item mb-2"><a className="text-white-50 " href="#">No Sidebar</a></li>
                  <li className="dropdown-item mb-2"><a className="text-white-50 " href="#">Sidebar Left</a></li>
                  <li className="dropdown-item mb-2"><a className="text-white-50 " href="#">Hero Image</a></li>
                </ul>
              </li>
              <li className="nav-li p-0 py-2">
                <a className="nav-a text-white  fs-5" href="#">Policy</a>
              </li>
              <li className="nav-li p-0 py-2">
                <a className="nav-a text-white  fs-5 d-flex align-items-center" href="#">
                  Features <MdOutlineKeyboardArrowDown className="ms-1" />
                </a>
                <ul className="dropdown list-unstyled ps-3 mt-2">
                  <li className="dropdown-item mb-2"><a className="text-white-50 " href="#">Submenu1</a></li>
                  <li className="dropdown-item mb-2"><a className="text-white-50 " href="#">Submenu2</a></li>
                  <li className="dropdown-item mb-2"><a className="text-white-50 " href="#">Submenu3</a></li>
                  <li className="dropdown-item mb-2"><a className="text-white-50 " href="#">Submenu4</a></li>
                </ul>
              </li>
              <li className="nav-li p-0 py-2">
                <a className="nav-a text-white  fs-5" href="#">Megamenu</a>
              </li>
              <li className="nav-li p-0 py-2">
                <a className="nav-a text-white  fs-5" href="#">Contact</a>
              </li>
              <li className="nav-li p-0 py-2">
                <a className="nav-a text-white  fs-5" href="#">Blog</a>
              </li>

              <li className="nav-li p-0 w-100">
                <div className="d-flex flex-row justify-content-start" style={{width: '100%', height: "36px"}}>
                  <input
                    type="text"
                    className="form-control p-2"
                    placeholder="Search"
                    style={{ backgroundColor: 'white', border: 'none', borderRadius: '4px', width: '100%' }}
                  />
                  <button
                    className="btn"
                    style={{ backgroundColor: '#ff6b7a', color: 'white', border: 'none', borderRadius: '4px', minWidth: '50px' }}
                  >
                    <IoSearch size={20} />
                  </button>
                </div>
              </li>
            </ul>
          </div>
        )}

        <div className="d-flex align-items-center">
          {!menuVisible && (
            <div className="logo m-0 p-0">
              <img id="logo-img" src="/logo.png" alt="logo" />
            </div>
          )}

          <div className="d-none d-lg-flex align-items-center w-100">
            <ul className="nav-links d-flex flex-row mb-0 list-unstyled justify-content-start">
              <li className="nav-li me-3">
                <a className="nav-a text-white " href="#">Home</a>
              </li>
              <li className="nav-li me-3">
                <a className="nav-a text-white  d-flex align-items-center" href="#">
                  Posts <MdOutlineKeyboardArrowDown className="ms-1" />
                </a>
                <ul className="dropdown position-absolute bg-white mt-2 list-unstyled shadow">
                  <li className="dropdown-item p-2"><a className="text-dark " href="#">Default</a></li>
                  <li className="dropdown-item p-2"><a className="text-dark " href="#">No Sidebar</a></li>
                  <li className="dropdown-item p-2"><a className="text-dark " href="#">Sidebar Left</a></li>
                  <li className="dropdown-item p-2"><a className="text-dark " href="#">Hero Image</a></li>
                </ul>
              </li>
              <li className="nav-li me-3">
                <a className="nav-a text-white " href="#">Policy</a>
              </li>
              <li className="nav-li me-3">
                <a className="nav-a text-white  d-flex align-items-center" href="#">
                  Features <MdOutlineKeyboardArrowDown className="ms-1" />
                </a>
                <ul className="dropdown position-absolute bg-white mt-2 list-unstyled shadow">
                  <li className="dropdown-item p-2"><a className="text-dark " href="#">Submenu1</a></li>
                  <li className="dropdown-item p-2"><a className="text-dark " href="#">Submenu2</a></li>
                  <li className="dropdown-item p-2"><a className="text-dark " href="#">Submenu3</a></li>
                  <li className="dropdown-item p-2"><a className="text-dark " href="#">Submenu4</a></li>
                </ul>
              </li>
              <li className="nav-li me-3">
                <a className="nav-a text-white " href="#">Megamenu</a>
              </li>
              <li className="nav-li me-3">
                <a className="nav-a text-white " href="#">Contact</a>
              </li>
              <li className="nav-li me-3">
                <a className="nav-a text-white " href="#">Blog</a>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="search d-none d-lg-flex ms-3"
          onClick={() => setSearchVisible(prev => !prev)}
          style={{ cursor: "pointer" }}
        >
          {searchVisible ? <IoCloseOutline color="white" size={20} /> : <IoSearch color="white" size={20} />}
        </div>

        {searchVisible && (
          <div className="search-bar d-flex ms-3">
            <input type="text" className="form-control me-2" placeholder="Search" />
            <button className="btn btn-outline-light"><IoSearch size={20} /></button>
          </div>
        )}

        <div className={`hamburger d-lg-none ${menuVisible ? "d-none" : ""}`} onClick={handleMenu} style={{ cursor: "pointer" }}>
          <RxHamburgerMenu color="white" fill="#fff" size={24} />
        </div>

      </div>
    </div>
  );
}