import { ProductType } from "../App";,
import Page from "./Page";

function Product({ id, title, mudel, price, description, imageUrl }: ProductType) {
  return (
    <div>
      <h1>{title}</h1>
      <h2>Mudel-{mudel}</h2>
      <p>{price}</p>
      <p>{description}</p>
      <img src={imageUrl} alt={title} />
    </div>
  );
}

export default Product;