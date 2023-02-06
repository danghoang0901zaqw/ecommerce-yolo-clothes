import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import productData from "../assets/fake-data/products";
import formatNumber from "../utils/formatNumber";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const cartItems = useSelector((state) => state.cartItems.value);
  const [totalProduct, setTotalProduct] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartProduct, setCartProduct] = useState([]);
    useEffect(() => {
    setCartProduct(productData.getCartItemDetail(cartItems));
    setTotalProduct(
      cartItems.reduce((total, item) => (total += item.quantity), 0)
    );
    setTotalPrice(
      cartItems.reduce(
        (total, item) => (total += item.quantity * item.price),
        0
      )
    );
  }, [cartItems]);
  return (
    <div className="cart">
      <div className="cart__info">
        <div className="cart__info__txt">
          <p>Bạn đang có {totalProduct} sản phẩm trong giỏ hàng</p>
          <div className="cart__info__txt__price">
            <span>Thành tiền :</span>
            <span>{formatNumber(totalPrice)}đ</span>
          </div>
        </div>
        <div className="cart__info__btn">
          <Button backgroundColor="blue">Đặt hàng</Button>
          <Link to="/catalog">
            <Button backgroundColor="blue">Tiếp tục mua hàng</Button>
          </Link>
        </div>
      </div>
      <div className="cart__list">
        {cartProduct?.map((item,index) => (
          <CartItem key={index} item={item}/>
        ))}
      </div>
    </div>
  );
};

export default Cart;
