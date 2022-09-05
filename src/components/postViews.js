// import files
import React from "react";
import Navigation from "./Navigation";
import "../StyleSheet/viexhome.css";
import {  useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

// Product info page
export default function PostViews() {
  // state management
  const { id } = useParams();
  const [product, setProduct] = useState({});

  // get product function & api call
  const getProductById = async () => {
    try {
      const { data } = await axios.get(`http://localhost:4001/getpost/${id}`);
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
    <Navigation/>
      <div className="container containergdp">
    <div className="col-lg-10 col-md-6 col-12  mt-5">
          <div className="card cardabd">
            <div className="card-body vsscard:hover">
              <h5 className="card-title">Company :{product.companyname}</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                <b>type of company</b>: {product.typeofcompany}
              </h6>
              <h6 className="card-subtitle mb-2 text-muted">
                <b>jobrole </b>: {product.jobrole}
              </h6>
              <h6 className="card-subtitle mb-2 text-muted">
                <b>qulification</b> : {product.qulification}
              </h6>
              <h6 className="card-subtitle mb-2 text-muted">
                <b>year of running</b> : {product.yearofrunning}
              </h6>
              <h6 className="card-subtitle mb-2 text-muted">
                <b>locations</b> : {product.locations}
              </h6>
              <h6 className="card-subtitle mb-2 text-muted">
                <b>summary</b> : {product.summary}
              </h6>
              <h6 className="card-subtitle mb-2 text-muted">
                <b>HRemailid</b> : {product.HRemailid}
              </h6>
              <h6 className="card-subtitle mb-2 text-muted">
                <b>contactNo</b> : {product.contactNo}
              </h6>
              <h6 className="card-subtitle mb-2 text-muted">
                <b>walkindetails</b> : {product.walkindetails}
              </h6>
              <h6 className="card-subtitle mb-2 text-muted">
                <b>salaryLPA</b> : {product.salaryLPA}
              </h6>
              <h6 className="card-subtitle mb-2 text-muted">
                <b>company timing</b> : {product.companytiming}
              </h6>
              <h6 className="card-subtitle mb-2 text-muted">
                <b>Job Description</b> : {product.JobDescription}
              </h6>
              <h6 className="card-subtitle mb-2 text-muted">
                <b>year of experience</b> : {product.yearofexperience}
              </h6>
              <h6 className="card-subtitle mb-2 text-muted">
                <b>shift</b> : {product.shift}
              </h6>
              <button className="btn btn-primary">Apply Here</button>
           </div>
           </div>
         </div> 
         </div>
         </>
  );
}