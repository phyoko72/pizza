import Image from "next/image";
import f1 from "../public/img/feature_01.jpg"
import a1 from "../public/img/app_1.jpg"
import a2 from "../public/img/app_2.jpg"
import a3 from "../public/img/app_3.jpg"
import a4 from "../public/img/app_4.jpg"
import a5 from "../public/img/app_5.jpg"
import { useState } from "react";



const Hello = () => {
    const arr = [1,2,3,4,5];

    const imgArr = [a1,a2,a3,a4,a5]

    const [index, setIndex] = useState(0);

    const handleIndex = (direction) =>{
        if(direction==='left'){
            setIndex(prevIndex=>{
                return prevIndex !== 0 ? prevIndex-1 : 3
            })   
        }else if(direction==='right'){
            setIndex(prevIndex=>{
                return prevIndex !== 3 ? prevIndex+1 : 0
            })   
        }
    }
    return ( 
        // <div className=" first:mb-5">

        //     {arr.map(x=>(
        //         <div key={x} className=" w-60 h-14 border "></div>
        //     ))}
            
        //     {/* <div className=" w-60 h-14 border border-green-600"></div>
        //     <div className=" w-60 h-14 border border-green-600"></div>
        //     <div className=" w-60 h-14 border border-green-600"></div>
        //     <div className=" w-60 h-14 border border-green-600"></div> */}
        // </div>

        <div className="max-w-screen-xl m-auto h-full bg-teal-500 p-2">

            <div className=" bg-red-500 p-2 h-full">
                <div className=" bg-blue-600 p-2 h-full">

                    <div className=" w-full h-full">
                        <Image  src={a1} alt="app" />
                    </div>

                    {/* {imgArr.map((x,y)=>(
                        <div key={y} className=" w-full h-full border-4 border-yellow-500">
                            <Image className="" src={x} alt="app" />
                        </div>
                    ))} */}

                    {/* <div className=" w-[100vh]">
                        <Image  src={a2} alt="app" />
                    </div>
                    <div className=" w-[100vh]">
                        <Image  src={a3} alt="app" />
                    </div>
                    <div className=" w-[100vh]">
                        <Image  src={a4} alt="app" />
                    </div>
                    <div className=" w-[100vh]">
                        <Image  src={a5} alt="app" />
                    </div> */}
                </div>
            </div>

            <div className=" mt-5">
                <button onClick={()=>handleIndex("left")} className=" bg-slate-500 text-white px-3 py-2 rounded-sm mr-2">LEFT</button>
                <button onClick={()=>handleIndex("right")} className=" bg-slate-500 text-white px-3 py-2 rounded-sm mr-2">RIGHT</button>
            </div>
        </div>
     );
}
 
export default Hello;