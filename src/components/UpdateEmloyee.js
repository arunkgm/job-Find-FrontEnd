import React from "react";
import "../StyleSheet/Empstyle.css";
import Navigation from "./Navigation";


function UpdateEmloyee() {
  return (
    <>
            <Navigation/>
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
    </>
  );
}

export default UpdateEmloyee;