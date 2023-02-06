import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addItem } from "../redux/shopping-carts/cartItemSlice";
import formatNumber from "../utils/formatNumber";
import Button from "./Button";

const ProductDetail = ({ product }) => {
  if (product === undefined) product = {
    title: "",
    price: '',
    image01: null,
    image02: null,
    categorySlug: "",
    colors: [],
    slug: "",
    size: [],
    description: ""
}
  const [previewImg, setPreviewImg] = useState(product.image01);
  const [showDesc, setShowDesc] = useState(false);
  const navigate=useNavigate()
  const truncate = (str) => {
    const newStr = str.split("<br><br><br>");
    return str.length > 300 ? newStr[0] + " ..." : str;
  };
  const handleToggleShow = () => {
    setShowDesc(!showDesc);
    if (showDesc === true) {
      window.scrollTo(0, 350);
    }
  };
  const [color, setColor] = useState();
  const [size, setSize] = useState();
  const [quantity, setQuantity] = useState(1);
  const handleChangeQuantity = (type) => {
    if (type === "decrease") {
      setQuantity((prev) => (prev <= 1 ? 1 : prev - 1));
    }
    if (type === "increase") {
      setQuantity((prev) => prev + 1);
    }
  };

  const check = () => {
    if (color === undefined) {
      toast.error("Vui lòng chọn màu sắc");
      return false;
    }
    if (size === undefined) {
      toast.error("Vui lòng chọn kích cỡ");
      return false;
    }
    return true;
  };
  const dispatch=useDispatch()

  const handleAddToCart = () => {
    if (check()) {
      dispatch(addItem({
        slug:product.slug,
        price:product.price,
        color:color,
        size:size,
        quantity:quantity,
      }))
    }
  };
  const handleGoToCart = () => {
    dispatch(addItem({
      slug:product.slug,
      price:product.price,
      image:product.image01,
      color:color,
      size:size,
      quantity:quantity,
    }))
    navigate('/cart')
}
useEffect(()=>{
  setQuantity(1)
  setPreviewImg(product.image01)
},[product])
  return (
    <div className="product">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        closeOnClick
        theme="dark"
      />
      <div className="product__images">
        <div className="product__images__list">
          <div
            className="product__images__item"
            onClick={() => setPreviewImg(product.image01)}
          >
            <img alt="" src={product.image01} />
          </div>
          <div
            className="product__images__item"
            onClick={() => setPreviewImg(product.image02)}
          >
            <img alt="" src={product.image02} />
          </div>
        </div>
        <div className="product__image__main">
          <img src={previewImg} alt="" />
        </div>
        <div className="product-desc">
          <div className="product-desc__title">Chi Tiết Sản Phẩm</div>
          <div
            className="product-desc__content"
            dangerouslySetInnerHTML={{
              __html: showDesc
                ? product.description
                : truncate(product.description),
            }}
          ></div>
          {product.description.length > 300 && (
            <div className="btn-show">
              <Button backgroundColor="blue" onClick={handleToggleShow}>
                {showDesc ? "Ẩn bớt" : "Xem thêm"}
              </Button>
            </div>
          )}
        </div>
      </div>
      <div className="product__info">
        <h1 className="product__info__title">{product.title}</h1>
        <div className="product__info__item">
          <span className="product__info__item__price">
            {formatNumber(product.price)}
          </span>
        </div>
        <div className="product__info__item">
          <div className="product__info__item__title">Màu Sắc</div>
          <div className="product__info__item__list">
            {product.colors?.map((item, index) => (
              <div
                onClick={() => {
                  setColor(item);
                }}
                key={index}
                className={`product__info__item__list__item ${
                  color === item ? "active" : ""
                }`}
              >
                <div className={`circle bg-${item}`}></div>
              </div>
            ))}
          </div>
        </div>
        <div className="product__info__item">
          <div className="product__info__item__title">Kích thước </div>
          <div className="product__info__item__list">
            {product.size?.map((item, index) => (
              <div
                onClick={() => setSize(item)}
                key={index}
                className={`product__info__item__list__item ${
                  size === item ? "active" : ""
                }`}
              >
                <div className="product__info__item__list__item__size">
                  {item}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="product__info__item">
          <div className="product__info__item__title">Số Lượng </div>
          <div className="product__info__item__quantity">
            <div
              className="product__info__item__quantity__btn"
              onClick={() => handleChangeQuantity("decrease")}
            >
              <i className="bx bx-minus"></i>
            </div>
            <div className="product__info__item__quantity__input">
              <input
                type={"number"}
                value={quantity || 1}
                onChange={(e) => setQuantity(Number(e.target.value))}
              />
            </div>
            <div
              className="product__info__item__quantity__btn"
              onClick={() => handleChangeQuantity("increase")}
            >
              <i className="bx bx-plus"></i>
            </div>
          </div>
        </div>
        <div className="product__info__item">
          <Button onClick={handleAddToCart} backgroundColor="blue">
            Thêm Vào Giỏ Hàng
          </Button>
          <Button backgroundColor="blue" onClick={handleGoToCart} >Mua Ngay</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
