import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/Logo-2.png";
import { useSelector } from "react-redux";

const Header = () => {
  const mainNav = [
    {
      display: "Trang chủ",
      path: "/",
    },
    {
      display: "Sản phẩm",
      path: "/catalog",
    },
    {
      display: "Phụ kiện",
      path: "/accessories",
    },
    {
      display: "Liên hệ",
      path: "/contact",
    },
  ];
  const { pathname } = useLocation();
  const idxActive = mainNav.findIndex((x) => x.path === pathname);
  const [isScrolled, setIsScrolled] = useState(false);
  const product = useSelector((state) => state.cartItems.value);
    const handleScroll = () => {
    setIsScrolled(window.scrollY >= 80 || document.body.scrollTop >= 80);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolled]);
  return (
    <div className={` ${isScrolled ? "header shrink" : "header"}`}>
      <div className="container">
        <div className="header__menu">
          <div className="header__mobile__menu-toggle">
            <i className="bx bx-menu-alt-left"></i>
          </div>

          <div className="header__menu__left">
            <div className="header__mobile__left__close">
              <i className="bx bx-chevron-left"></i>
            </div>
            {mainNav?.map((item, index) => (
              <div
                key={index}
                className={`header__menu__item header__menu__left__item ${
                  idxActive === index ? "active" : " "
                }`}
              >
                <Link to={item.path}>
                  <span>{item.display}</span>
                </Link>
              </div>
            ))}
          </div>
          <div className="header__logo">
            <Link to="/">
              <img src={logo} alt="" className="header__img" />
            </Link>
          </div>
          <div className="header__menu__right">
            <div className="header__menu__item header__menu__right__item">
              <i className="bx bx-search-alt-2"></i>
            </div>
            <div className="header__menu__item header__menu__right__item">
              <Link to="/cart">
                <i className="bx bx-shopping-bag"></i>
              </Link>
              {product.length > 0 && (
                <div className="quantity__badge">
                    { product.reduce((total, item) => (total += item.quantity), 0)}
                </div>  
              )}
            </div>
            <div className="header__menu__item header__menu__right__item">
              <i className="bx bx-user"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
