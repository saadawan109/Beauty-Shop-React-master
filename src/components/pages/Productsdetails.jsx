import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button } from 'react-bootstrap';


const Productsdetails = () => {
  const [product, setProduct] = useState({});
  const params = useParams();
  console.log(product.pid);

  useEffect(() => {
    axios
      .get(`https://6667f7c0f53957909ff5f560.mockapi.io/Products/${params.id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => console.log(err.message));
  }, []);
  return (
    <>
      <div className="container  ">
        <div className="row ">
          <div className="col-md-10">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4 contact">
                  <img
                    src={product.image}
                    className="img-fluid rounded-start"
                    alt={product.name}
                  />
                </div>
                <div className="col-md-8 contact">
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.price}</p>
                    <p className="card-text">{product.description}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <Button variant="primary" className="mr-2">
                          {" "}
                          <i class="ri-currency-fill"></i>  Buy Now
                        </Button>
                        <Button variant="outline-primary"><i class="ri-shopping-cart-line"></i> Add to Cart </Button>
                      </div>
                      <small className="text-muted"> <i class="ri-truck-line"></i> Free Shipping </small>
                    </div>
                    <div>
            <h2 className="mt-3">Elevate Your Senses with Our Luxurious Perfumes</h2>
            <p>Discover captivating scents crafted for elegance and allure. Explore our curated collection and find your perfect fragrance today.</p>
        </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Productsdetails;
