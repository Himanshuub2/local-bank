import React from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";


const Services  = ()=>{
    return(
        <div>
            
        <div className="flex flex-row">
            <div className="bg-green-200 w-1/4 h-screen">
                
            </div>
            <div className="bg-blue-100 w-3/4 h-screen">
                <h1 className="font-bold text-3xl bg-green-200 mt-3 mb-6">OUR SERVICES </h1>
                <p className="mb-5"><BsFillArrowRightCircleFill className="inline mr-2"/>	एस. एम. एस. सुविधा. </p>
                <p className="mb-5"><BsFillArrowRightCircleFill className="inline mr-2"/>	 	आर. टी. जी. एस. / एन. ई. एफ. टी. सुविधा. </p>
                <p className="mb-5"><BsFillArrowRightCircleFill className="inline mr-2"/>	भारतभर माफक दरात डी. डी. ( अ‍ॅट पार चेक) देण्याची सुविधा. </p>
                <p className="mb-5"><BsFillArrowRightCircleFill className="inline mr-2"/>	संस्थेच्या कोणत्याही शाखेत पैसे भरणा करण्याची व पैसे काढण्याची सुविधा </p>
               
            

                
            </div>
        </div>
    </div>
    )
}

export default Services;