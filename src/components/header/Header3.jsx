import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useReducer, useRef } from "react";
/*---------Using reducer mange the active or inactive menu----------*/
const initialState = {
  activeMenu: "",
  mobileMenuState: false,
  navState: false,
  scrollY: 0,
};
function reducer(state, action) {
  switch (action.type) {
    case "home":
      return { ...state, activeMenu: "home" };
    case "blog":
      return { ...state, activeMenu: "blog" };
    case "shop":
      return { ...state, activeMenu: "shop" };
    case "services":
      return { ...state, activeMenu: "services" };
    case "pages":
      return { ...state, activeMenu: "pages" };
    case "mobileMenu":
      return { ...state, mobileMenuState: action.isMobileMenu };
    case "setScrollY":
      return { ...state, scrollY: action.payload };
    default:
      throw new Error();
  }
}

function Header3() {
  const currentRoute = useRouter().pathname;
  const [state, dispatch] = useReducer(reducer, initialState);
  const headerRef = useRef(null);
  const handleScroll = () => {
    const { scrollY } = window;
    dispatch({ type: "setScrollY", payload: scrollY });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className="top-bar two">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-lg-12 d-flex align-items-center justify-content-md-between justify-content-center">
              <div className="contact-number">
                <a href="tel:+1(541)754-3020">
                  <img src="assets/images/icon/support2.svg" alt="" /> +1 (541)
                  754-3010
                </a>
              </div>
              <div className="opening-time text-center">
                <p>
                  Opening Hours
                  <br />
                  <span>Mon - Sat 9.00 - 19.00</span>
                </p>
              </div>
              <div className="social-area">
                <ul>
                  <li>
                    <a href="#">
                      <i className="bx bxl-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="bx bxl-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="bx bxl-pinterest-alt" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="bx bxl-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <header
        ref={headerRef}
        className={
          state.scrollY > 150
            ? "header-area style-3 sticky"
            : "header-area style-3"
        }
      >
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <div className="header-logo">
            <Link legacyBehavior href="/">
              <a>
                {" "}
                <img
                  alt="image"
                  className="img-fluid"
                  src="assets/logo/ANIMADO/logo-animated.gif"
                />
              </a>
            </Link>
          </div>
          <div
            className={
              state.mobileMenuState === true
                ? "main-menu show-menu"
                : "main-menu"
            }
          >
            <div className="mobile-logo-area d-lg-none d-flex justify-content-between align-items-center">
              <div className="mobile-logo-wrap">
                <Link legacyBehavior href="/">
                  <a>
                    {" "}
                    <img alt="image" src="assets/images/header2-logo.svg" />
                  </a>
                </Link>
              </div>
              <div className="menu-close-btn">
                <i
                  className="bi bi-x-lg"
                  onClick={() =>
                    dispatch({ type: "mobileMenu", isMobileMenu: false })
                  }
                />
              </div>
            </div>
            <ul className="menu-list">
              <li className={currentRoute === "/how-it-works" ? "active" : ""}>
                <Link legacyBehavior href="/how-it-works">
                  <a>Cómo Funciona</a>
                </Link>
              </li>
              <li className={currentRoute === "/meal-plans" ? "active" : ""}>
                <Link legacyBehavior href="/meal-plans">
                  <a>Planes de Comida</a>
                </Link>
              </li>
              <li className={currentRoute === "/products" ? "active" : ""}>
                <Link legacyBehavior href="/products">
                  <a>Nuestros Productos</a>
                </Link>
              </li>
              <li className={currentRoute === "/faq" ? "active" : ""}>
                <Link legacyBehavior href="/faq">
                  <a>Preguntas Frecuentes (FAQ)</a>
                </Link>
              </li>
              <li className={currentRoute === "/blog" ? "active" : ""}>
                <Link legacyBehavior href="/blogs">
                  <a>Blog</a>
                </Link>
              </li>
              <li className={currentRoute === "/about" ? "active" : ""}>
                <Link legacyBehavior href="/about">
                  <a>Sobre Nosotros</a>
                </Link>
              </li>
            </ul>
            <div className="for-mobile-menu d-lg-none d-block">
              <div className="hotline mb-5">
                <div className="hotline-info">
                  <span>Click To Call</span>
                  <h6>
                    <a href="tel:+1(541)754-3010">+1 (541) 754-3010</a>
                  </h6>
                </div>
              </div>
              <form className="mobile-menu-form">
                <div className="input-with-btn d-flex flex-column">
                  <input type="text" placeholder="Search here..." />
                  <button className="primary-btn1" type="submit">
                    Search
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="nav-right d-flex justify-content-end align-items-center">
            <ul className="menu-list">
              <li className={currentRoute === "/sign-up" ? "active" : ""}>
                <Link legacyBehavior href="/sign-up">
                  <a className="primary-btn6 px-3 text-white">Comenzar</a>
                </Link>
              </li>
              <li className={currentRoute === "/login" ? "active" : ""}>
                <Link legacyBehavior href="/login">
                  <a>Iniciar Sesión</a>
                </Link>
              </li>
            </ul>
            <div className="sidebar-button mobile-menu-btn">
              <i
                className="bi bi-list"
                onClick={() =>
                  dispatch({ type: "mobileMenu", isMobileMenu: true })
                }
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header3;
