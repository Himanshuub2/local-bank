import { loadGetInitialProps } from "next/dist/shared/lib/utils";
import React from "react"
import logo from "../assets/logo.jpg";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/router'




const Navbar = ()=>{

  
    return (
        <div > 
            <header className = "h-content w-screen  border-4 border-orange-500 bg-[#FFFAF0]" >
                <div className = "flex w-screen ">
                    <Image src = {logo} className = "w-[206px] h-[180px] md:ml-40 my-[8px] sm:ml-0" alt = "company_logo " ></Image>
                    <div className = "w-full flex flex-col items-center justify-center text-[#ff0000] gap-y-2 md:w-screen">
                        <h2 className = "text-[20px] mb-2">रजी. नं. जे. ए. एल / ए..बी. डी. / आर. एस आर./ डी. आर. /९०१/२८/०५/२०१३</h2>  
                        <h1 className = "text-4xl font-bold">श्री जय महेश महिला नागरी सहकारी पतसंस्था </h1>
                        <h1 className = "text-4xl font-bold ">मर्या,अंबड</h1>
                    </div>
                </div>
            </header>
            <nav className = "w-full bg-gradient-to-b from-[#00bfff] to-[#8cd6ef] to- h-[84px] w-screen  ">
                <ul className="h-full w-full flex flex-row  justify-evenly items-center ">
                    <Link href="/home"><li className=" px-4 h-full py-6 text-white font-bold hover:cursor-pointer hover:bg-[#adff2f] ">Home</li></Link>
                    <Link href = "/profile"><li className=" px-4 h-full py-6 text-white font-bold hover:cursor-pointer hover:bg-[#adff2f]">Profile</li></Link>
                    <Link href = "/services"><li className=" px-4 h-full py-6 text-white font-bold hover:cursor-pointer hover:bg-[#adff2f]">Services</li></Link>
                    <Link href = "/loans"><li className=" px-4 h-full py-6 text-white font-bold hover:cursor-pointer hover:bg-[#adff2f]">Loans</li></Link>
                    <Link href = "/deposits"><li className=" px-4 h-full py-6 text-white font-bold hover:cursor-pointer hover:bg-[#adff2f]">Deposits</li></Link>
                    <Link href = "/directors"><li className=" px-4 h-full py-6 text-white font-bold hover:cursor-pointer hover:bg-[#adff2f]">Directors</li></Link>
                    <Link href = "/suggestions"><li className=" px-4 h-full py-6 text-white font-bold hover:cursor-pointer hover:bg-[#adff2f]">Suggestions</li></Link>
                    <Link href = "/photo"><li className=" px-4 h-full py-6 text-white font-bold hover:cursor-pointer hover:bg-[#adff2f]">Photo Gallery</li></Link>
                    <Link href = "/about"><li className=" px-4 h-full py-6 text-white font-bold hover:cursor-pointer hover:bg-[#adff2f]">About Us</li></Link>
                    <Link href = "/contact"><li className=" px-4 h-full py-6 text-white font-bold hover:cursor-pointer hover:bg-[#adff2f]">Contact Us</li></Link>


                    

                </ul>

                {/* <Link href="/">
      <div className="text-white h-full hover:bg-gray-600 cursor-pointer">Home</div>
    </Link>
    <Link href="/profile">
      <div className="text-white hover:text-gray-600 cursor-pointer">Profile</div>
    </Link>
    <Link href="/about-us">
      <div className="text-white hover:text-gray-600 cursor-pointer">About Us</div>
    </Link> */}
                {/* <table className = "w-screen">
                    <tbody className="w-screen">
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
                </table> */}
            </nav>
        </div>
    )
}

export default Navbar;


//<ul className = "h-full text-white text-[19px] flex flex-row justify-evenly items-center">
//<li className = "ml-[160px] hover:bg-[#adff2f] hover:py-[24px] hover:cursor-pointer">Home</li>