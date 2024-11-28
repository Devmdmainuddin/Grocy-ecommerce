import { Link } from "react-router-dom";
import Container from "./Container";
import { FaFacebookF, FaInstagramSquare, FaLinkedin, FaTwitter } from "react-icons/fa";
import { BsCalendarDate } from "react-icons/bs";
import { MdCall, MdMessage } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
const Footer = () => {
    return (
        <>
            <div className="py-[93px]  bg-[#08090B] text-[#D9D9D9]">
                <Container>
                    <div className="flex justify-between flex-wrap gap-6">


                        <div className="max-w-[312px]">
                            <h4 className="text-white font-nunito text-[25px] font-bold leading-[34px] border-b border-[#fe651b] inline-block pb-3">About Company</h4>
                            <p className="text-[#d9d9d9] font-dm-sans text-[16px] font-normal leading-[26px] my-[22px]">Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum.
                                Cras egestas purus </p>

                            <div className=" flex gap-2 items-center ">
                                <Link to="#" className="border border-[#0064F6] text-[#0064F6] rounded-full p-[11px] hover:bg-[#0064F6] hover:text-white transition-all duration-500"><FaFacebookF /></Link>
                                <Link to="#" className="border border-[#0064F6] text-[#0064F6] rounded-full p-[11px] hover:bg-[#0064F6] hover:text-white transition-all duration-500"><FaTwitter /></Link>
                                <Link to="#" className="border border-[#0064F6] text-[#0064F6] rounded-full p-[11px] hover:bg-[#0064F6] hover:text-white transition-all duration-500"><FaInstagramSquare /></Link>
                                <Link to="#" className="border border-[#0064F6] text-[#0064F6] hover:bg-[#0064F6] hover:text-white rounded-full  p-[11px] transition-all duration-500"><FaLinkedin /></Link>

                            </div>
                        </div>
                        <div>
                            <h4 className="text-white font-nunito text-[25px] font-bold leading-[34px] border-b border-[#fe651b] inline-block pb-3">Featured Services</h4>
                            <ul className="list-disc list-inside marker:text-[#0064F6] mt-[30px]">

                                <li className="mt-3"><Link to="#" className="text-[#d9d9d9] hover:text-[#0064F6]  transition-all duration-500  font-inter text-[16px] font-normal leading-[1.1] ">Social Media Marketing</Link></li>
                                <li className="mt-3"><Link to="#" className="text-[#d9d9d9] hover:text-[#0064F6]  transition-all duration-500 font-inter text-[16px] font-normal leading-[1.1] ">Pay Per Click Management</Link></li>
                                <li className="mt-3"><Link to="#" className="text-[#d9d9d9] hover:text-[#0064F6]  transition-all duration-500 font-inter text-[16px] font-normal leading-[1.1] ">Search Engine Optimization</Link></li>
                                <li className="mt-3"><Link to="#" className="text-[#d9d9d9] hover:text-[#0064F6]  transition-all duration-500 font-inter text-[16px] font-normal leading-[1.1] ">Free SEO Analysis</Link></li>
                                <li className="mt-3"><Link to="#" className="text-[#d9d9d9] hover:text-[#0064F6]  transition-all duration-500 font-inter text-[16px] font-normal leading-[1.1] ">Case Studies</Link></li>
                            </ul>
                        </div>
                        <div className="max-w-[249px]">
                            <h4 className="text-white font-nunito text-[25px] font-bold leading-[34px] border-b border-[#fe651b] inline-block pb-3">Recent Post</h4>
                            <div className="mt-[30px]">
                                <div className="flex gap-5">
                                    <img src="" alt="" className="rounded-md bg-[#cccccc] w-[70px] h-[70px]" />
                                    <div>
                                        <h4 className="text-[#d9d9d9] font-dm-sans text-base font-normal leading-[22px]">Thoughtful man using
                                            laptop pondering </h4>
                                        <p className="text-[#d9d9d9] font-poppins text-sm font-normal leading-6 flex gap-1 items-center"><BsCalendarDate /> 09 Dec 2022</p>
                                    </div>

                                </div>
                                <div className="flex gap-5 mt-4">
                                    <img src="" alt="" className="rounded-md bg-[#cccccc] w-[70px] h-[70px]" />
                                    <div>
                                        <h4 className="text-[#d9d9d9] font-dm-sans text-base font-normal leading-[22px]">Thoughtful man using
                                            laptop pondering </h4>
                                        <p className="text-[#d9d9d9] font-poppins text-sm font-normal leading-6 flex gap-1 items-center"><BsCalendarDate /> 09 Dec 2022</p>
                                    </div>

                                </div>

                            </div>
                        </div>
                        <div className="max-w-[424px]">
                            <h4 className="text-white font-nunito text-[25px] font-bold leading-[34px] border-b border-[#fe651b] inline-block pb-3">Contact Us</h4>
                            <ul className="mt-[30px]">
                                <li className="mt-3"><Link to="#" className="text-[#d9d9d9] hover:text-[#0064F6] transition-all duration-500 font-inter text-[16px] font-normal leading-[1.1] flex items-center gap-2 "><span><MdCall className="text-[#0064F6]" /></span> +(323) 750-1234</Link></li>
                                <li className="mt-3"><Link to="#" className="text-[#d9d9d9] hover:text-[#0064F6] transition-all duration-500 font-inter text-[16px] font-normal leading-[1.1] flex items-center gap-2"> <MdMessage className="text-[#0064F6]" />infoyourortencey@gmail.com</Link></li>
                                <li className="mt-3"><Link to="#" className="text-[#d9d9d9] hover:text-[#0064F6] transition-all duration-500 font-inter text-[16px] font-normal leading-[1.1] flex items-center gap-2"><IoLocationSharp className="text-[#0064F6]" /> 374 FA Tower, William S Blvd, Melbourne
                                    2721, IL, USA</Link></li>


                            </ul>
                        </div>
                    </div>
                </Container>
            </div>
            <div className="py-[22px] bg-[#0064F6]">
                <Container>
                    <div className="flex justify-between">
                        <p className="text-white font-dm-sans text-base font-normal leading-7">2022 © All rights reserved by devsnest-llc</p>
                        <div className="flex gap-3 items-center">
                            
                        <p className="text-[#d9d9d9]"> Privacy Policy </p>
                        <div className="w-1 h-5 bg-[#d9d9d9]">

                        </div>
                        <p className="text-[#d9d9d9]"> Terms & Conditions</p>
                        </div>
                    </div>
                </Container>
            </div>
        </>

    );
};

export default Footer;