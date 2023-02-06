import Cart from "../pages/Cart";
import Catalog from "../pages/Catalog";
import Home from "../pages/Home";
import Product from "../pages/Product";
import config from "../config";
import DefaultLayout from "../Layout/DefaultLayout";
import LayoutOnly from "../Layout/LayoutOnly";

const publicRoutes = [
  {
    path: config.routes.home,
    namePage: "Trang chủ",
    element: Home,
    layout: DefaultLayout,
  },
  { path: config.routes.product, namePage: "Sản Phẩm Chi Tiết", element: Product },
  {
    path: config.routes.catalog,
    namePage: "Sản Phẩm",
    element: Catalog,
    layout: DefaultLayout,
  },
  {
    path: config.routes.cart,
    namePage: "Giỏ Hàng",
    element: Cart,
    layout: DefaultLayout     ,
  },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
