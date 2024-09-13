import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loader from "../Loader";

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [deleted, setDeleted] = useState(false);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [found, setFound] = useState(true);

  useEffect(() => {
    axios
      .get("https://6667f7c0f53957909ff5f560.mockapi.io/Products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.log(err.message));
  }, [deleted]);

  const handleDelete = (id) => {

    setLoading(true);
    axios
      .delete(`https://6667f7c0f53957909ff5f560.mockapi.io/Products/${id}`)
      .then(() => {
        setDeleted(true);
      })
      .catch((err) => console.log(err.message))

      .finally(() => {
        setLoading(false);
      });
  };


  // HANDLE SEARCH FUNCTIONALITY

  const handleSearch = () => {
    // if(search.length >= 3) {
      setLoading(true);
      axios
        .get(
          `https://6667f7c0f53957909ff5f560.mockapi.io/Products?name=${search}`
        )
        .then((res) => {
          setProducts(res.data);
          setFound(true)
        })
        .catch((err) => {
          setFound(false)
          console.log(err.message);
        })
        .finally(() => {
          setLoading(false);
        });
    // }
   
  };

  return (
    <>
      <div className="col-md-3 my-3 mx-auto ">
        <form
          className="d-flex"
          role="search"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            onKeyUp={ (e) => handleSearch()}
           
            aria-label="Search"
          />
          <button
            onClick={handleSearch}
            className="btn btn-outline-success"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
      <div className="container">
        <div className="w-75 mx-auto">
          <h1 className="my-3">Products Dashboard</h1>

          {loading == true ? (
            <Loader />
          ) :  (found == false) ? (<div className="alert alert-danger">No product found</div>) : (
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, index) => {
                  return (
                    <tr key={index}>
                      <td>{product.id}</td>
                      <td>
                        <img src={product.image} width="50px" />
                      </td>
                      <td>{product.name}</td>
                      <td>{product.price}</td>
                      <td>
                        <Link
                          to={`/update/${product.id}`}
                          className="btn btn-warning btn-sm me-2"
                        >
                          Edit
                        </Link>

                        
                        <button
                          onClick={() => handleDelete(product.id)}
                          className="btn btn-danger btn-sm"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
