import React from "react";
import {useState} from "react";
import { Table } from "../components/utility/Table";
// import Dropdown from "../components/utility/Dropdown"; 


const initialData = {
  branch:"",
  account:"",
  accountdetails:"",
  accountnumber:"",

  first:"",
  middle:"",
  last:"",
  address:"",
city:"",
pincode:"",
phone:"",
mobile:"",
email:"",

  suggestion:"",
}

const Suggestions = () => {

 

  const [userData,setUserData] = useState(initialData);
  const[firstFlag,setFirstFlag] = useState(false);
  const [admin,] = useState("himanshu");
  const[password,setPassword] = useState("")
  const [check,setCheck] = useState(false);

  const [tableData,setTableData] = useState([])

  const handleClick = async()=>{
   
    // console.log(process.env.NEXT_PUBLIC_MONGODB_URI)
    // console.log(userData);
    
    let response  = await fetch("/api/user",{
      method:"POST",
      body: JSON.stringify(userData),
    })

    // console.log(response);
  }


  const handleCheck = async()=>{
    if(password === admin){
      setCheck(true);


      const suggestionData = async()=>{
        
        const res = await fetch("/api/user",{
            method:"GET",
        })

        setTableData(await res.json())
        
    }

    await suggestionData();

    }
    else{
      setCheck(false)
      
    }
  }

  
  return (
    <div>

<div className = "w-screen min-h-min  flex justify-center items-center flex-col mt-6 mb-12">
<h1 className="bg-orange-400 w-3/4 h-8 text-white font-bold text-center">Your Suggestion Help Us To Improve Our Services</h1>

        
        <form className="w-full max-w-lg mx-auto mt-6" >
  
        <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full px-3">
        <label  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
          Branch
        </label>
        <div className="relative ">
        <svg className="ml-[480px] mt-[15px] h-4  ml-2 absolute ml-[470px]"  aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
  
          <select required name="branch" className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-select" onChange ={(e)=>setUserData({...userData,[e.target.name]:e.target.value})}>
              
            <option>Select</option>
            <option>Ambad</option>
  
          </select>
        </div>  
      </div>
     </div>
     <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full px-3">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
          Account Type
        </label>
        <div className="relative">
        <svg className="ml-[480px] mt-[15px] h-4  ml-2 ml-[470px] absolute"  aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
  
          <select name="account" className="block appearance-none w-full bg-gray-200 border  border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-select" onChange ={(e)=>setUserData({...userData,[e.target.name]:e.target.value})}>
          <option>Select</option>
            <option>Current</option>
            <option>Savings</option>
            <option>Loan</option>
            <option>Term Deposits</option>
          </select>
        </div>  
      </div>
     </div>
    <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3 mb-6 md:mb-0">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
          Account Details
        </label>
        <input required name="accountdetails" onChange ={(e)=>setUserData({...userData,[e.target.name]:e.target.value})} className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" />
        
      
      </div>
      <div className="w-full px-3 mb-6 md:mb-0">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
          Account Number
        </label>
        <input required name="accountnumber" onChange ={(e)=>setUserData({...userData,[e.target.name]:e.target.value})} className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" />
        
      
      </div>
    
      <div className="w-full px-3 mb-6 md:mb-0">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
          First Name
        </label>
        <input required name="first" onChange ={(e)=>setUserData({...userData,[e.target.name]:e.target.value})} className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" />
        
      
      </div>
      <div className="w-full px-3">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
          Middle Name
        </label>
        <input required name="middle" onChange ={(e)=>setUserData({...userData,[e.target.name]:e.target.value})} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" />
      </div>
  
      <div className="w-full  px-3 mt-2">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
          Last Name
        </label>
        <input required name="last" onChange ={(e)=>setUserData({...userData,[e.target.name]:e.target.value})} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" />
      </div>
    </div>
    <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full px-3">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
          Address
        </label>
        <textarea  name="address" onChange ={(e)=>setUserData({...userData,[e.target.name]:e.target.value})} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-address"></textarea>
  
      </div>
    </div>

    <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full px-3">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
          City
        </label>
        <input required name="city"  onChange ={(e)=>setUserData({...userData,[e.target.name]:e.target.value})} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-address"></input>
  
      </div>
    </div>

    <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full px-3">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
          Pin Code
        </label>
        <input required name="pincode" typeof="number" onChange ={(e)=>setUserData({...userData,[e.target.name]:e.target.value})} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-address"></input>
  
      </div>
    </div>

    <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full px-3">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
          Phone
        </label>
        <input name="phone" typeof="number" onChange ={(e)=>setUserData({...userData,[e.target.name]:e.target.value})} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-address"></input>
  
      </div>
    </div>

    <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full px-3">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
          Mobile
        </label>
        <input  required name="mobile" typeof="number" onChange ={(e)=>setUserData({...userData,[e.target.name]:e.target.value})} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-address"></input>
  
      </div>
    </div>

    <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full px-3">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
          Email ID
        </label>
        <input required name="email" typeof="email" onChange ={(e)=>setUserData({...userData,[e.target.name]:e.target.value})} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-address"></input>
  
      </div>
    </div>
  
    <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full px-3">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
          Suggestion/Feedback
        </label>
        <textarea onChange ={(e)=>setUserData({...userData,[e.target.name]:e.target.value})} className="appearance-none block w-full text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-address" name="suggestion"></textarea>
      
      </div>
    </div>
      <div className = "flex justify-center">
    <button type="button" className = "bg-[#00bfff] w-24 h-12 text-white font-medium hover:bg-[#adff2f] border rounded-md" onClick = {handleClick}>Submit</button>
    </div>
    </form>
  
  
  
    {/* <input onChange = {(e)=>setUserData({...userData,[e.target.name]:e.target.value})}></input>
    <button onClick = {handleClick}>Submit</button> */}
  </div>
  <div className = "flex flex-col justify-center items-center w-screen ">
  <button className="items-center bg-blue-500 py-1 px-5 rounded-md text-white font-medium hover:bg-green-500" onClick = {(e)=>setFirstFlag(!firstFlag)}>Admin</button>
  {
    firstFlag &&
    <>
    <p className="mt-4">Please Enter Admin password to check user suggestions</p>
    <input placeholder="Enter Password" className="mt-2 mb-4 border-2 border-gray-500 rounded-md" type="password" onChange = {(e)=>setPassword(e.target.value)}></input>
    <button className="items-center bg-red-900 py-1 px-5 rounded-md text-white font-medium hover:bg-blue-900" onClick = {handleCheck} >Check</button>
    {
      check ?
      <>
      <Table tableData={tableData}/>
      
      </>
      :
      <p className="text-red-500 font-medium">Please Enter Correct Admin Password</p>
    }
    </>
    
  }
    

  </div>

    </div>
  )
};

export default Suggestions;






