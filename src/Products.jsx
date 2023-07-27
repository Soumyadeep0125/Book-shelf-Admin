import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Products = (props) => {
    const [products, setProducts] = useState([]);
    const [deletedProduct, setDeletedProduct] = useState();
  const handleClick = (idx) => {
    const selectedProduct = products[idx];
    props.setProductDetails(selectedProduct);
    console.log(selectedProduct);
  };
  const deleteProduct = (product, idx) => {

    fetch('http://localhost:8000/deleteProduct', {
      method: 'DELETE',
      body: JSON.stringify({
          _id: product._id, 
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setDeletedProduct(data);
      alert("Product Deleted!")
      })
      .catch((err) => {
        console.log(err.message);
      });
   
  
}
  console.log(props.category);

  useEffect(() => {
    fetch('http://localhost:8000/getCategoryProducts', {
      method: 'POST',
      body: JSON.stringify({
        category: props.category,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [props.category, deletedProduct]);

  const topProductList = products
 
    .map((product, idx) => (
      <div className="col-lg-3 col-md-6 col-sm-12 pb-1" key={product._id}>
        <div className="card product-item border-0 mb-4">
          <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0" style={{ height: '250px' }}>
            <img className="img-fluid w-100" src={`http://localhost:8000/${product.imageUrl1}`} alt="" />
          </div>
          <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
            <h6 className="text-truncate mb-3">{product.productName}</h6>
            <div className="d-flex justify-content-center">
              <h6>₹{product.productPrice}</h6>
            </div>
          </div>
          <div className="card-footer d-flex justify-content-between bg-light border">
            <Link to="/productdetails" className="btn btn-sm text-dark p-0"  onClick={() => handleClick(idx)}>
              <i className="fas fa-eye text-primary mr-1"></i>View Detail
            </Link>
            <button className="btn btn-sm text-dark p-0" onClick={() => deleteProduct(product, idx)}>
              Remove
            </button>
            
          </div>
          
        </div>
      </div>
    ));

  return (
    <div>
        <Navbar/>
      <div>
      <div className="container-fluid pt-5">
        <div className="text-center mb-4">
          <h2 className="section-title px-5">
            <span className="px-2">{props.category} Products</span>
          </h2>
        </div>
        <div className="row px-xl-5 pb-3">{topProductList}</div>
      </div>
    </div>
    </div>
  )
}

export default Products
