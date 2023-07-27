import React, { useEffect, useState } from 'react'
import Navbar from './Navbar';
import Footer from './Footer';

const User = () => {
    const [log, setLog] = useState([]);
    const [deletedItem, setDeletedItem] = useState();
    const removeItem = (product) => {
       
        
          fetch('http://localhost:8000/deleteAccount', {
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
           setDeletedItem(data)
          })
          .catch((err) => {
            console.log(err.message);
          });

      };



    useEffect(() => {
        fetch('http://localhost:8000/getAllAccounts', {
          method: 'GET',
          
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            setLog(data);
          })
          .catch((err) => {
            console.log(err.message);
          });
      }, [deletedItem]);

      const cartData = log.map((product) => (
        <tr key={product._id}>
          <td className="align-middle">{product.email}</td>
          <td className="align-middle">{product._id}</td>
          
          
          <td className="align-middle">
            <button className="btn btn-sm btn-primary" onClick={() => removeItem(product)} >
              {/* Using an arrow function here to pass product to removeItem when clicked */}
              <i className="fa fa-times" ></i>
            </button>
          </td>
        </tr>
         ));
  return (
    <div>
        <Navbar/>
      <div className="text-center mb-4" style={{marginTop: '30px'}}>
        <h2 className="section-title px-5">
          <span className="px-2"> Purchase Log</span>
        </h2>
      </div>
      <div className="container-fluid bg-secondary mb-5">
        {/* ... */}
      </div>
      <div className="container-fluid pt-5">
        <div className="row px-xl-5" style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="col-lg-8 table-responsive mb-5">
            <table className="table table-bordered text-center mb-0">
              <thead className="bg-secondary text-dark">
                <tr>
                  <th>User Email</th>
                  <th> User ID</th>
                 
                  
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody className="align-middle">{cartData}</tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default User
