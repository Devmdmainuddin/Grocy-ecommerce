import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
const Sidebar = ({menuOpen}) => {
    const pathSegments = window.location.pathname.split("/").filter(Boolean);
    return (
        <div  className={`w-[300px] h-[calc(100vh-92px)]  bg-white fixed md:static top-[92px] left-0 z-30 transition-transform duration-500 flex flex-col items-stretch border-r justify-between gap-6 ${menuOpen ? "translate-x-0 " : "-translate-x-full "  }`} >
        <div className=" flex gap-1 items-center bg-[#00B881] text-white p-3">
         <Link to='/'> <h2>Home</h2> </Link>  {pathSegments[0] && (
                <>
                    <span className="mx-1 md:mx-2"> / </span>
                    <Link to={`/${pathSegments[0]}`} className="text-sm md:text-xl">
                        {pathSegments[0]}
                    </Link>
                </>
            )}
            {pathSegments[1] && (
                <>
                    <span className="mx-1 md:mx-2"> / </span>
                    <Link to={`/${pathSegments[0]}/${pathSegments[1]}`} className="text-sm md:text-xl" >
                        {pathSegments[1]}
                    </Link>
                </>
            )}
        </div>

        <ul className="mt-4 px-6">
            <li className="py-2 border-b text-[#282828] hover:text-[#00B881] transition-all duration-500">Home</li>
            <li className="py-2 border-b text-[#282828] hover:text-[#00B881]">About</li>
            <li className="py-2 border-b text-[#282828] hover:text-[#00B881]">Services</li>
            <li className="py-2 border-b text-[#282828] hover:text-[#00B881]">Contact</li>
        </ul>
        <div className="bg-[#e6f1f1] text-[#184363] font-bold  flex justify-between">
            <button className=" text-center text-[15px] font-bold leading-5 capitalize bg-[#184363] py-2.5 px-[22px] text-white   hover:bg-[#00B881]  transition-all duration-500">Log Out </button>
            <button className="flex-1 text-center text-[15px] font-bold leading-5 capitalize bg-[#00B881] py-2.5 px-[22px] text-white   hover:bg-[#184363]  transition-all duration-500 ">forget password </button>
        </div>

    </div>
    );
};
Sidebar.propTypes = {
    menuOpen: PropTypes.boolean,
}
export default Sidebar;