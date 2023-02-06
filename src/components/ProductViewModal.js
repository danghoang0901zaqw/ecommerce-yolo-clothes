import React, { useEffect, useState } from "react";
import productData from "../assets/fake-data/products";
import ProductDetail from "./ProductDetail";
import Button from "./Button";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../redux/productModal/productModalSlice";

const ProductViewModal = () => {
  const productSlug = useSelector((state) => state.productModal.value);

  const dispatch = useDispatch();

  const [product, setProduct] = useState(undefined);

  useEffect(() => {
    setProduct(productData.getProductBySlug(productSlug));
  }, [productSlug]);
  console.log(product);
  return (
    <div
      className={`product-view__modal ${product === undefined ? "" : "active"}`}  
    >
      <div className="product-view__modal__content">
        <ProductDetail product={product} />
        <div className="product-view__modal__content__close">
          <Button size="sm" backgroundColor="blue" onClick={() => dispatch(remove())}>
            đóng
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductViewModal;
