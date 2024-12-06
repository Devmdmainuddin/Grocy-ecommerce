import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/shared/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { useLogoutUserMutation } from "../../Featured/Auth/authApi";
import Container from "../../components/shared/Container";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { resetAuth } from "../../Featured/Auth/authSlice";
import { FaBars } from "react-icons/fa";
import Sidebar from "./Sidebar";

const Dashbord = () => {
   
    const { user } = useSelector((state) => state.auth);
    const [logoutUser] = useLogoutUserMutation();
    const dispatch = useDispatch();
    const [accOpen, setAccOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(true)
    const navigate = useNavigate()

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


    useEffect(() => {
        function resize() {
            if (window.innerWidth > 767.99) {
                setMenuOpen(true)
            } else {
                setMenuOpen(false)
            }
        }
        resize()
        window.addEventListener("resize", resize)
       
    }, [])
    return (
        <div>
            <div className="py-6 bg-[#1D3D4D]  ">
                <Container className=''>
                    <div className="tobar flex  justify-between items-center  text-white relative ">
                        <div className="flex gap-6 items-center">
                            <span onClick={() => setMenuOpen(!menuOpen)} className="block md:hidden p-3  hover:hover:bg-[#00B881] hover:text-white text-xl rounded-lg transition-all duration-500"><FaBars /></span>
                            <Link href="#" className=""> <h2 className="text-xl capitalize">logo</h2> </Link>
                        </div>

                        <div>
                            <input type="text" name="" id="" placeholder="Search Here" className="border outline-0 bg-transparent py-2 px-4 md:min-w-[480px]" />
                            <button className="border-0 outline-0 bg-white"><i className="fas fa-search"></i></button>
                        </div>
                        <div className="flex gap-3 items-center  ">

                            <p className=" " onClick={() => setAccOpen(!accOpen)}><span className="title">My Account</span>

                            </p>
                            
                        </div>



                        <div className={` bg-slate-200 flex  justify-between  fixed top-[92px] z-20 right-0 transition-transform duration-500 ${accOpen ? "translate-x-0" : "translate-x-full"}`}>
                                {user ? <button onClick={handleLogout} className=" text-center text-[15px] font-bold leading-5 capitalize bg-[#184363] py-2.5 px-[22px] text-white   hover:bg-[#00B881]  transition-all duration-500">Logout</button> : <Link to='/login'><button className=" text-center text-[15px] font-bold leading-5 capitalize bg-[#184363] py-2.5 px-[22px] text-white   hover:bg-[#00B881]  transition-all duration-500">login</button> </Link>}
                                <Link to='/dashbord'>  <button className="flex-1 text-center text-[15px] font-bold leading-5 capitalize bg-[#00B881] py-2.5 px-[22px] text-white   hover:bg-[#184363]  transition-all duration-500 ">my account </button></Link>

                            </div>
                    </div>
                </Container>
            </div>
            <div className="flex gap-6 ">
                <aside>
                  <Sidebar menuOpen={menuOpen}/>
                </aside>
                <main className={`transition-all duration-500 md:ml-0 ${menuOpen ? "ml-[320px] " : "ml-0"}`}>
                    <h2>deshbord</h2>
                </main>
            </div>
        </div>
    );
};

export default Dashbord;