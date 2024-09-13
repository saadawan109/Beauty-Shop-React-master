import axios from 'axios'
import React, { useState,useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Loader from '../Loader'


const Edit = () => {
const [Product, setProduct] = useState({})
 const[name, setName] = useState ("")
 const [image, setImage] = useState("")
 const[price , setPrice] = useState(0)
 const [loading, setLoading] = useState(false);


 const params = useParams ()
 const navigate = useNavigate()
 
 useEffect (() => { 


    axios.get(`https://6667f7c0f53957909ff5f560.mockapi.io/Products/${params.id}`).then( (res) => {
        setProduct(res.data)
        setName(res.data.name)
        setImage(res.data.image)
        setPrice(res.data.price)
    }).catch(err => 
            console.log(err.message)
        );
}, []);


 const handleSubmit = () => {
setLoading(true);
    axios.put(`https://6667f7c0f53957909ff5f560.mockapi.io/Products/${params.id}`, {
        "name": name,
        "image": image,
        "price": price
        
    }) .then(function (response) {
    
        navigate("/dashboard");
    })
        .catch(function (error) {
            console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    
}


  return (
<>
<div className="container py-5">
        <h3 className="mb-3">Update a product</h3>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="row">
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Product Name
              </label>
              <input
                type="text"
                value={name}
                className="form-control"
                onChange={(e) => setName(e.target.value)}
                id="exampleFormControlInput1"
                placeholder="product name"
                autoComplete="off"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Product Image
              </label>
              <input
                type="text"
                value={image}
                className="form-control"
                onChange={(e) => setImage(e.target.value)}
                id="exampleFormControlInput1"
                placeholder="Put product image URL"
                autoComplete="off"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput2" className="form-label">
                Price
              </label>
              <input
                type="number"
                value={price}
                className="form-control"
                onChange={(e) => setPrice(e.target.value)}
                id="exampleFormControlInput2"
                placeholder="product Price"
              />
            </div>
          </div>

          <button className="btn btn-warning" onClick={handleSubmit}>
           UpdateProduct
           
          </button>
        </form>
      </div>


</>
  )
}

export default Edit