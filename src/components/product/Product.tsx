import { ProductType } from "../about/AboutProduct";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./product.css"

function Product({ title, price, description, imageUrl }: ProductType) {
  return (
    
    <div className="duct col-11 col-md-6 col-lg-3 mx-0 md-4">
        <div className="card">
            <img src={imageUrl} className="card-img-top img-fluid"/>
            <div className="card-body text-center">
                <h5 className="card-title">{title}</h5>
                <h5 className="card-title">${price}</h5>
                <p className="card-text">{description}</p>
                <Button className="btn btn-success">Explore Content</Button>
            </div>
        </div>
    </div>
  );
}

export default Product;