import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import formatNumber from "../utils/formatNumber";
import { removeItem, updateItem } from "../redux/shopping-carts/cartItemSlice";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const [item, setItem] = useState(props.item);
  const [quantity, setQuantity] = useState(props.item.quantity);

  useEffect(() => {
    setItem(props.item);
    setQuantity(props.item.quantity);
  }, [props.item]);

  const handleChangeQuantity = (type) => {
    if (type === "increase") {
      dispatch(updateItem({...item,quantity:quantity + 1}))
    }
    if (type === "decrease") {
      dispatch(updateItem({...item,quantity:quantity - 1 <= 0 ? 1 : quantity -1}))
    }
  };

  const handleRemoveProduct=(item)=>{
   dispatch(removeItem(item))
  }   

  const handleChangeInput=(value)=>{
    dispatch(updateItem({...item,quantity:value || 1}))
  }
  return (
    <div className="cart__item">
      <div className="cart__item_image">
        <img src={item.product.image01} alt="" />
      </div>
      <div className="cart__item__content">
        <div className="cart__item__info">
          <div className="cart__item__info__name">
            <Link to={`/catalog/${item.slug}`}>
              {`${item.product.title} - ${item.color} - ${item.size} `}
            </Link>
          </div>
        </div>
        <div className="cart__item__info__price">
          {formatNumber(+item.price)} đ
        </div>
        <div className="cart__item__info__quantity">
          <div
            className="cart__item__info__quantity__btn"
            onClick={() => handleChangeQuantity("decrease")}
          >
            <i className="bx bx-minus"></i>
          </div>
          <div className="cart__item__info__quantity__input">
            <input
              type={"number"}
              value={quantity || 1}
              onChange={(e) => handleChangeInput(e.target.value)}
            />
          </div>
          <div
            className="cart__item__info__quantity__btn"
            onClick={() => handleChangeQuantity("increase")}
          >
            <i className="bx bx-plus"></i>
          </div>
        </div>
        <div className="cart__item__info__del" onClick={()=>handleRemoveProduct(props.item)}>
          <i className="bx bx-trash "></i>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
