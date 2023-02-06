import { Link } from "react-router-dom";
import formatNumber from "../utils/formatNumber";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { set } from "../redux/productModal/productModalSlice";

const ProductCard = ({ img01, img02, name, price, slug }) => {
  const dispatch=useDispatch()
  return (
    <div className="product-card">
      <Link to={`/catalog/${slug}`}>
        <div className="product-card__image">
          <img src={img01} alt="" />
          <img src={img02} alt="" />
        </div>
        <h3 className="product-card__name">{name}</h3>
        <div className="product-card__price">
          {formatNumber(price)}
          <span className="product-card__price__old">
            <del>{formatNumber(390000)}</del>
          </span>
        </div>
      </Link>
      <div className="product-card__btn">
        <Button
          size="sm"
          icon="bx bx-cart"
          backgroundColor="blue "
          animate={true}
          onClick={()=>dispatch(set(slug))}
        >
          Chọn mua
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
