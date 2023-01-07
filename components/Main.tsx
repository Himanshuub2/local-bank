import React from "react"

const Main= ()=>{
    return (
        <div className=" w-screen absolute  min-h-min flex flex-row justify-center mt-2">
            <div className ="border-2 border-gray-300 w-5/6 flex flex-row justify-center">
            <div className ="w-1/4 h-96 text-center align-center  ">
                   <h1 className="bg-gradient-to-b from-lime-500 to-lime-300  rounded-lg h-10 text-white font-bold">Vishesh Thev Yojana </h1> 
            </div>
            <div className =" w-3/4 h-96 "> 
                <h1 className="text-center font-medium text-2xl">Loan & Facilities</h1>
                <div className="w-full h-full flex flex-wrap flex-row">
                    <div className="w-1/4 h-1/3 bg-blue-400">Img1</div>
                    <div className="w-1/4 h-1/3 bg-blue-400">Img2</div>
                    <div className="w-1/4 h-1/3 bg-blue-400">Img3</div>
                    <div className="w-1/4 h-1/3 bg-blue-400">Img4</div>
                    <div className="w-1/4 h-1/3 bg-blue-400">Img5</div>
                    <div className="w-1/4 h-1/3 bg-blue-400">Img6</div>
                    <div className="w-1/4 h-1/3 bg-blue-400">Img7</div>
                    <div className="w-1/4 h-1/3 bg-blue-400">Img8</div>
                    
                </div>

            </div>
            </div>
          
        </div>
    )
}

export default Main;