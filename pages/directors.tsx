import React from "react";
import directors from "../assets/directors.jpg";
import Image from "next/image";
import NewCar from "../components/NewCar";

const Directors = ()=>{
    return(
        <div className="flex flex-col justify-center items-center">
            <NewCar/>
                <h1 className="text-center text-2xl w-1/2 bg-green-300">संचालक मंडळ </h1>
                <Image src = {directors} alt="directors"/>
        </div>
    )


}

export default Directors