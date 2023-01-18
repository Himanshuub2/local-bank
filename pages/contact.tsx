import React from "react"


type prop = {
    name:string,
    Age:number,
}

const Contact:React.FC<prop> = ({name,Age})=>{
    console.log(name,Age);
    return(
        <div>
            Contact Component

        </div>
    )
}

export default Contact;


export async function getServerSideProps(){

    const val = {
        name:"Himanshu",
        Age:25,
    }

    return{
        props:{val},
    }
}

