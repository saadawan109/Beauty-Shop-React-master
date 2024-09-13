import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getproducts = () => {
      fetch("https://6667f7c0f53957909ff5f560.mockapi.io/Products")
        .then((pro) => {
          return pro.json();
        })
        .then((data) => {
          setProducts(data);
        });
    };

    getproducts();
  }, []);

  return (
    <>
      <section id="productsSection">
        <div className="container ">
          <div className="row">
            <h2 className="text-center my-5">Products</h2>
          </div>
          <div className="row">
            {products.map((product) => {
              return (
                <>
                  <div className="col-md-3 ">
                    <Link to={`product_details/${product.id}`}>
                      <div className="card border-0" style={{ width: "18rem" }}>
                        <img
                          src={product.image}
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body ">
                          <h5 className="card-title">{product.name}</h5>
                          <p className="card-text">{product.price}</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Products;
