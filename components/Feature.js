import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import style from './Feature.module.css';

const Feature = () => {

    const images = [1,2,3]
    const [index, setIndex] = useState(0);

    const [clientWidth, setClientWidth] = useState(0);

    const imgRef = useRef(null)

    const resizeFun = ()=>setClientWidth(imgRef.current.clientWidth)

    useEffect(()=>{
        setClientWidth(imgRef.current.clientWidth)
        window.addEventListener('resize',resizeFun)
        return ()=> window.removeEventListener('resize',resizeFun)
    },[clientWidth])

    const handleIndex = (direction) =>{
        if(direction==='left'){
            setIndex(prevIndex=>{
                return prevIndex !== 0 ? prevIndex-1 : 2
            })   
        }else if(direction==='right'){
            setIndex(prevIndex=>{
                return prevIndex !== 2 ? prevIndex+1 : 0
            })   
        }
    }

    return ( 
        <section className=" bg-pizza h-[50vh] lg:h-[calc(100vh-100px)]">
            <div className={`relative max-w-screen-xl m-auto h-full  overflow-hidden `} >

                <div className={style.arrowContainer} style={{left:0}} onClick={()=>handleIndex('left')}>
                    <Image src={"/img/arrowl.png"} alt="left arrow" width={80} height={80}/>
                </div>

                <div className={`${style.slideContainer}`} style={{transform:`translateX(-${clientWidth*index}px)`}}>
                    {images.map(img=>(
                        <div key={img} className={`${style.slider}`} ref={imgRef}>
                            <Image 
                                className={style.slide} 
                                src={`/img/feature_0${img}.jpg`} 
                                alt={`feature_0${img}.jpg`} 
                                fill
                            />
                        </div>
                    ))}
                </div>             

                <div className={style.arrowContainer} style={{right:0}} onClick={()=>handleIndex('right')}>
                    <Image src={"/img/arrowr.png"} alt="right arrow" width={80} height={80}/>
                </div>
                
            </div>
        </section>
     );
}
 
export default Feature;