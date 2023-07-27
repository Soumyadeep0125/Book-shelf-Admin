import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Categories = (props) => {
    const [categories, setCategories] = useState([]);
    const [deletedCategory, setDeletedCategory] = useState();
    const handleClick = (idx) => {
      const selectedCategory = categories[idx].category;
      props.selectCategory(selectedCategory);
      console.log(selectedCategory);
    };
    const deleteCategory = (category, idx) => {
      
      
      fetch('http://localhost:8000/deleteCategories', {
      method: 'DELETE',
      body: JSON.stringify({
          _id: category._id, 
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((data) => {
       
        setDeletedCategory(data);
      alert("Category Deleted!")
      })
      .catch((err) => {
        console.log(err.message);
      });
   
    
  }
    useEffect(() => {
      fetch('http://localhost:8000/getAllCategories')
        .then((response) => response.json())
        .then((data) => {
          
          setCategories(data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }, [deletedCategory]);

   

  
    const categoryList = categories.map((category, idx) => (

       <div className="col-lg-4 col-md-6 pb-1" key={category._id}>
                <div className="cat-item d-flex flex-column border mb-4" style={{ padding: '30px' }}>
                    <p className="text-right"></p>
                    <Link
                        to="/products"
                        className="cat-img position-relative overflow-hidden mb-3"
                        style={{ paddingLeft: '30px' }}
                    >
                        
                        <img
                            className="img-fluid"
                            src={`http://localhost:8000/${category.imageUrl}`}
                            alt=""
                            style={{ height: '300px' }}
                            onClick={() => handleClick(idx)} />
                    </Link>
                    <h5 className="font-weight-semi-bold m-0" style={{display: 'flex', justifyContent: 'center'}}>{category.category}</h5>
                    <button className="btn btn-primary py-2 px-4 my-2 mx-5 " type="submit" id="sendMessageButton" onClick={() => deleteCategory(category, idx)}>Remove</button>
                </div>
            </div>
    ));
  
  return (
    <div>
        
    
    <div className="container-fluid pt-5">
      <div className="text-center mb-4">
        <h2 className="section-title px-5">
          <span className="px-2"> Manage Categories</span>
        </h2>
      </div>
      <div className="row px-xl-5 pb-3">{categoryList}</div>
      
      </div>
     
  </div>
  )
}

export default Categories
