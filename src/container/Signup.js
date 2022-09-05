import React from "react";
import Navigation from "../components/Navigation";
import  axios from "axios";
import "../StyleSheet/Signup.css";


function Signup(props) {
const [ signupuser,  setUser] = React.useState({
  EmailId: "",
  Password:"",
  // Usertype:false,
  // userTypeOption:""
})


// const handleChange = (event) => {
//   setUser({...user,[event.target.name]: event.target.value });
// };

const handlechange = ({ target: { name, value } }) => {
  setUser({ ...signupuser, [name]: value });
};


const handelsubtmit = async (evt) => {          
  evt.preventDefault();
  try {
      const url = "http://localhost:4001/datapush";
      const res = await axios.post(url, signupuser);
      console.log(res);
      // props.history.push("/Home");
      window.location ="/Login";
    } catch {}
  console.log(signupuser);
};



// const handlesubmit = async (e)=>{
// if(user.userTypeOption==='Employee'){
//   user.Usertype = true;
// }
// if(user.userTypeOption==='Company'){
//   user.Usertype = true;
// }
// console.log("user",user)
//   e.preventDefault()
//   try{
// const url = "http://localhost:4001/datapush";
//          const res = await axios.post(url,user);
// console.log(res)
// props.history.push("/Login");
//   }catch{
//    console.log("some Think error");
//   }
  
// }


  return (
    <>
    <Navigation/>
    <div className="body-signin">
      <div className="main">
        <div className="col">
          <div className="row">
            <div className="signupform-signin">
              <h2 className="h2-signin">Sign up Here</h2>
              <form className="form" onSubmit={handelsubtmit}>
              <div className="form-group">
                <input
                  className="form-control formcontrol-signin"
                  type="email"
                  placeholder="Enter Your Email"
                  name="EmailId"
                  onChange={handlechange}
                  value={signupuser.EmailId}
                  id="EmailId"
                />
                </div>
                <span className="text-danger"></span>
                <br />
                <div className="form-group">
                <input
                className="form-control formcontrol-signin"
                onChange={handlechange}
                value={signupuser.Password}
                type="password"
                placeholder="Enter Your password"
                name="Password"
                id="Password" 
                />
                </div>
                <span className="text-danger"></span>
                <br />
                <div className="form-group">
                <input
                className="btn btn-success subtmit-signin"
                 type="Submit" />
                </div>
                <br />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
export default Signup;
