import "./about.css";
import Product from '../product/Product';

export type ProductType = {
  title: string;
  price: number;
  description: string;
  imageUrl: string;
};

function About() {

  const products: ProductType[] = [
    {
      title: "Content 1",
      price: 100,
      description: "@content by him",
      imageUrl: "https://picsum.photos/380/300",
    },
    {
      title: "Content 1",
      price: 100,
      description: "@content by him",
      imageUrl: "https://picsum.photos/seed/picsum/380/300",
    },
    {
      title: "Content 1",
      price: 100,
      description: "@content by him",
      imageUrl: "https://picsum.photos/400/300",
    },
    {
      title: "Content 1",
      price: 100,
      description: "@content by him",
      imageUrl: "https://picsum.photos/300/300/?blur",
    },
    {
      title: "Content 1",
      price: 100,
      description: "@content by him",
      imageUrl: "https://picsum.photos/400/300",
    },
    {
      title: "Content 1",
      price: 100,
      description: "@content by him",
      imageUrl: "https://picsum.photos/400/300",
    },
    {
      title: "Content 1",
      price: 100,
      description: "@content by him",
      imageUrl: "https://picsum.photos/400/300",
    },
    {
      title: "Content 1",
      price: 100,
      description: "@content by him",
      imageUrl: "https://picsum.photos/400/300",
    },
    {
      title: "Content 1",
      price: 100,
      description: "@content by him",
      imageUrl: "https://picsum.photos/400/300",
    },
    {
      title: "Content 1",
      price: 100,
      description: "@content by him",
      imageUrl: "https://picsum.photos/400/300",
    },
    {
      title: "Content 1",
      price: 100,
      description: "@content by him",
      imageUrl: "https://picsum.photos/400/300",
    },{
      title: "Content 1",
      price: 100,
      description: "@content by him",
      imageUrl: "https://picsum.photos/400/300",
    },
  ];

  return (
    <>
    <div className='container'>
      {products.map((product) => (
        <Product
          title={product.title}
          price={product.price}
          description={product.description}
          imageUrl={product.imageUrl}
        />
      ))}
      </div>
    </>
  )
}

export default About;
