import React from "react";
import ComNavigation from "../components/ComNavigation";
import "../StyleSheet/postjob.css";
import axios from "axios";

function PostJob(props) {
    const [user,setuser] = React.useState({
      companyname: "",
      typeofcompany: "",
      yearofrunning: "",
      locations: "",
      summary: "",
      HRemailid: "",
      contactNo: "",
      walkindetails: "",
      salaryLPA: "",
      companytiming: "",
      jobrole: "",
      JobDescription: "",
      yearofexperience: "",
      qulification: "",
      shift: ""
    });
    const handlechange = ({ target: { name, value } }) => {
      setuser({ ...user, [name]: value });
    };
    const handelsubtmit =  async (evt) => {          
       evt.preventDefault();
      try {
          const url = "http://localhost:4001/posts";
          const res = await axios.post(url, user); // req id
          console.log(res);
          localStorage.setItem("auth");
          props.history.push("/Home");
          // window.location ="/Home";
        } catch {}
      console.log("from hs",user);
    };
  return (
    <>
    <ComNavigation/>
    <div>
      <div className="container">
        <div className="card border-5 px-3 mt-5 card-height">
          <div className="card-body">
            <div className="row">
              <div className="col-12">
                <h4 className="card-title">
                  <b>Post your job </b>
                  <div className="card-footer bg-white px-0">
            <div className="row">
              <div className="col-md-auto">
                <p>Required</p>
                <form onSubmit={handelsubtmit} className="contact-form row">
                  <h1>company details</h1>
                  <div className="form-field">
                    <input
                      id="name"
                      className="input-text js-input"
                      type="text"
                      name="companyname"
                      onChange={handlechange}
                      value={user.companyname}
                      placeholder="company name"
                      required
                    />
                    <label className="label" for="name">
                    </label>
                  </div>
                  <br />
                  <div className="form-field">
                    <input
                      id="email"
                      className="input-text js-input"
                      type="text"
                      name="typeofcompany"
                      onChange={handlechange}
                      value={user.typeofcompany}
                      placeholder="type of company"
                      required
                    />
                    <label className="label" for="email">
                    </label>
                  </div>
                  <br />
                  <div className="form-field">
                    <input
                      id="company"
                      className="input-text js-input"
                      type="text"
                      name="yearofrunning"
                      onChange={handlechange}
                      value={user.yearofrunning}
                      placeholder="year of running"
                      required
                    />
                    <label className="label" for="company">
                    </label>
                  </div>
                  <br />
                  <div className="form-field">
                    <input
                      id="phone"
                      className="input-text js-input"
                      type="text"
                      name="locations"
                      onChange={handlechange}
                      value={user.locations}
                      placeholder="locations"
                      required
                    />
                    <label className="label" for="phone">
                    </label>
                  </div>
                  <div className="form-field">
                    <input
                      id="name"
                      className="input-text js-input"
                      type="text"
                      name="summary"
                      onChange={handlechange}
                      value={user.summary}
                      placeholder="summary"
                      required
                    />
                    <label className="label" for="name">
                    </label>
                  </div>
                  <br />
                  <h1>contact details</h1>
                  <div className="form-field">
                    <input
                      id="email"
                      className="input-text js-input"
                      type="text"
                      name="HRemailid"
                      onChange={handlechange}
                      value={user.HRemailid}
                      placeholder="HR email id"
                      required
                    />
                    <label className="label" for="email">
                    </label>
                  </div>
                  <br />
                  <div className="form-field">
                    <input
                      id="company"
                      className="input-text js-input"
                      type="text"
                      name="contactNo"
                      onChange={handlechange}
                      value={user.contactNo}
                      placeholder="contact no"
                      required
                    />
                    <label className="label" for="company">
                    </label>
                  </div>
                  <br />
                  <div className="form-field">
                    <input
                      id="phone"
                      className="input-text js-input"
                      type="text"
                      name="walkindetails"
                      onChange={handlechange}
                      value={user.walkindetails}
                      placeholder="walk-in-details"
                      required
                    />
                    <label className="label" for="phone">
                    </label>
                  </div>
                  <div className="form-field">
                    <input
                      id="name"
                      className="input-text js-input"
                      type="text"
                      name="salaryLPA"
                      onChange={handlechange}
                      value={user.salaryLPA}
                      placeholder="salary LPA"
                      required
                    />
                    <label className="label" for="name">
                    </label>
                  </div>
                  <br />
                  <div className="form-field">
                    <input
                      id="email"
                      className="input-text js-input"
                      type="text"
                      name="companytiming"
                      onChange={handlechange}
                      value={user.companytiming}
                      placeholder="company timeing"
                      required
                    />
                    <label className="label" for="email">
                    </label>
                  </div>
                  <br />
                  <h1>job details</h1>
                  <div className="form-field">
                    <input
                      id="company"
                      className="input-text js-input"
                      type="text"
                      name="jobrole"
                      onChange={handlechange}
                      value={user.jobrole}
                      placeholder="job role"
                      required
                    />
                    <label className="label" for="company">
                    </label>
                  </div>
                  <br />
                  <div className="form-field">
                    <input
                      id="phone"
                      className="input-text js-input"
                      type="text"
                      name="JobDescription"
                      onChange={handlechange}
                      value={user.JobDescription}
                      placeholder="Job Description"
                      required
                    />
                    <label className="label" for="phone">
                    </label>
                  </div>
                  <div className="form-field">
                    <input
                      id="name"
                      className="input-text js-input"
                      type="text"
                      name="yearofexperience"
                      onChange={handlechange}
                      value={user.yearofexperience}
                      placeholder="year of experience"
                      required
                    />
                    <label className="label" for="name">
                    </label>
                  </div>
                  <br />
                  <div className="form-field">
                    <input
                      id="email"
                      className="input-text js-input"
                      type="text"
                      name="qulification"
                      onChange={handlechange}
                      value={user.qulification}
                      placeholder="qulification"
                      required
                    />
                    <label className="label" for="email">
                    </label>
                  </div>
                  <br />
                  <div className="form-field">
                    <input
                      id="company"
                      className="input-text js-input"
                      type="text"
                      name="shift"
                      onChange={handlechange}
                      value={user.shift}
                      placeholder="shift"
                      required
                    />
                    <label className="label" for="company">
                    </label>
                  </div>
                  <br />
                  <div>
                    {/* <div
                      class="btn btn-primary btn-sm m-3"
                      style={{float:"right"}}
                      type="Submit"
                    >
                      post
                    </div> */}
                    <button className="btn btn-primary btn-sm m-3" type="Submit">post</button>
                    {/* <div
                      class="btn btn-primary btn-sm m-3"
                      style={{float:"right"}}
                    >
                      cancel
                    </div> */}
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
export default PostJob;
