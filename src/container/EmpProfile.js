import React from "react";
import Navigation from "../components/Navigation";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


import "../StyleSheet/Empstyle.css";
import { Link } from "react-router-dom";

function EmpProfile(props) {
  const Navigate = useNavigate();

  const authToken = window.localStorage.getItem("auth");
  console.log("userToken",authToken);

  
 const [user, setuser] = React.useState({
  Name: "",
  Email: "",
  State: "",
  ContactNumber: "",
  Address: "",
  Degree: "",
  University: "",
  collageName: "",
  percentage: "",
  keyskills: "",
  ITSkills: "",
  SchoolName: "",
  Mark1: "",
  Mark2: "",
  Department: "",
  CurrentIndustry: "",
  Experience: "",
  Exepectedsalary: "",
  Role: "",
  userId:"",
});

useEffect(() => {
  setuser({ ...user });
},[]);





  const handlechange = ({ target: { name, value } }) => {
    setuser({ ...user, [name]: value });
  };
  const handelsubtmit = async (evt) => {
    evt.preventDefault();
    try {
      const url = ("http://localhost:4001/emppost",
      {
        headers: {
          "Authorization": `Bearer ${authToken}`
        }
      }
      );
      const res = await axios.post(url, user);
      console.log(res);
      localStorage.setItem("auth");
      props.history.push("/Home");
      // window.location ="/Home";
    } catch (err) {
      console.log("error",err)
    }
    console.log(user);
  };


  
  return (
    <>
    <Navigation/>
    <div>
      <div className="container">
        <div className="card border-5 px-3 mt-5 card-height-from">
          <div className="card-body">
            <div className="row">
              <div className="col-12">
                <h4 className="card-title">
                  <b>Resume Headline </b>
                  <div className="card-footer bg-white px-0">
                    <div className="row">
                      <div className="col-md-auto">
                        <p>Required</p>
                        <form
                          onSubmit={handelsubtmit}
                          className="contact-form row"
                        >
                          <h1>Basic Details</h1>
                          <div className="form-field">
                            <input
                              id="name"
                              className="input-text js-input"
                              type="text"
                              name="Name"
                              placeholder="Name"
                              value={user.Name}
                              onChange={handlechange}
                              required
                            />
                            <label className="label" for="name"></label>
                          </div>
                          <br />
                          <div className="form-field">
                            <input
                              id="email"
                              className="input-text js-input"
                              type="text"
                              name="Email"
                              placeholder="E-mail"
                              value={user.Email}
                              onChange={handlechange}
                              required
                            />
                            <label className="label" for="email"></label>
                          </div>
                          <br />
                          <div className="form-field">
                            <input
                              id="company"
                              className="input-text js-input"
                              type="text"
                              name="State"
                              placeholder="State"
                              value={user.State}
                              onChange={handlechange}
                              required
                            />
                            <label className="label" for="company"></label>
                          </div>
                          <br />
                          <div className="form-field">
                            <input
                              id="phone"
                              className="input-text js-input"
                              type="text"
                              name="ContactNumber"
                              placeholder="Contact Number"
                              value={user.ContactNumber}
                              onChange={handlechange}
                              required
                            />
                            <label className="label" for="phone"></label>
                          </div>
                          <div className="form-field">
                            <input
                              id="name"
                              className="input-text js-input"
                              type="text"
                              name="Address"
                              placeholder="Address"
                              value={user.Address}
                              onChange={handlechange}
                              required
                            />
                            <label className="label" for="name"></label>
                          </div>
                          <br />
                          <h1>Education Details</h1>
                          <div className="form-field">
                            <input
                              id="email"
                              className="input-text js-input"
                              type="text"
                              name="Degree"
                              placeholder="Degree"
                              value={user.Degree}
                              onChange={handlechange}
                              required
                            />
                            <label className="label" for="email"></label>
                          </div>
                          <br />
                          <div className="form-field">
                            <input
                              id="company"
                              className="input-text js-input"
                              type="text"
                              name="University"
                              placeholder="University"
                              value={user.University}
                              onChange={handlechange}
                              required
                            />
                            <label className="label" for="company"></label>
                          </div>
                          <br />
                          <div className="form-field">
                            <input
                              id="phone"
                              className="input-text js-input"
                              type="text"
                              name="collageName"
                              placeholder="collage Name"
                              value={user.collageName}
                              onChange={handlechange}
                              required
                            />
                            <label className="label" for="phone"></label>
                          </div>
                          <div className="form-field">
                            <input
                              id="name"
                              className="input-text js-input"
                              type="text"
                              name="percentage"
                              placeholder="percentage"
                              value={user.percentage}
                              onChange={handlechange}
                              required
                            />
                            <label className="label" for="name"></label>
                          </div>
                          <br />
                          <div className="form-field">
                            <input
                              id="email"
                              className="input-text js-input"
                              type="text"
                              name="keyskills"
                              placeholder="key skills"
                              value={user.keyskills}
                              onChange={handlechange}
                              required
                            />
                            <label className="label" for="email"></label>
                          </div>
                          <b />
                          <div className="form-field">
                            <input
                              id="email"
                              className="input-text js-input"
                              type="text"
                              name="ITSkills"
                              placeholder="IT Skills"
                              value={user.ITSkills}
                              onChange={handlechange}
                              required
                            />
                            <label className="label" for="email"></label>
                          </div>
                          <br />
                          <h1>School Details</h1>
                          <div className="form-field">
                            <input
                              id="company"
                              className="input-text js-input"
                              type="text"
                              name="SchoolName"
                              placeholder="School Name"
                              value={user.SchoolName}
                              onChange={handlechange}
                              required
                            />
                            <label className="label" for="company"></label>
                          </div>
                          <br />
                          <div className="form-field">
                            <input
                              id="phone"
                              className="input-text js-input"
                              type="text"
                              name="Mark1"
                              placeholder="10th Mark"
                              value={user.Mark1}
                              onChange={handlechange}
                              required
                            />
                            <label className="label" for="phone"></label>
                          </div>
                          <div className="form-field">
                            <input
                              id="name"
                              className="input-text js-input"
                              type="text"
                              name="Mark2"
                              placeholder="12th Mark"
                              value={user.Mark2}
                              onChange={handlechange}
                              required
                            />
                            <label className="label" for="name"></label>
                          </div>
                          <br />
                          <div className="form-field">
                            <input
                              id="email"
                              className="input-text js-input"
                              type="text"
                              name="Department"
                              placeholder="Department"
                              value={user.Department}
                              onChange={handlechange}
                              required
                            />
                            <label className="label" for="email"></label>
                          </div>
                          <br />
                          <h1>Career Profile</h1>
                          <div className="form-field">
                            <input
                              id="email"
                              className="input-text js-input"
                              type="text"
                              name="CurrentIndustry"
                              placeholder="Current Industry"
                              value={user.CurrentIndustry}
                              onChange={handlechange}
                              required
                            />
                            <label className="label" for="email"></label>
                          </div>
                          <div className="form-field">
                            <input
                              id="email"
                              className="input-text js-input"
                              type="text"
                              name="Experience"
                              placeholder="Experience"
                              value={user.Experience}
                              onChange={handlechange}
                              required
                            />
                            <label className="label" for="email"></label>
                          </div>
                          <div className="form-field">
                            <input
                              id="email"
                              className="input-text js-input"
                              type="text"
                              name="Exepectedsalary"
                              placeholder="Exepected salary"
                              value={user.Exepectedsalary}
                              onChange={handlechange}
                              required
                            />
                            <label className="label" for="email"></label>
                          </div>
                          <div className="form-field">
                            <input
                              id="email"
                              className="input-text js-input"
                              type="text"
                              name="Role"
                              placeholder="Role"
                              value={user.Role}
                              onChange={handlechange}
                              required
                            />
                            <label className="label" for="email"></label>
                          </div>
                          <br />
                          <div>
                            <button
                              className="btn btn-primary btn-sm m-3"
                              type="Submit"
                              style={{ float: "right" }}
                            >
                              Subtmit
                            </button>
                            <button
                             onClick={() => Navigate("/EmployeProfile")}
                             className="btn btn-primary btn-sm m-3"
                               style={{ float: "right" }}
                               >
                              View   
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
export default EmpProfile;
