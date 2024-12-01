import { Link } from "react-router-dom";
import Container from "./Container";
import { FaFacebookF, FaInstagramSquare, FaLinkedin, FaTwitter } from "react-icons/fa";
import { BsCalendarDate } from "react-icons/bs";
import { MdCall, MdMessage } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
const Footer = () => {
    return (
        <>
            <div className="py-[93px]  text-[#184363]">
                <Container>
                    <div className="flex justify-between flex-wrap gap-6">


                        <div className="max-w-[312px]">
                            <h4 className="text-[#184363] font-nunito text-lg font-bold ">About Company</h4>
                            <p className="text-[#184363] font-dm-sans text-[14px] font-normal leading-[26px] my-[22px]">Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum.
                                Cras egestas purus </p>

                            <div className=" flex gap-2 items-center ">
                                <Link to="#" className="text-[#184363] hover:text-[#00B881] text-2xl hover:scale-110  transition-all duration-500"><FaFacebookF /></Link>
                                <Link to="#" className="text-[#184363] hover:text-[#00B881] text-2xl hover:scale-110  transition-all duration-500"><FaTwitter /></Link>
                                <Link to="#" className="text-[#184363] hover:text-[#00B881] text-2xl hover:scale-110  transition-all duration-500"><FaInstagramSquare /></Link>
                                <Link to="#" className="text-[#184363] hover:text-[#00B881] text-2xl hover:scale-110 transition-all duration-500"><FaLinkedin /></Link>

                            </div>
                        </div>
                        <div>
                            <h4 className="text-[#184363] font-nunito text-lg font-bold ">Featured Services</h4>
                            <ul className=" mt-6">

                                <li className="mt-2"><Link to="#" className="text-[#184363] hover:text-[#00B881]  transition-all duration-500  font-inter text-[14px] font-normal leading-[1.1] ">Social Media Marketing</Link></li>
                                <li className="mt-2"><Link to="#" className="text-[#184363] hover:text-[#00B881]  transition-all duration-500 font-inter text-[14px] font-normal leading-[1.1] ">Pay Per Click Management</Link></li>
                                <li className="mt-2"><Link to="#" className="text-[#184363] hover:text-[#00B881]  transition-all duration-500 font-inter text-[14px] font-normal leading-[1.1] ">Search Engine Optimization</Link></li>
                                <li className="mt-2"><Link to="#" className="text-[#184363] hover:text-[#00B881] transition-all duration-500 font-inter text-[14px] font-normal leading-[1.1] ">Free SEO Analysis</Link></li>
                                <li className="mt-2"><Link to="#" className="text-[#184363] hover:text-[#00B881]  transition-all duration-500 font-inter text-[14px] font-normal leading-[1.1] ">Case Studies</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-[#184363] font-nunito text-lg font-bold ">Quick links</h4>
                            <ul className=" mt-6">

                                <li className="mt-2"><Link to="#" className="text-[#184363] hover:text-[#00B881]  transition-all duration-500  font-inter text-[14px] font-normal leading-[1.1] ">About Us</Link></li>
                                <li className="mt-2"><Link to="#" className="text-[#184363] hover:text-[#00B881]  transition-all duration-500 font-inter text-[14px] font-normal leading-[1.1] ">Contact</Link></li>
                                <li className="mt-2"><Link to="#" className="text-[#184363] hover:text-[#00B881]  transition-all duration-500 font-inter text-[14px] font-normal leading-[1.1] ">FAQs</Link></li>
                                <li className="mt-2"><Link to="#" className="text-[#184363] hover:text-[#00B881] transition-all duration-500 font-inter text-[14px] font-normal leading-[1.1] ">Compare</Link></li>
                                <li className="mt-2"><Link to="#" className="text-[#184363] hover:text-[#00B881]  transition-all duration-500 font-inter text-[14px] font-normal leading-[1.1] ">Wishlist</Link></li>
                            </ul>
                        </div>


                        <div>
                            <h4 className="text-[#184363] font-nunito text-lg font-bold ">About Us</h4>
                            <ul className=" mt-6">

                                <li className="mt-2"><Link to="#" className="text-[#184363] hover:text-[#00B881]  transition-all duration-500  font-inter text-[16px] font-normal leading-[1.1] ">our store</Link></li>
                                <li className="mt-2"><Link to="#" className="text-[#184363] hover:text-[#00B881]  transition-all duration-500 font-inter text-[16px] font-normal leading-[1.1] ">bakery</Link></li>
                                <li className="mt-2"><Link to="#" className="text-[#184363] hover:text-[#00B881]  transition-all duration-500 font-inter text-[16px] font-normal leading-[1.1] ">chiken</Link></li>
                                <li className="mt-2"><Link to="#" className="text-[#184363] hover:text-[#00B881] transition-all duration-500 font-inter text-[16px] font-normal leading-[1.1] ">dairy items</Link></li>
                                <li className="mt-2"><Link to="#" className="text-[#184363] hover:text-[#00B881]  transition-all duration-500 font-inter text-[16px] font-normal leading-[1.1] ">toasts</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-[#184363] font-nunito text-lg font-bold ">Collection</h4>
                            <ul className=" mt-6">

                                <li className="mt-2"><Link to="#" className="text-[#184363] hover:text-[#00B881]  transition-all duration-500  font-inter text-[14px] font-normal leading-[1.1] capitalize">vegetables</Link></li>
                                <li className="mt-2"><Link to="#" className="text-[#184363] hover:text-[#00B881]  transition-all duration-500 font-inter text-[14px] font-normal leading-[1.1] capitalize">cream</Link></li>
                                <li className="mt-2"><Link to="#" className="text-[#184363] hover:text-[#00B881]  transition-all duration-500 font-inter text-[14px] font-normal leading-[1.1] capitalize">milk items</Link></li>
                                <li className="mt-2"><Link to="#" className="text-[#184363] hover:text-[#00B881] transition-all duration-500 font-inter text-[14px] font-normal leading-[1.1] capitalize ">fruits</Link></li>
                                <li className="mt-2"><Link to="#" className="text-[#184363] hover:text-[#00B881]  transition-all duration-500 font-inter text-[14px] font-normal leading-[1.1] capitalize">healthy food</Link></li>
                            </ul>
                        </div>
                    </div>
                </Container>
            </div>
            <div className="py-[22px] text-[#184363] border-t">
                <Container>
                    <div className="flex justify-between gap-6 flex-wrap">
                        <img src="/footer-logo.jpeg" alt="logo" />
                        <div className="flex gap-6 items-center flex-wrap">
                            <div className="flex gap-2 items-center bg-[#edf4f6] py-[7px] px-5 rounded-lg">
                                <img src="/ser-1.svg" alt="logo" className="w-9 h-9 "/>
                                <h5 className="heading" > Free delivery over $100 </h5>
                            </div>
                            <div className="flex gap-2 items-center bg-[#edf4f6] py-[7px] px-5 rounded-lg">
                                <img src="/ser-2.svg" alt="logo" className="w-9 h-9 "/>
                                <h5 className="" > Easy return policy </h5>
                            </div>
                            <div className="flex gap-2 items-center bg-[#edf4f6] py-[7px] px-5 rounded-lg">
                                <img src="/ser-3.svg" alt="logo" className="w-9 h-9 "/>
                                <h5 className="" > 100% Money back </h5>
                            </div>
                        </div>

                    </div>

                </Container>
            </div>
            <div className="py-[22px] text-[#184363] border-t">
                <Container>
                    <div className="flex justify-between">
                        <p className=" font-dm-sans text-base font-normal leading-7">2022 © All rights reserved by devsnest-llc</p>
                        <div className="flex gap-3 items-center">

                            <p className=""> Privacy Policy </p>
                            <div className="w-1 h-5 bg-[#d9d9d9]">

                            </div>
                            <p className=""> Terms & Conditions</p>
                        </div>
                    </div>
                </Container>
            </div>
        </>

    );
};

export default Footer;