// import files
import React from "react";
import Navigation from "./Navigation";
import "../StyleSheet/Empprofile.css";
import { useEffect, useState } from "react";
import axios from "axios";

// Product info page
export default function EmployeProfile() {
  // Auth Token
  const authtoken = window.localStorage.getItem("auth");
  console.log(authtoken);
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);



  // get product function & api call
  const userDataById = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get("http://localhost:4001/getprofileemp");
      setData(data);
      setIsLoading(false);
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    userDataById();
  }, []);

  return (
    <>
      <Navigation />
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-12  mt-5">
            {isLoading && (
              <div className="d-flex justify-content-center">
                <div className="spinner-border text-primary" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            )}
            <div className="card cardsize">
              <div className="card-body">
                <table className="table table-striped table-hover Empcenter ">
                  <thead>
                    <tr>
                      <th>Header</th>
                      <br />
                      <br />
                      <br />
                      <th>Employe Details</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <td>
                      <tr>Name</tr>
                      <br />
                      <tr>Emailid</tr>
                      <br />
                      <tr>State</tr>
                      <br />
                      <tr>Contact Number</tr>
                      <br />
                      <tr>Address</tr>
                      <br />
                      <tr>Degree</tr>
                      <br />
                      <tr>University</tr>
                      <br />
                      <tr>collage Name</tr>
                      <br />
                      <tr>percentage</tr>
                      <br />
                      <tr>key skills</tr>
                      <br />
                      <tr>ITSkills</tr>
                      <br />
                      <tr>School Name</tr>
                      <br />
                      <tr>10THMark</tr>
                      <br />
                      <tr>12THMark</tr>
                      <br />
                      <tr>Department</tr>
                      <br />
                      <tr>Current Industry</tr>
                      <br />
                      <tr>Experience</tr>
                      <br />
                      <tr>Exepected salary</tr>
                      <br />
                      <tr>Role</tr>
                    </td>
                    <br />
                    <br />
                    <br />
                    <td>
                      <tr>{data.Name}</tr>
                      <br />
                      <tr>{data.Email}</tr>
                      <br />
                      <tr>{data.State}</tr>
                      <br />
                      <tr> {data.ContactNumber}</tr>
                      <br />
                      <tr>{data.Address}</tr>
                      <br />
                      <tr>{data.Degree}</tr>
                      <br />
                      <tr> {data.University}</tr>
                      <br />
                      <tr>{data.collageName}</tr>
                      <br />
                      <tr>{data.percentage}</tr>
                      <br />
                      <tr>{data.keyskills}</tr>
                      <br />
                      <tr> {data.ITSkills}</tr>
                      <br />
                      <tr>{data.SchoolName}</tr>
                      <br />
                      <tr>{data.Mark1}</tr>
                      <br />
                      <tr>{data.Mark1}</tr>
                      <br />
                      <tr>{data.Department}</tr>
                      <br />
                      <tr>{data.CurrentIndustry}</tr>
                      <br />
                      <tr>{data.Experience}</tr>
                      <br />
                      <tr> {data.Exepectedsalary}</tr>
                      <br />
                      <tr>{data.Role}</tr>
                    </td>
                    <td>
                      <tr>
                        <button>Edit</button>
                      </tr>
                      <br />
                      <tr>
                        <button>Edit</button>
                      </tr>
                      <br />
                      <tr>
                        <button>Edit</button>
                      </tr>
                      <br />
                      <tr>
                        <button>Edit</button>
                      </tr>
                      <br />
                      <tr>
                        <button>Edit</button>
                      </tr>
                      <br />
                      <tr>
                        <button>Edit</button>
                      </tr>
                      <br />
                      <tr>
                        <button>Edit</button>
                      </tr>
                      <br />
                      <tr>
                        <button>Edit</button>
                      </tr>
                      <br />
                      <tr>
                        <button>Edit</button>
                      </tr>
                      <br />
                      <tr>
                        <button>Edit</button>
                      </tr>
                      <br />
                      <tr>
                        <button>Edit</button>
                      </tr>
                      <br />
                      <tr>
                        <button>Edit</button>
                      </tr>
                      <br />
                      <tr>
                        <button>Edit</button>
                      </tr>
                      <br />
                      <tr>
                        <button>Edit</button>
                      </tr>
                      <br />
                      <tr>
                        <button>Edit</button>
                      </tr>
                      <br />
                      <tr>
                        <button>Edit</button>
                      </tr>
                      <br />
                      <tr>
                        <button>Edit</button>
                      </tr>
                      <br />
                    </td>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <br />
        </div>
      </div>
    </>
  );
}
