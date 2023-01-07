import React from "react";

const Suggestions = () => {
  return (<>
    <div className =" flex justify-center    w-full">
        <h1 className = " text-3xl mt-6  font-bold">Suggestion / Feedback Form</h1>
        </div>
    <div className = "w-screen h-screen  flex justify-center mt-6 mb-12">
        
      <form className="w-full max-w-lg mx-auto mt-6">

      <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
        Branch
      </label>
      <div className="relative ">
      <svg className="w-[950px] mt-[15px] h-4  ml-2 absolute"  aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>

        <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-select">
            
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
      <svg className="w-[950px] mt-[15px] h-4  ml-2 absolute"  aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>

        <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-select">
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
        First Name
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" />
      
    
    </div>
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
        Middle Name
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" />
    </div>

    <div className="w-full  px-3 mt-2">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
        Last Name
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" />
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
        Address
      </label>
      <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-address"></textarea>

    </div>
  </div>

  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
        Suggestion/Feedback
      </label>
      <textarea className="appearance-none block w-full text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-address"></textarea>
    
    </div>
  </div>
    <div className = "flex justify-center">
  <button className = "bg-[#00bfff] w-24 h-12 text-white font-medium hover:bg-[#adff2f] border rounded-md">Submit</button>
  </div>
  </form>
</div>
</>
  );
};

export default Suggestions;
