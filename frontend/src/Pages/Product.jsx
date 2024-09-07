import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrums/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';

const Product = () => {
  const { products } = useContext(ShopContext); // Use 'products' instead of 'all_product'
  const { productId } = useParams();

  // Ensure products is defined and handle cases where productId might not be found
  const product = products?.find((e) => e.id === Number(productId));

  if (!product) {
    return <div>Product not found</div>; // Or a loading message or redirect
  }

  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProducts />
    </div>
  );
}

export default Product;
