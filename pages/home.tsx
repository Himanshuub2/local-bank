import Main from "../components/Main"
import React from "react";

import NewCar from "../components/NewCar";


const Home = ()=>{
    return (
        <div className = " w-screen h-screen bg-[#cde9f2]">
             <NewCar/>
          
           
            <Main/>
        </div>
    )
}

export default Home;