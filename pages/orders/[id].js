import Image from "next/image";

const Orders = () => {

    const status = 0

    const statusClass = (index) =>{
        if(index-status<1) return 'done'
        if(index-status===1) return 'inProgress'
        if(index-status>1) return 'undone'
    }
    return ( 
        <main>
            <div className=" max-w-screen-xl m-auto flex flex-col md:flex-row gap-4">
                <div className=" flex-[2]">
                    <div>
                        <table className=" bg-yellow w-full text-left border-separate border-spacing-2">
                            <thead className="max-md:hidden">
                                <tr className="max-md:flex max-md:flex-col text-center">
                                    <th>Order ID</th>
                                    <th>Customer</th>
                                    <th>Address</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className=" max-md:flex max-md:flex-col text-center">
                                    <td>
                                        <span className=" max-md:before:content-['Order_Id:'] max-md:before:mr-1 before:font-bold ">12359789465</span>
                                    </td>
                                    <td>
                                        <span className=" max-md:before:content-['Customer:'] max-md:before:mr-1 before:font-bold ">John Doe</span>
                                    </td>
                                    <td>
                                        <span className=" max-md:before:content-['Address:'] max-md:before:mr-1 before:font-bold ">Elton St.,212-33 LA</span>
                                    </td>
                                    <td>
                                        <span className=" max-md:before:content-['Price:'] max-md:before:mr-1 before:font-bold ">$ 79.80</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className=" flex flex-col md:flex-row justify-between w-full lg:w-[70%] lg:m-auto  ">
                        <div className={`flex flex-col items-center ${statusClass(0)} `}>
                            <Image src={'/img/paid.png'} width={30} height={30} alt="paid" />
                            <span>Payment</span>
                            <div>
                                <Image src={'/img/checked.png'} width={20} height={20} alt="checked" />                                
                            </div>
                        </div>

                        <div className={`flex flex-col items-center ${statusClass(1)}`}>
                            <Image src={'/img/bake.png'} width={30} height={30} alt="bake" />
                            <span>Preparing</span>
                            <div>
                                <Image className="checkedIcon" src={'/img/checked.png'} width={20} height={20} alt="checked" />                                
                            </div>
                        </div>

                        <div className={`flex flex-col items-center ${statusClass(2)}`}>
                            <Image src={'/img/bike.png'} width={30} height={30} alt="bike" />
                            <span>On the way</span>
                            <div>
                                <Image className="checkedIcon" src={'/img/checked.png'} width={20} height={20} alt="checked" />                                
                            </div>
                        </div>

                        <div className={`flex flex-col items-center ${statusClass(3)}`}>
                            <Image src={'/img/delivered.png'} width={30} height={30} alt="delivered" />
                            <span>Delivered</span>
                            <div>
                                <Image className="checkedIcon" src={'/img/checked.png'} width={20} height={20} alt="checked" />                                
                            </div>
                        </div>
                    </div>
                </div>

                <div className=" flex-1">
                    <div className=" bg-gray-900 text-white p-6 lg:p-10 ">
                        <h3 className=" text-xl uppercase font-bold mb-3">Cart Total</h3>
                        <ul>
                            <li><span className=" font-semibold">Subtotal: </span>$79.60</li>
                            <li><span className=" font-semibold">Discount: </span>$0.00</li>
                            <li><span className=" font-semibold">Total: </span>$79.60</li>
                        </ul>
                        <button disabled className=" bg-white text-sm text-teal-500 rounded-sm p-1 mt-2 w-full uppercase font-semibold cursor-not-allowed">Paid</button>
                    </div>
                </div>
            </div>
        </main>
     );
}
 
export default Orders;