import "./App.css";
import Product from "./components/Product";
import Page from "./components/Page";

export type ProductType = {
  title: string;
  mudel: number;
  price: number;
  description: string;
  imageUrl: string;
};

function App() {
  const products: ProductType[] = [
    { id:1,
      title: "Product 1",
      mudel: 55556,
      price: 100,
      description: "This is a product",
      imageUrl: "https://picsum.photos/200/300",
    },
    {
      id:2,
      title: "Product 2",
      mudel: 55556,
      price: 200,
      description: "This is a product",
      imageUrl: "https://picsum.photos/300/300",
    },
    {
      id:3,
      title: "Product 3",
      mudel: 55556,
      price: 300,
      description: "This is a product",
      imageUrl: "https://picsum.photos/400/300",
    },
  ];

  return (
    <>
      
      {products.map((product) => (
        <Product
          title={product.title}
          mudel={product.mudel}
          price={product.price}
          description={product.description}
          imageUrl={product.imageUrl}
        />
      ))}
    </>
  );
}

export default App;