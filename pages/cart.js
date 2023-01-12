import Image from "next/image";

const Cart = () => {
    return ( 
        <main className="  ">
            <div className=" max-w-screen-xl m-auto flex flex-col lg:flex-row p-3 lg:p-6">
                <div className=" flex-[2] ">
                    <table className=" bg-yellow w-full text-center border-separate lg:border-spacing-2">
                        <thead className=" max-lg:hidden ">
                            <tr>
                                <th>Product</th>
                                <th>Name</th>
                                <th>Extras</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody className="  ">
                            <tr className="flex flex-col leading-none lg:leading-normal mb-3 lg:mb-0 lg:flex-none lg:table-row ">
                                <td className=" relative w-[30vw] h-[30vw] lg:w-auto lg:h-auto m-auto">
                                    <div className="  w-24 h-24 ">
                                        <Image src={'/img/pizza.png'} alt='pizza' fill style={{objectFit:'cover'}} />
                                    </div>
                                </td>
                                <td>
                                    <span className=" text-lg">COROLZO</span>
                                </td>
                                <td>
                                    <span className=" ">DOUBLE INGREDIENTS, SPICY SAUCE</span>
                                </td>
                                <td>
                                    <span className=" font-semibold text-sm max-lg:before:content-['Price:'] max-lg:before:mr-1 before:font-bold">$ 19.90</span>
                                </td>
                                <td>
                                    <span className=" max-lg:before:content-['Quantity:'] max-lg:before:mr-1 before:font-bold ">2</span>
                                </td>
                                <td>
                                    <span className=" font-semibold max-lg:before:content-['Total:'] max-lg:before:mr-1 before:font-bold">$ 39.80</span>
                                </td>
                            </tr>
                            <tr className="flex flex-col  leading-none lg:leading-normal mb-3 lg:mb-0 lg:flex-none lg:table-row ">
                                <td className=" relative w-[30vw] h-[30vw] m-auto lg:w-auto lg:h-auto">
                                    <div className=" w-24 h-24">
                                        <Image src={'/img/pizza.png'} alt='pizza' fill style={{objectFit:'cover'}} />
                                    </div>
                                </td>
                                <td>
                                    <span className=" text-lg">COROLZO</span>
                                </td>
                                <td>
                                    <span className=" text-sm">DOUBLE INGREDIENTS, SPICY SAUCE</span>
                                </td>
                                <td>
                                    <span className=" font-semibold text-sm">$ 19.90</span>
                                </td>
                                <td>
                                    <span>2</span>
                                </td>
                                <td>
                                    <span className=" font-semibold ">$ 39.80</span>
                                </td>
                            </tr>
                            <tr className="flex flex-col  leading-none lg:leading-normal mb-3 lg:mb-0 lg:flex-none lg:table-row ">
                                <td className=" relative w-[30vw] h-[30vw] m-auto lg:w-auto lg:h-auto">
                                    <div className=" w-24 h-24">
                                        <Image src={'/img/pizza.png'} alt='pizza' fill style={{objectFit:'cover'}} />
                                    </div>
                                </td>
                                <td>
                                    <span className=" text-lg">COROLZO</span>
                                </td>
                                <td>
                                    <span className=" text-sm">DOUBLE INGREDIENTS, SPICY SAUCE</span>
                                </td>
                                <td>
                                    <span className=" font-semibold text-sm">$ 19.90</span>
                                </td>
                                <td>
                                    <span>2</span>
                                </td>
                                <td>
                                    <span className=" font-semibold ">$ 39.80</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="flex-1 p-1">
                    <div className=" bg-gray-900 text-white p-6 lg:p-10 ">
                        <h3 className=" text-xl uppercase font-bold mb-3">Cart Total</h3>
                        <ul>
                            <li><span className=" font-semibold">Subtotal: </span>$79.60</li>
                            <li><span className=" font-semibold">Discount: </span>$0.00</li>
                            <li><span className=" font-semibold">Total: </span>$79.60</li>
                        </ul>
                        <button className=" bg-white text-sm text-gray-700 rounded-sm p-1 mt-2 w-full uppercase font-semibold">Checkout Now!</button>
                    </div>
                </div>
            </div>

        </main>
     );
}
 
export default Cart;