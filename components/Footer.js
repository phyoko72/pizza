import Image from "next/image";

const Footer  = () => {
    return ( 
        <footer className="h-auto bg-[#222]">
            <div className=" max-w-screen-xl m-auto flex  gap-2 p-2">
                <div className=" flex-1 relative hidden lg:block">
                    <Image src={"/img/bg.png"} alt="shop" fill className=" object-cover"/>
                </div>
                <div className=" flex-[2] text-[#eee] flex flex-col md:flex-row justify-between gap-y-6 md:gap-y-0 md:gap-x-8 p-6">
                    <div className=" flex-1">
                        <h2 className=" text-gray-400 font-bold text-xl">OH YES, WE DID THE LAMA PIZZA, WELL BAKED SLICE OF PIZZA.</h2>
                    </div>
                    <div className="">
                        <h2 className="font-semibold text-lg text-title mb-3">FIND OUR RESTAURANTS</h2>
                        <p className=" mb-3">
                            1654 R. Don Road #304
                            <br /> New York, 85022
                            <br /> (602) 867-1010 
                        </p>

                        <p className=" mb-3">
                            1654 R. Don Road #304
                            <br /> New York, 85022
                            <br /> (602) 867-1010 
                        </p>

                        <p className=" mb-3">
                            1654 R. Don Road #304
                            <br /> New York, 85022
                            <br /> (602) 867-1010 
                        </p>

                        <p className="">
                            1654 R. Don Road #304
                            <br /> New York, 85022
                            <br /> (602) 867-1010 
                        </p>
                    </div> 
                    <div className=" flex-1">
                        <h1 className="font-semibold text-lg text-title mb-3">WORKING HOURS</h1>
                        <p className="mb-4">
                            MONDAY UNTIL FRIDAY
                            <br /> 9:00 ~ 24:00
                        </p>
                        <p>
                            SATURDAY - SUNDAY
                            <br /> 12:00 ~ 24:00
                        </p>
                    </div>                               
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;