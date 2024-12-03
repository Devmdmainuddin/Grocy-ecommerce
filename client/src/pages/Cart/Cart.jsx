import { useState } from "react";
import Container from "../../components/shared/Container";
import { MdClose } from "react-icons/md";

import Newsletter from "../../components/Home/Newsletter";
import Brand from "../../components/Home/Brand";

const Cart = () => {
    const [count, setCount] = useState(1)
    return (
        <div>
            <Container>
                
                <div>
                    <table className='min-w-full leading-normal my-[50px]'>
                        <thead>
                            <tr>
                                <th
                                    scope='col'
                                    className='px-5 py-3 bg-white  border-b border-gray-200 text-[#184363]  text-left text-lg uppercase font-bold'
                                >
                                    Product
                                </th>
                                <th
                                    scope='col'
                                    className='px-5 py-3 bg-white  border-b border-gray-200 text-[#184363]  text-left text-lg uppercase font-bold'
                                >
                                    Quantity
                                </th>
                                <th
                                    scope='col'
                                    className='px-5 py-3 bg-white  border-b border-gray-200 text-[#184363]  text-left text-lg uppercase font-bold'
                                >
                                    Total
                                </th>
                                <th
                                    scope='col'
                                    className='px-5 py-3 bg-white  border-b border-gray-200 text-[#184363]  text-left text-lg uppercase font-bold'
                                >
                                    Action
                                </th>

                            </tr>
                        </thead>
                        <tbody>{/* User data table row */}
                            <tr className="border-b">
                                <td className='px-5 py-4 whitespace-nowrap flex gap-2'>
                                    <div className="image w-[122px] h-[122px] ">
                                        <img src="/14.jpeg" alt="" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="content">
                                        <h4 className="text-sm text-[#184363]">category</h4>
                                        <h2 className="text-[16px] text-[#184363] font-semibold my-1">Heinz Baby Puree with Peach, Mango, Banana</h2>
                                        <p className="text-[16px] text-[#184363] font-semibold">$30.00</p>
                                        <p className="text-[15px] text-[#184363] my-1">Weight: <span>500gm</span> </p>
                                    </div>
                                </td>
                                <td className='px-5 py-4 whitespace-nowrap'>
                                <div className='w-[90px] border text-[#184363] p-1 rounded-sm'>
                                            <span onClick={() => setCount(count > 1 ? count - 1 : 1)} className='p-2 cursor-pointer text-xl'>-</span>
                                            <span className='p-2'>{count}</span>
                                            <span onClick={() => setCount(count + 1)} className='p-2 cursor-pointer text-xl'>+</span>
                                        </div>
                                </td>


                                <td className='px-5 py-4 whitespace-nowrap'>
                                 <p className="text-[16px] text-[#184363] font-semibold"> $200</p>  
                                </td>
                                <td className='px-5 py-4 whitespace-nowrap'>
                                <MdClose className="text-2xl text-red-500 hover:scale-125 transition-all duration-300" />
                                </td>
                            </tr>
                            <tr className="border-b">
                                <td className='px-5 py-4 whitespace-nowrap flex gap-2'>
                                    <div className="image w-[122px] h-[122px] ">
                                        <img src="/14.jpeg" alt="" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="content">
                                        <h4 className="text-sm text-[#184363]">category</h4>
                                        <h2 className="text-[16px] text-[#184363] font-semibold my-1">Heinz Baby Puree with Peach, Mango, Banana</h2>
                                        <p className="text-[16px] text-[#184363] font-semibold">$30.00</p>
                                        <p className="text-[15px] text-[#184363] my-1">Weight: <span>500gm</span> </p>
                                    </div>
                                </td>
                                <td className='px-5 py-4 whitespace-nowrap'>
                                <div className='w-[90px] border text-[#184363] p-1 rounded-sm'>
                                            <span onClick={() => setCount(count > 1 ? count - 1 : 1)} className='p-2 cursor-pointer text-xl'>-</span>
                                            <span className='p-2'>{count}</span>
                                            <span onClick={() => setCount(count + 1)} className='p-2 cursor-pointer text-xl'>+</span>
                                        </div>
                                </td>


                                <td className='px-5 py-4 whitespace-nowrap'>
                                 <p className="text-[16px] text-[#184363] font-semibold"> $200</p>  
                                </td>
                                <td className='px-5 py-4 whitespace-nowrap'>
                                <MdClose className="text-2xl text-red-500 hover:scale-125 transition-all duration-300" />
                                </td>
                            </tr>
                            <tr className="border-b">
                                <td className='px-5 py-4 whitespace-nowrap flex gap-2'>
                                    <div className="image w-[122px] h-[122px] ">
                                        <img src="/14.jpeg" alt="" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="content">
                                        <h4 className="text-sm text-[#184363]">category</h4>
                                        <h2 className="text-[16px] text-[#184363] font-semibold my-1">Heinz Baby Puree with Peach, Mango, Banana</h2>
                                        <p className="text-[16px] text-[#184363] font-semibold">$30.00</p>
                                        <p className="text-[15px] text-[#184363] my-1">Weight: <span>500gm</span> </p>
                                    </div>
                                </td>
                                <td className='px-5 py-4 whitespace-nowrap'>
                                <div className='w-[90px] border text-[#184363] p-1 rounded-sm'>
                                            <span onClick={() => setCount(count > 1 ? count - 1 : 1)} className='p-2 cursor-pointer text-xl'>-</span>
                                            <span className='p-2'>{count}</span>
                                            <span onClick={() => setCount(count + 1)} className='p-2 cursor-pointer text-xl'>+</span>
                                        </div>
                                </td>


                                <td className='px-5 py-4 whitespace-nowrap'>
                                 <p className="text-[16px] text-[#184363] font-semibold"> $200</p>  
                                </td>
                                <td className='px-5 py-4 whitespace-nowrap'>
                                <MdClose className="text-2xl text-red-500 hover:scale-125 transition-all duration-300" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="flex justify-between">
                        <div>
                        <button  className=" text-center text-[15px] font-bold leading-5 capitalize hover:bg-[#184363] py-2.5 px-[22px]  rounded-full  bg-[#00B881] text-white transition-all duration-500">Continue Shopping</button>
                        </div>
                   
                    <div>
                        <h2 className="text-xl font-bold text-[#184363]">SubTotal : <span className="font-normal">$50.00 USD</span></h2>
                        <p className="text-sm mt-2 text-[#184363]">Taxes and shipping calculated at checkout</p>
                    <button  className=" text-center text-[15px] font-bold leading-5 capitalize hover:bg-[#184363] py-2.5 px-[22px]  rounded-full  bg-[#00B881] text-white transition-all duration-500 mt-6">Check Out</button>
                    </div>
                    </div>
                </div>
            </Container>
            <div className='bg-[#ECF4F6] text-[#184363] '>
            <Newsletter />
            </div>
           
            <Brand/>
        </div>
    );
};

export default Cart;