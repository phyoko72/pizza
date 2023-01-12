import Image from "next/image";
import Router, { useRouter } from "next/router";
import { useState } from "react";

const EachPage = ({pizza}) => {
    // console.log('EachPage: ',pizza);

    const router = useRouter()

    const id = router.query.id

    // console.log('Router: ',id);

    const [size, setSize] = useState(0);

    return (

            <div className="w-full h-auto lg:h-[calc(100vh-100px)] p-2">
                <div className=" max-w-screen-xl m-auto h-full">

                    <div className="flex flex-col lg:flex-row  h-full">
                        <div className="flex-1">
                            <div className="relative  m-auto w-[60vw] h-[60vw] md:w-[40vw] md:h-[40vw] lg:w-full lg:h-full">
                                <Image src={pizza.img} alt={pizza.name} fill className=" object-contain"/>
                            </div>
                        </div>

                        <div className="flex-1 lg:flex-[2] flex flex-col justify-center p-2 lg:p-8">
                            <h1 className="text-3xl font-bold mb-2">{pizza.name}</h1>
                            <span className="text-pizza text-lg mb-2">${pizza.price[size]}</span>
                            <p className=" mb-2">{pizza.desc}</p>

                            <div className="">
                                <h2 className="font-bold text-lg mb-4">Choose the size</h2>
                                <div className="flex justify-around md:justify-between md:w-2/5 ">
                                    <div className=" relative w-[30px] h-[30px] cursor-pointer" onClick={()=>setSize(0)}>
                                        <Image src={'/img/size.png'} alt={'small'} fill className=" object-contain"/>
                                        <span className=" absolute -top-2 -right-5 bg-teal-500 text-white rounded-md text-[10px]">Small</span>
                                    </div>
                                    <div className=" relative w-[40px] h-[40px] cursor-pointer" onClick={()=>setSize(1)}>
                                        <Image src={'/img/size.png'} alt={'medium'} fill className=" object-contain"/>
                                        <span className=" absolute -top-2 -right-8 bg-teal-500 text-white rounded-md text-[10px]">Medium</span>
                                    </div>
                                    <div className=" relative w-[50px] h-[50px] cursor-pointer" onClick={()=>setSize(2)}>
                                        <Image src={'/img/size.png'} alt={'large'} fill className=" object-contain"/>
                                        <span className=" absolute -top-2 -right-5 bg-teal-500 text-white rounded-md text-[10px]">Large</span>
                                    </div>
                                </div>

                                <h2 className="font-bold text-lg mb-4">Choose additional ingredients</h2>

                                <div className="flex flex-col items-start md:flex-row p-2 mb-5 gap-4 text-lg lg:text-base">
                                    <div className=" flex items-center justify-center">
                                        <input className=" w-5 h-5 mr-1" type="checkbox" name="double" id="double" />
                                        <label htmlFor="double">Double Ingredients</label>
                                    </div>

                                    <div className=" flex items-center justify-center">
                                        <input className=" w-5 h-5 mr-1" type="checkbox" name="cheese" id="cheese" />
                                        <label htmlFor="cheese">Extra Cheese</label>
                                    </div>

                                    <div className=" flex items-center justify-center">
                                        <input className=" w-5 h-5 mr-1" type="checkbox" name="spicy" id="spicy" />
                                        <label htmlFor="spicy">Spicy Sauce</label>
                                    </div>

                                    <div className=" flex items-center justify-center">
                                        <input className=" w-5 h-5 mr-1" type="checkbox" name="garlic" id="garlic" />
                                        <label htmlFor="garlic">Garlic Sauce</label>
                                    </div>
                                </div>

                                <div>
                                    <input className=" w-10 h-10 mr-2 border-2 border-gray-800 outline-none rounded-sm " type="number" name="quantity" id="quantity" defaultValue={1}/>
                                    <button className=" h-10 bg-pizza text-white px-2 py-1 rounded">Add to Cart</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>

    );
}
 
export default EachPage;

export function getServerSideProps(context){

    const pizza = {
        id: 1,
        img: '/img/pizza.png',
        name: 'CAMPAGNOLA',
        price:[19.9,23.9,27.9],
        desc:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, magnam iure. In inventore, est assumenda harum deserunt quae accusamus.'
    }

    const {id} = context.params
    // console.log('Context: ',context);
    return{
        props:{
            pizza
        }
    }
    
}