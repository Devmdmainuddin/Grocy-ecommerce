import { FaHeart, FaRegEye, FaStar } from "react-icons/fa";
import { IoIosGitCompare } from "react-icons/io";


const ProductCard = ({item}) => {
    const {image,title,price}=item;
    return (
        <div>
            <div className="w-[230px] group overflow-hidden">
                <div className="image w-[230px] h-[230px] border rounded-sm p-2 relative">
                    <img src={image} alt="" className='w-full h-full object-cover' />
                    <div className="absolute top-1/2 -right-full group-hover:right-3 -translate-y-1/2 flex gap-2 flex-col transition-all duration-500">
                        <span className="w-[38px] h-[38px] text-[#184363] p-3 bg-[#ECF4F6] rounded-full  hover:bg-[#00B881] hover:text-white flex justify-center items-center transition-all duration-500"><FaRegEye /></span>
                        <span className="w-[38px] h-[38px] text-[#184363] p-3 bg-[#ECF4F6] rounded-full  hover:bg-[#00B881] hover:text-white flex justify-center items-center transition-all duration-500"><IoIosGitCompare /></span>
                        <span className="w-[38px] h-[38px] text-[#184363] p-3 bg-[#ECF4F6] rounded-full  hover:bg-[#00B881] hover:text-white flex justify-center items-center transition-all duration-500"><FaHeart /></span>
                    </div>
                </div>
                <div className="content">
                    <h2 className="text-[15px] leading-5 capitalize text-[#184363]">{title}</h2>
                    <div className="flex gap-1 text-[#FABF46] my-3 items-center">
                        <span><FaStar className="text-[11px]"/></span>
                        <span><FaStar className="text-[11px]"/></span>
                        <span><FaStar className="text-[11px]"/></span>
                        <span><FaStar className="text-[11px]"/></span>
                        <span><FaStar className="text-[11px]"/></span>
                        <span className="text-[15px] capitalize text-[#184363]">(1)</span>
                    </div>
                    <p className="text-[15px] leading-5 capitalize text-[#184363]">$ <span>{price}</span></p>
                    <button className="w-full text-center text-[15px] font-bold leading-5 capitalize text-[#184363] py-2.5 px-5 bg-[#ECF4F6] rounded-[8px] mt-3 group-hover:bg-[#00B881] group-hover:text-white transition-all duration-500">Choose Options</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;