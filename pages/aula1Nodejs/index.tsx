import axios from "axios";
import { useEffect, useState } from "react";

type ProductType = {
  id: number;
  title: string;
  price: number;
  description: string;
  thumbnail: string;
};

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    (async function getProduct() {
      const response = await axios.get("http://dummyjson.com/products");
      setData(response.data.products);
    })();
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>Home</h1>
      <div>
        <a href="/about">About</a>
      </div>
      <div>
        <a href="/contact">Contact</a>
      </div>
      <div className="products">
        {(data as ProductType[]).map((product: ProductType) => (
          <div key={product.id} className="product">
            <h2>{product.title}</h2>
            <img src={product.thumbnail} alt={product.title} />
            <h3>descricao: {product.description}</h3>
            <h3>{product.price} R$</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
