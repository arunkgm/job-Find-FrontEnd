import React from "react";
import ComNavigation from "../components/ComNavigation";
// import CmpViews from "../components/Cmpviews";
import CmpHome from "../components/CmpHome";
import ("../StyleSheet/compro.css")




function Companypro(){
    return(
    <div>
      <ComNavigation/>
      <CmpHome/>
    </div>
    )
  
}

export default Companypro;