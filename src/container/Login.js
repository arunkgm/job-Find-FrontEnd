import React from "react";
import Navigation from "../components/Navigation";
import "../StyleSheet/Login.css";
import axios from "axios";
// import{useHistory} from "react-router-dom"
// import {} from "react-router-dom"

function Login() {
   
  const [loginuser, setuser] = React.useState({
    EmailId: "",
    Password: ""
  });
  const handlechange = ({ target: { name, value } }) => {
    setuser({ ...loginuser, [name]: value });
  };

  const handelsubtmit = async (evt) => {          
    try {
      evt.preventDefault();
        const { data } = await axios.post("http://localhost:4001/login", loginuser);
        console.log("auth",data);
        window.localStorage.setItem("auth",data);
        // props.history.push("/Home");
        // window.location ="/Home";
      } catch (err) {
        console.log(err.message)
      }
    // console.log(loginuser);
  };

  // useEffect(() => {        
  //   console.log(loginuser);
  // });

  return (
    <>
    <Navigation/>
    <div className="bodycontent">            
      <div className="main">
        <div className="row">
          <div className="signupform">
            <h2>Login Here</h2>
            <form onSubmit={handelsubtmit}>
              <div className="form-group">
                <input
                  className="form-control type-form-group"
                  type="text"
                  placeholder="Enter Your Email"
                  name="EmailId"
                  value={loginuser.EmailId}
                  onChange={handlechange}
                />
              </div>
              <br />
              <div className="form-group ">
                <input
                  className="form-control type-form-group"
                  type="password"
                  placeholder="Enter Your password"
                  name="Password"
                  value={loginuser.Password}
                  onChange={handlechange}
                />
              </div>
              <br />
              <input type="Submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
export default Login;
