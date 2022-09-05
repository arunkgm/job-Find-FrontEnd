import React from "react";
import { Route,Routes } from "react-router-dom";
import Login from "../container/Login";
import Signup from "../container/Signup";
import Home from "../container/Home";
import PostJob from "../container/postjob";
import EmpProfile from "../container/EmpProfile";
import Companypro from "../container/companypro";
import PostViews from "./postViews";
import CmpViews from "./Cmpviews";
import EmployeProfile from "../components/Empolyeprofile"
import Companysignup from "../container/Companysignup"
import Companylogin from "../container/Companylogin";
import ComNavigation from "./ComNavigation";
import UpdateEmloyee from "./UpdateEmloyee";
import MailSend from "./Mail";
function Routing() {
  return (
    <>
    <Routes>
      <Route path="/Signup" element={<Signup/>} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/companysign" element={<Companysignup/>}/>
      <Route path="/companylogin" element={<Companylogin/>}/>
      <Route path="/companyNAV" element={<ComNavigation/>}/>
      <Route path="/EmployeProfile" element={<EmployeProfile/>}/>
      <Route path="/product/:id" element={<PostViews />} />
      <Route path="/CmpViews/:id" element={<CmpViews />} />
      <Route path="/cmpprofile"element={<Companypro/>}/>
      <Route  path="/PostJob" element={<PostJob/>}/>
      <Route path="/Home" element={<Home/>} />
      <Route path="/Profile" element={<EmpProfile/>} />
      <Route path="/UpdateProfile" element={<UpdateEmloyee/>} />
      <Route path="/Send" element={<MailSend/>} />
    </Routes>

    </>
  );
}
export default Routing;
