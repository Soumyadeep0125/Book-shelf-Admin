import React, { useState } from 'react';
import Navbar from './Navbar';
import Categories from './Categories';
import Footer from './Footer';

const AddCategories = () => {
  const [category, setCategory] = useState('');
  const [image, setImage] = useState(null);

  const handleClick = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('category', category);

    // Instead of setting the files directly, append each file individually.
    for (let i = 0; i < image.length; i++) {
      formData.append(`image`, image[i]);
    }

    try {
      const response = await fetch('http://localhost:8000/AddCategories', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      console.log(data);
      alert('Category Added!!');
    } catch (err) {
      console.log(err.message);
      alert('Category add failed!!');
    }
  };



    return (
        <div>
            <Navbar />
            <Categories />



            <div className="row px-xl-5" style={{ display: "flex", justifyContent: "center" }}>
                <div className="col-lg-7 mb-5" >
                    <div className="contact-form">
                        <div id="success"></div>
                        <form name="sentMessage" id="contactForm" encType="multipart/form-data">
                            <div className="control-group">
                                <input type="text" className="form-control" id="name" placeholder="Category Name"
                                    required="required" data-validation-required-message="Please enter Category name" onChange={(e) => setCategory(e.target.value)} />
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="control-group">
                                <input
                                    name="images"
                                    type="file"
                                    className="form-control"
                                    id="photo"
                                    accept="image/*"
                                    required="required"
                                    data-validation-required-message="Please enter 1 image"
                            
                                    onChange={(e) => {
                                        setImage(e.target.files);
                                    }}
                                />
                                <p className="help-block text-danger"></p>
                            </div>
                            <div>
                                <button
                                    className="btn btn-primary py-2 px-4"
                                    type="submit"
                                    id="sendMessageButton"
                                    onClick={handleClick}
                                >
                                    Add Category
                                </button>
                            </div>
                        </form>

                    </div>

                </div>
            </div >
            <Footer/>
            </div>
            )
}

export default AddCategories
