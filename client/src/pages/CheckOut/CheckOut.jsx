import { Link } from "react-router-dom";
import Container from "../../components/shared/Container";

const CheckOut = () => {
    return (
        <div className="mt-[50px]">
            <Container>
                <div className="flex gap-6">
                    <div>
                        <div>
                            <div className="flex items-center justify-between">
                                <h2 className="text-2xl font-semibold ">Contact</h2>
                                <Link className="underline text-[#184363] ">Log In</Link>
                            </div>

                            <div className="mt-3">
                                <input type="text" name="" id="" className="py-2.5 px-[20px] border rounded-sm" placeholder="Email Or Mobile Phone Number" />
                                <div className="flex gap-1 items-center mt-2">
                                    <input type="checkbox" name="checkbox" id="" />
                                    <label htmlFor="checkbox">Email me with news and offers</label>
                                </div>
                            </div>
                        </div>
                        <div className="mt-6">
                            <h2 className="text-2xl font-semibold">Delivery</h2>

                            <form action="" className="flex gap-6 flex-col mt-[50px]">
                                <input type="text" name="name" id="name" placeholder="Country/Region  " className="w-full py-2.5 px-[20px] border rounded-sm outline-0" />
                                <div className="flex gap-6 w-full">
                                    <input type="text" name="fname" id="fname" placeholder="First Name(Optional)  " className="w-full py-2.5 px-[20px] border rounded-sm outline-0" />
                                    <input type="text" name="lname" id="lname" placeholder="Last Name  " className="w-full py-2.5 px-[20px] border rounded-sm outline-0" />
                                </div>

                                <input type="text" name="address" placeholder="Address " className="w-full py-2.5 px-[20px] border rounded-sm outline-0" />
                                <input type="text" name="name" id="name" placeholder="Apartment, Suite , etc.(Optional)  " className="w-full py-2.5 px-[20px] border rounded-sm outline-0" />
                                <div className="flex gap-6 w-full">
                                    <input type="text" name="city" placeholder="City " className="w-full py-2.5 px-[20px] border rounded-sm outline-0" />
                                    <select name="" id="" className="w-full py-2.5 px-[20px] border rounded-sm outline-0">
                                        <option value="State">State</option>
                                    </select>
                                    <input type="text" name="zip" id="zip" placeholder="ZIP Code " className="w-full  border rounded-sm outline-0" />
                                </div>
                                <div className="flex gap-1 items-center mt-2">
                                    <input type="checkbox" name="checkbox" id="" />
                                    <label htmlFor="checkbox">Save this information for next time</label>
                                </div>
                            </form>


                        </div>
                        <div className="mt-6">
                            <h2 className="text-2xl font-semibold">Payment</h2>
                            <p className="capitalize text-[#282828] mt-2">all transactions are secure and encryted</p>
                            <div className="bg-[#F4F4F4] mt-6">
                                <div className="flex justify-between items-center p-6 border rounded-lg bg-[#EEF5FE]">
                                    <h3>Credit card</h3>
                                    <span>slds</span>
                                </div>
                                <div className="p-6 flex flex-col gap-6">
                                    <input type="text" name="" id="" placeholder="Name on Card " className="w-full  py-2.5 px-3 border rounded-sm outline-0" />
                                    <div className="flex gap-6">
                                        <input type="text" name="" id="" placeholder="Expiration Date " className="w-full  py-2.5 px-3 border rounded-sm outline-0" />
                                        <input type="text" name="" id="" placeholder="Security Code " className="w-full  py-2.5 px-3 border rounded-sm outline-0" />

                                    </div>
                                    <input type="number" name="" id="" placeholder=" Number on Card" className="w-full  py-2.5  px-3 border rounded-sm outline-0" />
                                    <div className="flex gap-1 items-center mt-2">
                                        <input type="checkbox" name="checkbox" id="" />
                                        <label htmlFor="checkbox">Save this information for next time</label>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <button className="py-2.5 px-[20px] text-white bg-[#00B881] mt-4">play now </button>

                    </div>
                    <div className="bg-[#F5F5F5] p-6 flex-1 ">
                        <div className="flex gap-5 ">
                            <div className="image w-[62px] h-[62px] border rounded-sm relative">
                                <img src="" alt="" />
                                <span className="w-[22px] h-p22px] rounded-full bg-[#184363] absolute -top-[11px] -right-[11px] text-white flex justify-center items-center">1</span>
                            </div>
                            <div className="content flex justify-between flex-1">
                                <div>
                                    <h2>  Amaranthus 1 Bunch (Approx 160 g - 1500 g) </h2>
                                    <p>500gm </p>
                                </div>

                                <p><span className="text-[#184363]">$60.00</span> </p>
                            </div>

                        </div>
                        <div className="flex gap-5 mt-6">
                            <div className="image w-[62px] h-[62px] border rounded-sm relative">
                                <img src="" alt="" />
                                <span className="w-[22px] h-p22px] rounded-full bg-[#184363] absolute -top-[11px] -right-[11px] text-white flex justify-center items-center">1</span>
                            </div>
                            <div className="content flex justify-between flex-1">
                                <div>
                                    <h2>  Amaranthus 1 Bunch (Approx 160 g - 1500 g) </h2>
                                    <p>500gm </p>
                                </div>

                                <p><span className="text-[#184363]">$60.00</span> </p>
                            </div>

                        </div>
                        <div>
                            <div className="flex items-center justify-between mt-4">
                                <p>SubTotal <span> </span> items</p>
                                <span>$50.00</span>
                            </div>
                            <div className="flex items-center justify-between mt-4">
                                <p>shipping <span> </span> </p>
                                <input type="text" name="" id="" placeholder="Enter shipping address" className="border-0 outline-0 bg-transparent"/>
                            </div>
                            <div className="flex items-center justify-between mt-4">
                            <h2 className=" text-2xl text-center text-[#282828]">Total: </h2>
                                <span className=" text-2xl text-center text-[#282828]">$120.00</span>
                            </div>
                           
                        </div>
                    </div>
                </div>

            </Container>
        </div>
    );
};

export default CheckOut;