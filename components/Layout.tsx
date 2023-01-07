import React, { FC } from "react"
import Footer from "./Footer"
import Navbar from "./Navbar"


const Layout = ({children}:any)=>{
    return (
    <>
        <Navbar/>
        <div>{children}</div>
        <Footer/>
    </>
    
    )
}

export default Layout