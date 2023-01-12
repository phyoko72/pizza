import Image from "next/image";

const PizzaCard = () => {
    return ( 
        <div className="w-full md:w-[22%]  flex flex-col items-center gap-1 p-3 text-center cursor-pointer hover:shadow-inner">

            <Image src="/img/pizza.png" alt="pizza" width={400} height={400} />

            <h1 className=" text-lg font-bold text-pizza">FIORI DI ZUCCA</h1>

            <span className=" text-sm font-bold text-price">$19.90</span>

            <p className=" text-sm text-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing.
            </p>
        </div>
     );
}
 
export default PizzaCard;