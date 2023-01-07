import Main from "../components/Main"
import React from "react";
import Carousal from "../components/Carousal";
import NewCar from "../components/NewCar";


const Home = ()=>{
    return (
        <div className = " w-screen h-screen bg-[#cde9f2]">
             <NewCar/>
            {/* <Carousal/> */}
           
            <Main/>
        </div>
    )
}

export default Home;