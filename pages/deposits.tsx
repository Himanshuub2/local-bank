import React from "react";
import styles from "../styles/Home.module.css";


const Deposits  = ()=>{
    return(
        <div className=" min-h-min mb-4">
            
        <div className="flex flex-row min-h-min">
            <div className="bg-green-100 w-1/4 min-h-min">
                
            </div>
            <div className="bg-green-200 w-3/4 min-h-min">
                <h1 className="font-bold text-2xl mb-6">TYPES OF DEPOSIT <p className="inline text-[15px] text-blue-500 font-medium">(*DEPOSIT INTEREST RATES ARE SUBJECT TO CHANGING FROM TIME TO TIME)</p> </h1>
               {/*  --------------------///----//////////// */}
            <div className="flex justify-center flex-col items-center w-full">
            <h2 className="w-3/4 text-center bg-orange-400 ">:: Deposit Schemes Interest Rates Wef 07/10/2022 ::</h2>
            <table className="w-3/4 ">
                <thead  >
                    <th className={styles.th}>DEPOSIT SCHEME</th>
                    <th className={styles.th}>INTEREST RATE</th>
                </thead>
                <tbody>
                    <tr>
                        <td className={styles.td}>30 Days To 90 Days</td>
                        <td className={styles.td}>6%</td>

                    </tr>

                    <tr>
                        <td className={styles.td}>91 Days To 180 Days</td>
                        <td className={styles.td}>8%</td>

                    </tr>

                    <tr>
                        <td className={styles.td}>181 Days To 365 Days</td>
                        <td className={styles.td}>9%</td>

                    </tr>

                    <tr>
                        <td className={styles.td}>13 Months To 24 Months</td>
                        <td className={styles.td}>10%</td>

                    </tr>

                    <tr>
                        <td className={styles.td}>* Monthly Deposit Scheme (MID)</td>
                        <td className={styles.td}>9%</td>

                    </tr>
                </tbody>
                
               </table>
               {/* ----- */}

               <h2 className="w-3/4 text-center bg-pink-600 mt-6">:: Monthly Interest Deposit Scheme ::</h2>
            <table className="w-3/4 ">
                <thead  >
                    <th className={styles.th}>TYPE DEPOSIT</th>
                    <th className={styles.th}>DEPOSIT AMOUNT</th>
                    <th className={styles.th}>INTEREST RATE(%)</th>
                    <th className={styles.th}>TENURE</th>
                    <th className={styles.th}>EARNED INTEREST</th>


                </thead>
                <tbody>
                    <tr>
                        <td className={styles.td}>Regular</td>
                        <td className={styles.td}>100000</td>
                        <td className={styles.td}>	7.50%</td>
                        <td className={styles.td}>13 Months</td>
                        <td className={styles.td}>Rs. 625/-</td>


                    </tr>

                    <tr>
                        <td className={styles.td}>Senior Citizen, Handicapped, widows and Ex-Armyman</td>
                        <td className={styles.td}>100000</td>
                        <td className={styles.td}>8.00%</td>
                        <td className={styles.td}>13 Months</td>
                        <td className={styles.td}>	Rs. 667/-</td>


                    </tr>

                   
                </tbody>
                
               </table>

               {/* ///// */}


               <h2 className="w-3/4 text-center bg-blue-400 mt-6">:: Saving Deposit Schemes ::</h2>
            <table className="w-3/4 ">
                <thead  >
                    <th className={styles.th}>DEPOSIT SCHEME</th>
                    <th className={styles.th}>INTEREST RATE</th>
                    
                </thead>
                <tbody>
                    <tr>
                        <td className={styles.td}>Saving Deposit</td>
                        <td className={styles.td}>	4.00 %</td>
                    </tr>
                </tbody>
                
               </table>
                
                {/* /////------ */}

                <h2 className="w-3/4 text-center bg-red-600 mt-6">:: Recurring Deposit Schemes ::</h2>
            <table className="w-3/4 ">
                <thead  >
                    <th className={styles.th}>PERIOD</th>
                    <th className={styles.th}>1 YEAR</th>
                    <th className={styles.th}>2 YEAR</th>
                    <th className={styles.th}>3 YEAR</th>
                    <th className={styles.th}>4 YEAR</th>
                    <th className={styles.th}>5 YEAR</th>

                </thead>
                <tbody>
                    <tr>
                        <td className={styles.td}>Interest Rate</td>
                        <td className={styles.td}>8.00%</td>
                        <td className={styles.td}>8.00%</td>
                        <td className={styles.td}>8.00%</td>
                        <td className={styles.td}>8.00%</td>
                        <td className={styles.td}>8.00%</td>
                    </tr>

                    <tr>
                        <td className={styles.td}>Rs. 100 per month Deposit</td>
                        <td className={styles.td}>1,253.00</td>
                        <td className={styles.td}>2,609.00</td>
                        <td className={styles.td}>4,077.00</td>
                        <td className={styles.td}>5,666.00</td>
                        <td className={styles.td}>7,386.00</td>

                    </tr>

                    
                </tbody>
                
               </table>

               {/* ///// */}

               
               <h2 className="w-3/4 text-center bg-green-600 mt-6">:: Special Recurring Deposit Schemes ::</h2>
            <table className="w-3/4 ">
                <thead  >
                    <th className={styles.th}>DEPOSIT RS.</th>
                    <th className={styles.th}>TENURE</th>
                    <th className={styles.th}>INTEREST RATE</th>
                    <th className={styles.th}>MATURITY AMOUNT</th>
                

                </thead>
                <tbody>
                    <tr>
                        <td className={styles.td}>Rs. 500 per Month</td>
                        <td className={styles.td}>75 Months</td>
                        <td className={styles.td}>8.80%</td>
                        <td className={styles.td}>Rs. 50,000/-</td>
                  
                    </tr>

                    <tr>
                        <td className={styles.td}>Rs. 1000 per Month</td>
                        <td className={styles.td}>75 Months</td>
                        <td className={styles.td}>8.80%</td>
                        <td className={styles.td}>Rs. 1,00,000/-</td>
                    </tr>

                    
                </tbody>
                
               </table>
               
            </div>
              
            </div>
            

                
           
        </div>
    </div>
    )
}

export default Deposits;