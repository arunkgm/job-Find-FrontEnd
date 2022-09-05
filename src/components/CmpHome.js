import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import "../StyleSheet/Jobcard.css";


export default function CmpHome() {
  const URL = "http://localhost:4001/getempall";

  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState([]);
  const [query, setQuery] = useState("");

  const getUsers = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(URL);
      setIsLoading(false);
      setUser(data);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <div className="container col-12 mt-1 ">
        <div className="row">
          <div class="container">
            <div class="row">
              <h2>FIND YOUR EMPLOYEE</h2>
            </div>
          </div>
          <br />
          <div class="container">
            <div class="row">
              <div class="input-group">
                <input
                  type="text"
                  className="form-control rounded search"
                  placeholder="searching your best Employe"
                  onChange={(event) => setQuery(event.target.value)}
                />
                <br />
                <br />
              </div>
            </div>
          </div>
          <br />
          <div className="container">
            {isLoading && (
              <div className="d-flex justify-content-center">
                <div className="spinner-border text-primary" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            )}
          </div>
          <br/>
          <br/>
          <br/>
          <div>
            {" "}
            {user
              .filter((data) =>
                data.Degree.toLocaleLowerCase().includes(query)
              )
              .map((data) => (
                <EmpDetails
                  _id={data._id}
                  Name={data.Name}
                  Email={data.Email}
                  State={data.State}
                  Degree={data.Degree}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

//jobcardtemolet

 function EmpDetails({ Name, Email, State, Degree, _id }) {
  const Navigate = useNavigate();
  return (
    <>
      <div className="col-lg-12 col-md-6 col-12  ">
        <div className="card cardsize">
          <div className="card-body">
            <h5 className="card-title">Name :{Name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">
            Emailid: {Email}
            </h6>
            <h6 className="card-subtitle mb-2 text-muted">
            State : {State}
            </h6>
            <h6 className="card-subtitle mb-2 text-muted">
            Degree : {Degree}
            </h6>
            <button onClick={() => Navigate("/CmpViews/" + _id)}>info</button>
          </div>
        </div>
      </div>
      
    </>
  );
}
