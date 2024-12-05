import { Link, useNavigate } from "react-router-dom";
import { RiMenu2Line } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import Container from "./Container";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useLogoutUserMutation } from "../../Featured/Auth/authApi";
import Swal from "sweetalert2";
import { resetAuth } from "../../Featured/Auth/authSlice";

const Navbar = () => {
    const {user, authenticate } = useSelector((state) => state.auth);
    const [logoutUser] = useLogoutUserMutation();
    const dispatch = useDispatch();
    console.log(user,authenticate);
    const [isOpen, setIsOpen] = useState(false)
    const [accOpen, setAccOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false)
    const [catOpen, setOpen] = useState(false);
    const [count, setCount] = useState(1)

    const navigate = useNavigate()

    const categories = [
        "Vegetable Oil",
        "Cooking Oils",
        "Baking Oils",
        "Spices",
        "Nuts & Seeds",
        "Herbs & Spices",
        "Healthy Snacks",
    ];

    const handleCartLink = () => {
        navigate(`/cart`)
        setIsOpen(false);
        setMenuOpen(false);
    }
    const handleCheckOutLink = () => {
        navigate(`/checkOut`)
        setIsOpen(false);
        setMenuOpen(false);
    }
    const handleLogout = async () => {
        try {
            const response = await logoutUser().unwrap();
            if (response?.success) {
                localStorage.removeItem('accessToken');
                dispatch(resetAuth());
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Logged out successfully!",
                    showConfirmButton: false,
                    timer: 1500,
                });
                navigate('/login');
            } else {
                throw new Error(response?.message || 'Logout failed');
            }
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Logout Failed",
                text: error.message,
            });
        }
    };
    return (
        <div>
            <div className="py-6 bg-[#1D3D4D]  ">
                <Container>
                    <div className="tobar flex justify-center md:justify-between items-center  text-white ">
                        <Link href="#" className="hidden md:block">
                            <p className="">Save up to 20% on all Toys &amp; Accessories with “FLAT26OFF” code</p>
                        </Link>
                        <div className="flex gap-3 items-center relative ">
                            <select className=" bg-[#1D3D4D] text-white outline-0 " name="country_code">
                                <option value="FR" className="bg-white text-[#1D3D4D] ">
                                    France (EUR €)
                                </option >
                                <option value="RO" className="bg-white text-[#1D3D4D] ">
                                    Romania (RON Lei)
                                </option>
                                <option value="RU" className="bg-white text-[#1D3D4D] ">
                                    Russia (RUB ₽)
                                </option>
                                <option value="SA" className="bg-white text-[#1D3D4D]">
                                    Saudi Arabia (SAR ر.س)
                                </option>
                                <option value="ES" className="bg-white text-[#1D3D4D]">
                                    Spain (EUR €)
                                </option>

                                <option value="US" className="bg-white text-[#1D3D4D]" >
                                    United States (USD $)
                                </option>
                            </select>

                            <select className="localization-selector bg-[#1D3D4D] text-white outline-0 " name="locale_code" >
                                <option value="en" lang="en" className="bg-white text-[#1D3D4D] " >
                                    English
                                </option>
                                <option value="ar" className="bg-white text-[#1D3D4D] " lang="ar">
                                    العربية
                                </option>
                                <option value="fr" lang="fr" className="bg-white text-[#1D3D4D] ">
                                    Français
                                </option><option value="es" lang="es" className="bg-white text-[#1D3D4D] ">
                                    Español
                                </option><option value="ru" lang="ru" className="bg-white text-[#1D3D4D] ">
                                    Русский
                                </option><option value="ro" lang="ro" className="bg-white text-[#1D3D4D] ">
                                    Română
                                </option>
                            </select>
                            <p className=" " onClick={() => setAccOpen(!accOpen)}><span className="title">My Account</span>
                            
                            </p>
                            <div className={`w-[260px] z-20 bg-white text-[#1D3D4D] border rounded-sm absolute flex justify-between gap-3 right-0 p-3 transition-all duration-500 ${accOpen ? '-bottom-[100px] visible opacity-100 ' : ' bottom-[92px] invisible opacity-0'}`}>
                             <Link to='/login'><button className="py-3 px-6 border rounded-lg">login</button> </Link>   
                             <Link to=''>  <button className="py-3  px-6 border rounded-lg">my account </button></Link>  
                             <button onClick={handleLogout} className="btn-logout">Logout</button>
                            </div>
                        </div>

                    </div>
                </Container>
            </div>


            <Container>
                <div className="">
                    <nav className="flex  items-center justify-between border-b py-6 relative">

                        <div className="logo flex gap-6 items-center">
                            <span onClick={() => setMenuOpen(!menuOpen)} className="block md:hidden p-3 bg-[#EBF4F6] hover:hover:bg-[#00B881] hover:text-white text-xl rounded-lg transition-all duration-500"><FaBars /></span>
                            <img src="/header-logo.jpeg" alt="logo" />
                        </div>
                        <div className="flex  absolute top-full left-1/2 -translate-x-1/2 lg:translate-x-0 lg:static my-6 lg:my-0">
                            <input type="text" name="Search" id="" placeholder="Search for items..." className="text-[#11506C] border-2 border-[#00B881] w-full md:w-[450px] lg:w-[528px] rounded-tl-full rounded-bl-full outline-0 px-6" />
                            <label htmlFor="Search" className=" bg-[#00B881] text-white rounded-tr-full rounded-br-full py-2.5 px-[20px]">Search</label>
                        </div>
                        <div className="icons flex gap-6 items-center">
                            <div className="flex gap-3 items-center">

                                <svg className="icon icon-contact text-[#11506C]" fill="none" version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512.000000 512.000000"><title>phone</title>
                                    <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="currentColor" stroke="none">
                                        <path d="M2771 5102 c-95 -48 -106 -182 -21 -244 14 -10 77 -29 140 -43 490
        -107 881 -317 1229 -658 352 -346 584 -764 686 -1237 30 -138 44 -172 79 -195
        67 -44 142 -36 194 19 27 30 32 43 32 86 0 93 -71 370 -141 551 -135 349 -343
        673 -608 942 -387 396 -860 656 -1401 772 -137 30 -145 30 -189 7z"></path>
                                        <path d="M845 4800 c-75 -24 -124 -51 -196 -107 -75 -58 -457 -455 -507 -527
        -92 -131 -133 -282 -132 -491 0 -268 67 -537 223 -895 97 -225 197 -408 345
        -635 511 -784 1214 -1421 2008 -1818 440 -220 772 -318 1084 -321 170 -1 258
        18 400 86 l105 50 256 257 c200 199 265 271 297 326 59 101 75 167 70 284 -3
        83 -8 106 -36 165 -18 38 -57 99 -87 135 -84 103 -684 695 -740 730 -106 67
        -266 90 -386 55 -104 -31 -157 -70 -371 -282 l-206 -204 -99 51 c-421 218
        -1000 794 -1218 1214 l-57 108 138 132 c76 73 171 170 212 217 170 193 203
        377 105 580 -34 70 -61 99 -407 446 -364 365 -373 372 -458 414 -82 40 -94 43
        -185 47 -78 2 -110 -1 -158 -17z m213 -285 c25 -11 149 -128 375 -353 352
        -350 387 -393 387 -469 0 -75 -32 -118 -265 -348 -122 -121 -230 -235 -240
        -254 -13 -27 -16 -51 -13 -105 4 -63 12 -85 67 -194 269 -526 852 -1114 1393
        -1403 162 -87 203 -98 283 -75 56 17 69 28 289 245 127 126 246 236 265 246
        44 22 118 22 162 0 38 -19 652 -626 704 -695 63 -86 65 -172 5 -253 -16 -22
        -126 -138 -244 -258 -195 -197 -223 -222 -289 -253 -131 -63 -286 -71 -511
        -25 -395 79 -930 342 -1391 684 -817 607 -1492 1541 -1696 2350 -25 96 -32
        149 -36 265 -11 290 3 318 315 632 143 145 252 246 276 258 49 24 113 26 164
        5z"></path>
                                        <path d="M2730 4173 c-91 -47 -107 -168 -31 -237 11 -10 77 -33 150 -52 284
        -72 491 -192 688 -398 180 -188 290 -396 355 -671 17 -72 27 -96 53 -122 81
        -81 223 -35 242 80 6 42 -42 245 -88 362 -191 497 -626 888 -1136 1020 -138
        36 -190 40 -233 18z"></path>
                                    </g>
                                </svg>

                                <div className="md:flex flex-col hidden ">
                                    <p className="text-[#11506C] text-[13px]">Need Help?</p>
                                    <p className="text-[#11506C] text-[16px] font-semibold">+01 123 456 789</p>
                                </div>
                            </div>
                            <div onClick={() => setIsOpen(!isOpen)} className="flex gap-3 items-center border-l pl-6">

                                <svg viewBox="0 -31 512.00026 512" className="icon icon-contact text-[#11506C]" fill="currentColor" width="28px" height="28px" xmlns="http://www.w3.org/2000/svg"><path d="m164.960938 300.003906h.023437c.019531 0 .039063-.003906.058594-.003906h271.957031c6.695312 0 12.582031-4.441406 14.421875-10.878906l60-210c1.292969-4.527344.386719-9.394532-2.445313-13.152344-2.835937-3.757812-7.269531-5.96875-11.976562-5.96875h-366.632812l-10.722657-48.253906c-1.527343-6.863282-7.613281-11.746094-14.644531-11.746094h-90c-8.285156 0-15 6.714844-15 15s6.714844 15 15 15h77.96875c1.898438 8.550781 51.3125 230.917969 54.15625 243.710938-15.941406 6.929687-27.125 22.824218-27.125 41.289062 0 24.8125 20.1875 45 45 45h272c8.285156 0 15-6.714844 15-15s-6.714844-15-15-15h-272c-8.269531 0-15-6.730469-15-15 0-8.257812 6.707031-14.976562 14.960938-14.996094zm312.152343-210.003906-51.429687 180h-248.652344l-40-180zm0 0"></path><path d="m150 405c0 24.8125 20.1875 45 45 45s45-20.1875 45-45-20.1875-45-45-45-45 20.1875-45 45zm45-15c8.269531 0 15 6.730469 15 15s-6.730469 15-15 15-15-6.730469-15-15 6.730469-15 15-15zm0 0"></path><path d="m362 405c0 24.8125 20.1875 45 45 45s45-20.1875 45-45-20.1875-45-45-45-45 20.1875-45 45zm45-15c8.269531 0 15 6.730469 15 15s-6.730469 15-15 15-15-6.730469-15-15 6.730469-15 15-15zm0 0"></path></svg>

                                <div className="md:flex flex-col hidden">
                                    <div className="relative">
                                        <span className="text-[#11506C] text-[13px]">Cart </span>
                                        <div className="absolute top-0 -right-3 rounded-full p-1 bg-[#00B881] text-white  w-6 h-6 flex justify-center items-center">0</div>
                                    </div>
                                    <span className="text-[#11506C] text-[16px] font-semibold">$0.00</span>
                                </div>

                            </div>


                        </div>

                    </nav>
                </div>
                <div className="hidden relative py-3  lg:flex gap-6 items-center border-b">
                    <div onClick={() => setOpen(!catOpen)} className="flex justify-between items-center w-[240px] py-[9px] px-[17px] text-[#11506C] bg-[#EBF4F6] rounded-full">
                        <span><RiMenu2Line /></span>
                        <span className="text-[15px] font-semibold text-[#11506C]">Shop by Departments</span>
                        <span className="flex items-center justify-center"><IoIosArrowDown /></span>
                    </div>
                    <ul className="flex gap-6 items-center">
                        <li>
                            <Link className="text-[#11506C] text-[16px] font-bold hover:text-[#00B881] transition-all duration-500">Home</Link>
                        </li>
                        <li>
                            <Link to='/store' className="text-[#11506C] text-[16px] font-bold hover:text-[#00B881] transition-all duration-500">Our Store</Link>
                        </li>
                        <li>
                            <Link className="text-[#11506C] text-[16px] font-bold hover:text-[#00B881] transition-all duration-500">Special</Link>
                        </li>
                        <li>
                            <Link className="text-[#11506C] text-[16px] font-bold hover:text-[#00B881] transition-all duration-500">Categories</Link>
                        </li>
                        <li>
                            <Link className="text-[#11506C] text-[16px] font-bold hover:text-[#00B881] transition-all duration-500">Top Deals</Link>
                        </li>
                    </ul>

                    {/* ............... */}

                    {/* Dropdown categories with transition */}
                    <div
                        className={`absolute top-full left-6 mt-2 w-[240px] bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 z-20 ${catOpen ? "opacity-100 max-h-screen" : "opacity-0 max-h-0"
                            }`}
                    >
                        <ul className="flex flex-col">
                            {categories?.map((item, idx) => (
                                <li
                                    key={idx}
                                    className="px-4 py-2 hover:bg-[#EBF4F6] cursor-pointer text-[#11506C]"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>



                </div>


                {/* Overlay */}
                {isOpen && (
                    <div
                        className="w-full h-screen bg-[#3333336e] fixed top-0 left-0 z-20 transition-opacity duration-500"
                    // onClick={() => setIsOpen(false)}
                    ></div>
                )}

                {/* right Sidebar */}
                <div className={`w-[400px] h-screen bg-white flex flex-col justify-between  fixed top-0 z-30 right-0 transition-transform duration-500 ${isOpen ? "translate-x-0" : "translate-x-full"}`}
                >
                    <div className=" flex justify-between items-center bg-[#00B881] text-white p-3">
                        <h2>Cart</h2>
                        <span onClick={() => setIsOpen(false)} className="cursor-pointer">
                            <MdClose />
                        </span>
                    </div>
                    {/* Sidebar Content */}
                    <div className="body">
                        {/* cart 1 */}
                        <div className="flex gap-2 border-b p-2 mt-6">
                            <div>
                                <div className="image w-[73px] h-[73px] ">
                                    <img src="/14.jpeg" alt="" className="w-full h-full object-cover" />
                                </div>
                            </div>
                            <div className="content flex justify-between items-center ">
                                <div>
                                    <h2 className="text-sm text-[#184363]">Heinz Baby Puree with Peach, Mango, Banana</h2>

                                    <div className="flex gap-6 items-center mt-2">
                                        <div className='w-[90px] border text-[#184363] p-1 rounded-sm'>
                                            <span onClick={() => setCount(count > 1 ? count - 1 : 1)} className='p-2 cursor-pointer text-xl'>-</span>
                                            <span className='p-2'>{count}</span>
                                            <span onClick={() => setCount(count + 1)} className='p-2 cursor-pointer text-xl'>+</span>
                                        </div>
                                        <p className="text-[#184363] ">price: $50</p>
                                    </div>

                                </div>
                                <span> <MdClose className="text-xl text-red-500" /></span>
                            </div>
                        </div>
                        {/* cart 2 */}
                        <div className="flex gap-2 border-b p-2 mt-6">
                            <div>
                                <div className="image w-[73px] h-[73px] ">
                                    <img src="/14.jpeg" alt="" className="w-full h-full object-cover" />
                                </div>
                            </div>
                            <div className="content flex justify-between items-center ">
                                <div>
                                    <h2 className="text-sm text-[#184363]">Heinz Baby Puree with Peach, Mango, Banana</h2>

                                    <div className="flex gap-6 items-center mt-2">
                                        <div className='w-[90px] border text-[#184363] p-1 rounded-sm'>
                                            <span onClick={() => setCount(count > 1 ? count - 1 : 1)} className='p-2 cursor-pointer text-xl'>-</span>
                                            <span className='p-2'>{count}</span>
                                            <span onClick={() => setCount(count + 1)} className='p-2 cursor-pointer text-xl'>+</span>
                                        </div>
                                        <p className="text-[#184363] ">price: $50</p>
                                    </div>

                                </div>
                                <span> <MdClose className="text-xl text-red-500" /></span>
                            </div>
                        </div>
                    </div>

                    <footer className="bg-[#EBF4F6] text-[#184363] font-bold  space-y-4">
                        <div className="flex justify-between p-6 border-b">
                            <div>
                                <h2>Total Item</h2>
                                <span>2</span>
                            </div>
                            <div>
                                <h2>SubTotal</h2>
                                <span>$50</span>
                            </div>
                        </div>
                        <div className="flex gap-4 items-center justify-center pb-6">
                            <button onClick={handleCartLink} className=" text-center text-[15px] font-bold leading-5 capitalize hover:bg-[#184363] py-2.5 px-[22px]  rounded-sm  bg-[#00B881] text-white transition-all duration-500">View Cart</button>
                            <button onClick={handleCheckOutLink} className=" text-center text-[15px] font-bold leading-5 capitalize bg-[#184363] py-2.5 px-[22px] text-white rounded-sm  hover:bg-[#00B881]  transition-all duration-500">Check Out </button>
                        </div>


                    </footer>
                </div>
                {/* Overlay */}
                {menuOpen && (
                    <div
                        className="w-full h-screen bg-[#3333336e] fixed top-0 left-0 z-20 transition-opacity duration-500"
                        onClick={() => setMenuOpen(false)}
                    ></div>
                )}

                {/* Sidebar */}
                <div
                    className={`w-[300px]  h-screen bg-white fixed top-0 left-0 z-30 transition-transform duration-500 flex flex-col items-stretch justify-between gap-6 ${menuOpen ? "translate-x-0 " : "-translate-x-full"
                        }`}
                >

                    <div className=" flex justify-between items-center bg-[#00B881] text-white p-3">
                        <h2>Menu</h2>
                        <span onClick={() => setMenuOpen(false)} className="cursor-pointer">
                            <MdClose />
                        </span>
                    </div>

                    <ul className="mt-4 px-6">
                        <li className="py-2 border-b hover:text-[#00B881] transition-all duration-500">Home</li>
                        <li className="py-2 border-b hover:text-[#00B881]">About</li>
                        <li className="py-2 border-b hover:text-[#00B881]">Services</li>
                        <li className="py-2 border-b hover:text-[#00B881]">Contact</li>
                    </ul>
                    <div className="bg-[#EBF4F6] text-[#184363] font-bold  space-y-4">
                        <div className="flex gap-4 items-center justify-center p-6">
                            <button onClick={handleCartLink} className=" text-center text-[15px] font-bold leading-5 capitalize hover:bg-[#184363] py-2.5 px-[22px]  rounded-sm  bg-[#00B881] text-white transition-all duration-500">View Cart</button>
                            <button onClick={handleCheckOutLink} className=" text-center text-[15px] font-bold leading-5 capitalize bg-[#184363] py-2.5 px-[22px] text-white rounded-sm  hover:bg-[#00B881]  transition-all duration-500">Check Out </button>
                        </div>
                    </div>

                </div>

            </Container>

        </div>
    );
};

export default Navbar;