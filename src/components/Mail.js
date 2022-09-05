// import React from "react";
// import Navigation from "./Navigation";
// import {  useParams } from "react-router-dom";
// import axios from "axios";
// import { useEffect, useState } from "react";

// function MailSend() {
//   const authtoken = window.localStorage.getItem("auth");
//   console.log(authtoken);
//   const [data, setData] = useState({});
//   // parsing auth token
//   function parseJwt(token) {
//     var base64Url = token.split(".")[1];
//     var base64 = decodeURIComponent(
//       atob(base64Url)
//         .split("")
//         .map((c) => {
//           return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
//         })
//         .join("")
//     );
//     return JSON.parse(base64);
//   }
//   let a = parseJwt(authtoken);
//   let user = a._id;
//   console.log(user);
//   // get product function & api call
//   const userDataById = async () => {
//     try {
//       //   setIsLoading(true);
//       const { data } = await axios.get(`http://localhost:4001/userId/${user}`);
//       setData(data);
//       //   setIsLoading(false);
//       console.log(data);
//     } catch (error) {
//       console.log(error.message);
//     }
//   };
//   useEffect(() => {
//     userDataById();
//   }, []);

// // Company 
// const { id } = useParams();
// const [product, setProduct] = useState({});

// // get product function & api call
// const getProductById = async () => {
//   try {
//     const { data } = await axios.get(`http://localhost:4001/getPost/${id}`);
//     setProduct(data);
//   } catch (error) {
//     console.log(error.message);
//   }
// };
 
// // useEffect use refresh data
// useEffect(() => {
//   getProductById();
// }, [id]);

//   return (
//     <>
//       <Navigation />
//       <div className="container">
//         <form className=" row">
//           <div className="col-lg-7 col-md-6 col-12  ">
//             <div className="card cardsize">
//               <div className="card-body">
//                 <h4>From</h4>
//                 <h5 className="card-title">Name :{data.Name}</h5>
//                 <h6 className="card-subtitle mb-2 text-muted">
//                   Emailid: {data.Email}
//                 </h6>
//                 <h6 className="card-subtitle mb-2 text-muted">
//                   State : {data.State}
//                 </h6>
//                 <h6 className="card-subtitle mb-2 text-muted">
//                   Degree : {data.Degree}
//                 </h6>
//                 <h4>To</h4>
//                 <div class="form-outline">
//                   <input type="text" id="form14" class="form-control" placeholder="Email" />
//                   <label class="form-label" for="form14">
//                       {product.HRemailid}
//                   </label>
//                 </div>
//                 <div class="form-outline">
//                   <textarea
//                     class="form-control"
//                     id="textAreaExample"
//                     placeholder="Text"
//                     rows="4"
//                   ></textarea>
//                   <label class="form-label" for="textAreaExample">
//                     Message
//                   </label>
//                 </div>
//                 <button className="btn btn-primary">Send Email</button>
//               </div>
//             </div>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// }

// export default MailSend;
