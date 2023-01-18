import React from "react";
import { isTemplateExpression } from "typescript";

type prop = {
  tableData: objProp [],
}

type objProp = {
  branch:string,
  account:string,
  first:string,
  middle:string,
  last:string,
  address:string,
  suggestion:string,


}

export const Table:React.FC <prop> = ({tableData})=>{


  


    return(
        <div className="flex flex-col">
  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
      <div className="overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-white border-b">
            <tr>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Serial No.
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Branch
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Account Type
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                First Name
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Last Name
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Suggestion
              </th>
            </tr>
          </thead>
          <tbody>

            { tableData.map((val,id)=>(
                <>
                <tr className="bg-gray-100 border-b">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{id+1}</td>
                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  {val.branch}
                </td>
                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  {val.account}
                </td>
                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {val.first}

                </td>
                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {val.last}

                </td>

                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {val.suggestion}

                </td>
                </tr>
            
              </>
            ))
                
              

            }
            
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
    )
}