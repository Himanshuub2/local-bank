import React from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import NewCar from "../components/NewCar";


const Profile = ()=>{
    return(
        <div>
            <NewCar/>
            <div className="flex flex-row">

                <div className="bg-green-200 w-1/4 h-screen">
                    
                </div>
                
                <div className="bg-blue-100 w-3/4 h-screen">
                    <h1 className="font-bold bg-green-200 text-3xl mt-3 mb-6">OUR PROFILE </h1>
                    <p className="mb-5"><BsFillArrowRightCircleFill className="inline mr-2"/>	३१ मार्च २०२२ रोजी पतसंस्थेची एकूण ठेवी रु. २६ कोटी . </p>
                    <p className="mb-5"><BsFillArrowRightCircleFill className="inline mr-2"/>	सातत्याने लेखा परीक्षण वर्ग 'अ' व सातत्याने महत्तम लाभांश देणारी पतसंस्था . </p>
                    <p className="mb-5"><BsFillArrowRightCircleFill className="inline mr-2"/>	निःस्पृहपणे काम करणारे संचालक मंडळ. </p>
                    <p className="mb-5"><BsFillArrowRightCircleFill className="inline mr-2"/>	विनम्र व तत्पर सेवा देणारा कर्मचारी वर्ग. </p>
                    <p className="mb-5"><BsFillArrowRightCircleFill className="inline mr-2"/>    सर्व शाखा व मुख्यालय संपूर्णपणे संगणकीय तंत्रज्ञानासह . </p>
                    <p className="mb-5"><BsFillArrowRightCircleFill className="inline mr-2"/>	अंबड मुख्य शाखा - जालना,तीर्थपुरी,कुंभार,पिंपळगाव - येथे लवकरच शाखा सुरु. </p>
                    <p className="mb-5"><BsFillArrowRightCircleFill className="inline mr-2"/>	९ वर्षांपासून समाजाच्या सर्वांगीण विकासाचा ध्यास घेवून जिल्ह्याच्याही विकासात सहभाग घेणारी पतसंस्था . </p>
                    <p className="mb-5"><BsFillArrowRightCircleFill className="inline mr-2"/>	दीन दुबळ्यांना आधार देणारी पतसंस्था. </p>
                    <p className="mb-5"><BsFillArrowRightCircleFill className="inline mr-2"/>	४ शाखा सह जिल्हा स्थरावर कार्यक्षेत्र वाढ, समाजातील सर्व स्तरातील नागरिकांना आर्थिक पाठबळ देवून सक्षमपणे स्वावलंबी बनण्यासाठी साहाय्यभूत होणारी पतसंस्था. </p>
                    <p className="mb-5"><BsFillArrowRightCircleFill className="inline mr-2"/> 	संस्थेचे सभासद व त्यांच्या पाल्यांची शैक्षणिक, सामाजिक, सांस्कृतिक तसेच एखादा विशेष योगदाना निमित्त गौरव करून त्यांच्या विविध कलागुणांना प्रोत्साहन देणारी पतसंस्था. </p>
                    <p className="mb-5"><BsFillArrowRightCircleFill className="inline mr-2"/>	भारतभर माफक दरात डी. डी. (अ‍ॅट पार चेक) देण्याची सुविधा. </p>
                    <p className="mb-5"><BsFillArrowRightCircleFill className="inline mr-2"/>	कर्ज रकमेवर विमा संरक्षण. </p>
                    <p className="mb-5"><BsFillArrowRightCircleFill className="inline mr-2"/>	संस्थेच्या मुख्य अंबड शाखेमध्ये लॉकर सुविधा उपलब्ध. </p>
                    <p className="mb-5"><BsFillArrowRightCircleFill className="inline mr-2"/>    "जय महेश" ॲप द्वारे इतर बँकांमध्ये व्यवहार करण्याची सुविधा. </p>



                    
                </div>
            </div>
        </div>
    )
}

export default Profile;