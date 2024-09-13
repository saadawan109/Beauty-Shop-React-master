import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState();
  const [image, setImage] = useState();
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();  // Prevent default form submission
  
    axios.post("https://6667f7c0f53957909ff5f560.mockapi.io/Products", {
      name: name,
      image: image,
      price: price,
      category: category,
    })
    .then(function (response) {
      navigate("/#productsSection");
    })
    .catch(function (error) {
      console.log(error);
    });
  };
  
  return (
    <>
      <div className="container contact py-5">
      <h3 className="mb-3">Create a Product</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="productName" className="form-label">
            Product Name
          </label>
          <input
            type="text"
            className="form-control"
            id="productName"
            placeholder="Enter product name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
        
          <label htmlFor="productImage" className="form-label">
            Product Image URL
          </label>
          <input
            type="text"
            className="form-control"
            id="productImage"
            placeholder="Enter product image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="productPrice" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="productPrice"
            placeholder="Enter product price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="productCategory" className="form-label">
            Category
          </label>
          <select
            className="form-select"
            id="productCategory"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="">Select a category</option>
            <option value="Face Wash">Face Wash</option>
            <option value="Makeup">Makeup</option>
            <option value="Shampoo">Shampoo</option>
            <option value="Perfume">Perfume</option>
          </select>
        </div>

        <button  type="submit" className=" shop-btn" onClick={handleSubmit} >
          Create Product
        </button>
      </form>
    </div>
    </>
  );
};

export default Create;
