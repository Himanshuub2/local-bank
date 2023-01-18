import Image from "next/image";
import React from "react";

import img1 from "../assets/gallery/img1.png"
import img2 from "../assets/gallery/img2.png"
import img3 from "../assets/gallery/img3.png"
import img4 from "../assets/gallery/img4.png"
import img5 from "../assets/gallery/img5.png"
import img6 from "../assets/gallery/img6.png"
import img7 from "../assets/gallery/img7.png"
import img8 from "../assets/gallery/img8.png"
import img9 from "../assets/gallery/img9.png"
import img10 from "../assets/gallery/img10.png"
import img11 from "../assets/gallery/img11.png"
import img12 from "../assets/gallery/img12.png"
import img13 from "../assets/gallery/img13.png"
import img14 from "../assets/gallery/img14.png"
import img15 from "../assets/gallery/img15.png"
import img16 from "../assets/gallery/img16.png"
import img17 from "../assets/gallery/img17.png"
import img18 from "../assets/gallery/img18.png"
import img19 from "../assets/gallery/img19.png"
import img20 from "../assets/gallery/img20.png"
import img21 from "../assets/gallery/img21.png"
import img22 from "../assets/gallery/img22.png"
import img23 from "../assets/gallery/img23.png"
import img24 from "../assets/gallery/img24.png"
import img25 from "../assets/gallery/img25.png"
import img26 from "../assets/gallery/img26.png"
import img27 from "../assets/gallery/img27.png"
import img28 from "../assets/gallery/img28.png"

import img29 from "../assets/gallery/img29.png"
import img30 from "../assets/gallery/img30.png"
import img31 from "../assets/gallery/img31.png"
import img32 from "../assets/gallery/img32.png"
import img33 from "../assets/gallery/img33.png"
import img34 from "../assets/gallery/img34.png"
import img35 from "../assets/gallery/img35.png"
import img36 from "../assets/gallery/img36.png"


const images = [img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12,img13,img14,img16,img17,img18,img19,img20,img21,img22,img23,img24
                ,img26,img27,img28,img29,img30,img31,img32,img33,img34,img35,img36]





const Photo = ()=>{
    return(
        <div className = "w-screen min-h-min">
            <h1>PHOTO GALLERY</h1>
            <div className="flex justify-center">
                <div className="w-3/4 bg-red-100 flex flex-row flex-wrap">
                    {
                        images.map(item=>(
                            <div className="w-56 mb-[20px]">
                                <Image src = {item} className="w-48 h-48" alt="photos" />
                            </div>
                        ))
                    }
            </div>
            

            </div>
   
          
        </div>
    )
}

export default Photo;