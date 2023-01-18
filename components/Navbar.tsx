import { loadGetInitialProps } from "next/dist/shared/lib/utils";
import React from "react"
import logo from "../assets/logo.jpg";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/router'




const Navbar = ()=>{

  
    return (
        <div > 
            <header className = "h-content w-content  border-4 border-orange-500 bg-[#FFFAF0]" >
                <div className = "flex w-content ">
                    <Image src = {logo} className = "w-[206px] h-[180px] md:ml-40 my-[8px] sm:ml-0" alt = "company_logo " ></Image>
                    <div className = "w-full flex flex-col items-center justify-center text-[#ff0000] gap-y-2 md:w-screen">
                        <h2 className = "text-[20px] mb-2">रजी. नं. जे. ए. एल / ए..बी. डी. / आर. एस आर./ डी. आर. /९०१/२८/०५/२०१३</h2>  
                        <h1 className = "text-4xl font-bold">श्री जय महेश महिला नागरी सहकारी पतसंस्था </h1>
                        <h1 className = "text-4xl font-bold ">मर्या,अंबड</h1>
                    </div>
                </div>
            </header>
            <nav className = "bg-gradient-to-b from-[#00bfff] to-[#8cd6ef] to- h-[84px] w-screen ">
                <table className = "w-screen">
                    <tbody >
                        <tr className = "flex justify-evenly items-center h-[84px] [&>*]:w-[100px] [&>*]:items-center [&>*]:text-white  text-[18px] font-medium">
                            <td className = "md:ml-[160px] sm:ml-0 hover:bg-[#adff2f] hover:py-[24px] hover:cursor-pointer text-center"><Link href="/home" className ="px-[10px] py-[15px]">Home</Link></td>
                           <td  className = "hover:bg-[#adff2f] hover:py-[24px] hover:cursor-pointer text-center"> <Link href="/profile" className ="px-[10px] py-[15px]">Profile</Link></td>
                            <td  className = "hover:bg-[#adff2f] hover:py-[24px] hover:cursor-pointer text-center"><Link href="/services"className ="px-[10px] py-[20px]">Services</Link></td>
                            <td className = "hover:bg-[#adff2f] hover:py-[24px] hover:cursor-pointer text-center"><Link href="/loans"className ="px-[10px] py-[25px]">Loans</Link></td>
                            <td  className = "hover:bg-[#adff2f] hover:py-[24px] hover:cursor-pointer text-center"><Link href="/deposits"className ="px-[10px] py-[25px]">Deposits</Link></td>
                            <td  className = "hover:bg-[#adff2f] hover:py-[24px] hover:cursor-pointer text-center"><Link href="/directors"className ="px-[10px] py-[25px]">Directors</Link></td>
                            <td  className = "hover:bg-[#adff2f] hover:py-[24px] hover:cursor-pointer text-center"><Link href="/suggestions"className =" py-[25px]">Suggestions</Link></td>
                            <td  className = "hover:bg-[#adff2f] hover:py-[10px] hover:cursor-pointer text-center"><Link href="/photo"className =" py-[2px]">Photo Gallery</Link></td>

                            <td className = "hover:bg-[#adff2f] hover:py-[24px] hover:cursor-pointer text-center"><Link href="/about"className =" py-[25px]">About Us</Link></td>
                            <td className = "mr-[160px] hover:bg-[#adff2f] hover:py-[24px] hover:cursor-pointer text-center"><Link href="/contact"className =" py-[25px]">Contact Us</Link></td>
                        </tr>
                    </tbody>
                </table>
            </nav>
        </div>
    )
}

export default Navbar;


//<ul className = "h-full text-white text-[19px] flex flex-row justify-evenly items-center">
//<li className = "ml-[160px] hover:bg-[#adff2f] hover:py-[24px] hover:cursor-pointer">Home</li>