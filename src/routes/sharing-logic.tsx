import { useEffect, useState } from "react";

export const SharingLogicSample = () => (
  <>
    <div style={{ textAlign: "start" }}>
      <h4>Bad</h4>
      <Bad />
    </div>

    <hr style={{ borderTop: "2px dotted #bbb" }}></hr>

    <div style={{ textAlign: "start" }}>
      <h4>Good</h4>
      <Good />
    </div>
  </>
);

const initialProducts: Product[] = [
  {
    id: "1",
    name: "smartphone",
    price: 100_000,
    isInCart: false,
  },
  {
    id: "2",
    name: "laptop",
    price: 200_000,
    isInCart: false,
  },
  {
    id: "3",
    name: "keyboard",
    price: 10_000,
    isInCart: false,
  },
];

const Bad = () => {
  const [products, setProducts] = useState(initialProducts);
  return (
    <BadProductDetail
      product={products[1]}
      addToCart={() =>
        setProducts((prev) =>
          prev.map((v) => ({ ...v, isInCart: v.id === products[1].id }))
        )
      }
    />
  );
};

const Good = () => {
  const [products, setProducts] = useState(initialProducts);
  return (
    <GoodProductDetail
      product={products[1]}
      addToCart={() =>
        setProducts((prev) =>
          prev.map((v) => ({ ...v, isInCart: v.id === products[1].id }))
        )
      }
    />
  );
};

type Product = {
  id: string;
  name: string;
  price: number;
  isInCart: boolean;
};

type ProductDetailProps = {
  product: Product;
  addToCart: (id: string) => void;
};
const BadProductDetail = ({ product, addToCart }: ProductDetailProps) => {
  useEffect(() => {
    if (product.isInCart) {
      alert(`Added ${product.name} to the shopping card!`);
    }
  }, [product]);

  const handleBuyClick = () => {
    addToCart(product.id);
  };
  const handleCheckoutClick = () => {
    addToCart(product.id);
    // navigateTo('/checkout')
  };
  return (
    <>
      <span>
        name: {product.name}, price: {product.price.toLocaleString("ja-JP")}
      </span>
      <span> </span>
      <button onClick={handleBuyClick}>buy</button>
    </>
  );
};

const GoodProductDetail = ({ product, addToCart }: ProductDetailProps) => {
  const buyProduct = () => {
    addToCart(product.id);
    alert(`Added ${product.name} to the shopping card!`);
  };
  const handleBuyClick = () => {
    buyProduct();
  };
  const handleCheckoutClick = () => {
    buyProduct();
    // navigateTo('/checkout')
  };
  return (
    <>
      <span>
        name: {product.name}, price: {product.price.toLocaleString("ja-JP")}
      </span>
      <span> </span>
      <button onClick={handleBuyClick}>buy</button>
    </>
  );
};
