/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import './Productoptionthree.css'
const Productoptionone = ({linefunctionn}) => {
  return (
    <>
      <div className="productoptionone" onClick={linefunctionn}>
        <div className="sideiconimg">
          <i className="ri-beer-fill"></i>
        </div>
        <div className="sideicondes">
          <div className="popular">beverages</div>
          <div className="popularr">Drinks</div>
        </div>
      </div>
    </>
  );
};

export default Productoptionone;
