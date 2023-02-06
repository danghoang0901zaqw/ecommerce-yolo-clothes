import { useEffect } from "react";
import { useParams } from "react-router-dom";
import productData from "../assets/fake-data/products";
import Grid from "../components/Grid";
import ProductCard from "../components/ProductCard";
import ProductDetail from "../components/ProductDetail";
import Section, { SectionBody, SectionTitle } from "../components/Section";

const Product = () => {
  const { slug } = useParams();
    const productDetail = productData.getProductBySlug(slug)
  
  useEffect(()=>{window.scrollTo(0,0)},[productDetail])
  const relatedProduct = productData.getProducts(8);
  return (
    <div>
      <Section>
        <SectionBody>
          <ProductDetail product={productDetail}/>
        </SectionBody>
      </Section>
      <Section>
        <SectionTitle>Khám Phá Thêm</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {relatedProduct?.map((item, index) => (
              <ProductCard
                key={index}
                img01={item.image01}  
                img02={item.image02}
                name={item.title}
                price={+item.price}
                slug={item.slug}
              />
            ))}
          </Grid>
        </SectionBody>
      </Section>
    </div>
  );
};

export default Product;
