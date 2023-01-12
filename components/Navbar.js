import Image from "next/image";
import style from './Navbar.module.css';

const Navbar = () => {
    return ( 
        <nav className=" bg-pizza sticky top-0 z-10">
            <div className="flex items-center gap-2 m-auto px-4 max-w-screen-xl" style={{height:100}}>
    
                <div className=" text-white flex grow gap-1">
                    <div className="bg-white rounded-100 w-12 h-12 flex justify-center items-center">
                        <Image className="" src={"/img/telephone.png"} width={40} height={40} alt='Call Now'/>
                    </div>
                    <div>
                        <h5 className="text-sm font-bold uppercase ">Order Now</h5>
                        <h2 className="text-lg font-bold">123 456 789</h2>                        
                    </div>
                </div>

                <div className="text-white text-lg max-md:hidden grow-[3]">
                    <ul className=" flex justify-around items-center">
                        <li>Homepage</li>
                        <li>Products</li>
                        <li>Menu</li>
                            <Image src={'/img/Pizza-logo.png'} alt="logo" width={100} height={100} />
                        <li>Events</li>
                        <li>Blog</li>
                        <li>Contact</li>
                    </ul>
                </div>

                <div className="justify-end flex grow">
                    <div className="relative">
                        <Image className="" src={'/img/cart.png'} width={30} height={30} alt="cart"/>
                        <span className={`bg-white absolute ${style.countBadge}`}>2</span>
                    </div>
                </div>
            </div>
        </nav>
     );
}
 
export default Navbar;