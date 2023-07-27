import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Confirmation = (props) => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (props.confo === "Login Successful") {
      setMessage("Go to Home");
    } else {
      setMessage("");
    }
  }, [props.confo]);

  return (
    <div>
      <section className="container10">
        <div className="form Signin">
          <div className="form-content">
            <header>{props.confo}</header>

            <div className="form-link">
              <span>
                <Link to="/main" className="link signup-link">{message}</Link>
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Confirmation;
