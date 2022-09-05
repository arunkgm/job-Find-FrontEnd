// import files
import React from "react";
import ComNavigation from "./ComNavigation";
import "../StyleSheet/stylecmpview.css"
import {  useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

// Product info page
export default function CmpViews() {
  // state management
  const { id } = useParams();
  const [product, setProduct] = useState({});

  // get product function & api call
  const getProductById = async () => {
    try {
      const { data } = await axios.get(`http://localhost:4001/getprofileemp/${id}`);
      setProduct(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  // useEffect use refresh data
  useEffect(() => {
    getProductById();
  }, [id]);

  return (
    <>
    <ComNavigation/>
     <div className="container containerwer">
    <div className="col-lg-7 col-md-6 col-12  mt-5">
          <div className="card cardasd">
            <div className="card-body dsacard:hover">
              <div className="row">
              <h5 className="card-title">Name :{product.Name}</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                <b>Emailid</b>: {product.Email}
              </h6>
              <h6 className="card-subtitle mb-2 text-muted">
                <b>State </b>: {product.State}
              </h6>
              <h6 className="card-subtitle mb-2 text-muted">
                <b>Contact Number</b> : {product.ContactNumber}
              </h6>
              <h6 className="card-subtitle mb-2 text-muted">
                <b>Address</b> : {product.Address}
              </h6>
              <h6 className="card-subtitle mb-2 text-muted">
                <b>Degree</b> : {product.Degree}
              </h6>
              <h6 className="card-subtitle mb-2 text-muted">
                <b>University</b> : {product.University}
              </h6>
              <h6 className="card-subtitle mb-2 text-muted">
                <b>collage Name</b> : {product.collageName}
              </h6>
              <h6 className="card-subtitle mb-2 text-muted">
                <b>percentage</b> : {product.percentage}
              </h6>
              <h6 className="card-subtitle mb-2 text-muted">
                <b>key skills</b> : {product.keyskills}
              </h6>
              <h6 className="card-subtitle mb-2 text-muted">
                <b>ITSkills</b> : {product.ITSkills}
              </h6>
              <h6 className="card-subtitle mb-2 text-muted">
                <b>School Name</b> : {product.SchoolName}
              </h6>
              <h6 className="card-subtitle mb-2 text-muted">
                <b>10THMark</b> : {product.Mark1}
              </h6>
              <h6 className="card-subtitle mb-2 text-muted">
                <b>12THMark</b> : {product.Mark1}
              </h6>
              <h6 className="card-subtitle mb-2 text-muted">
                <b>Department</b> : {product.Department}
              </h6>
              <h6 className="card-subtitle mb-2 text-muted">
                <b>Current Industry</b> : {product.CurrentIndustry}
              </h6>
              <h6 className="card-subtitle mb-2 text-muted">
                <b>Experience</b> : {product.Experience}
              </h6>
              <h6 className="card-subtitle mb-2 text-muted">
                <b>Exepected salary</b> : {product.Exepectedsalary}
              </h6>
              <h6 className="card-subtitle mb-2 text-muted">
                <b>Role</b> : {product.Role}
              </h6>
              </div>
              {/* <button className="btn btn-primary">Apply Here</button> */}
           </div>
           </div>
         </div> 
         </div>
         </>
  );
}

