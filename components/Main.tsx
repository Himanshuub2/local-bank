import React from "react"
import Image from "next/image"
import img1 from "../assets/gallery/img1.png"
import img2 from "../assets/gallery/img2.png"
import img3 from "../assets/gallery/img3.png"
import img4 from "../assets/gallery/img4.png"
import img5 from "../assets/gallery/img5.png"
import img6 from "../assets/gallery/img6.png"

import c3 from "../assets/c3.jpg"

const imgs = [img1,img2,img3,img4,img5,img6]

const Main= ()=>{
    return (
        <div className=" w-screen absolute  min-h-min flex flex-row justify-center mt-2">
            <div className ="border-2 border-gray-200 w-5/6 flex flex-row justify-center">
            <div className ="w-1/4 min-h-min text-center align-center  ">
                   <h1 className="bg-gradient-to-b from-lime-500 to-lime-300  rounded-lg h-10 text-white font-bold">Vishesh Thev Yojana </h1> 
                   <Image src  = {c3} alt = "vishesh" className="h-56 mt-2"/>
                   
            </div>
            <div className =" w-3/4 h-96 min-h-min"> 
                {/* <h1 className="text-center font-medium text-2xl">Loan & Facilities</h1> */}
                <div className="w-full min-h-min flex flex-wrap flex-row">
                
                {
                    imgs.map(item=>(
                        <div className="w-1/4 h-1/3 bg-blue-100 mr-12 ml-4">
                            <Image src = {item} className="w-46 h-36 mb-6 border-2 border-gray-700 rounded-lg" alt = "photos"/>

                        </div>
                    ))
                }
                    
                    
                    
                </div>

            </div>
            </div>
          
        </div>
    )
}

export default Main;