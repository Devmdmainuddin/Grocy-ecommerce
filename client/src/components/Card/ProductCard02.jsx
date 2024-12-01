
import { FaHeart, FaRegEye, FaStar } from 'react-icons/fa';
import { IoIosGitCompare } from 'react-icons/io';

const ProductCard02 = ({item}) => {
  

    const { image, title, price, thum,discount } = item;
    return (
        <div>
        <div className="w-[396px] group  flex gap-3 items-center">
            <div className="image w-[144px] h-[144px] border rounded-sm p-2 relative overflow-hidden">
                {/* <img src={image} alt="" className='block group-hover:hidden w-full h-full object-cover ease-in-out transition-all duration-500' />
                <img src={thum} alt="" className='group-hover:block hidden w-full h-full object-cover  transition-all duration-500' />
                 */}
                <img
                    src={image}
                    alt=""
                    className="absolute top-0 left-0 w-full h-full object-cover transition-opacity ease-in-out duration-500 opacity-100 group-hover:opacity-0"
                />
                <img
                    src={thum}
                    alt=""
                    className="absolute top-0 left-0 w-full h-full object-cover transition-opacity ease-in-out duration-500 opacity-0 group-hover:opacity-100"
                />
                <p className="px-1 text-[13px] bg-red-500 text-white rounded-sm absolute top-2 left-2">sale</p>
                <div className="absolute top-1/2 -right-full group-hover:right-3 -translate-y-1/2 flex gap-2 flex-col transition-all duration-500">
                    <span className="w-[32px] h-[32px] text-[#184363] p-3 bg-[#ECF4F6] rounded-full  hover:bg-[#00B881] hover:text-white flex justify-center items-center transition-all duration-500"><FaRegEye /></span>
                    <span className="w-[32px] h-[32px] text-[#184363] p-3 bg-[#ECF4F6] rounded-full  hover:bg-[#00B881] hover:text-white flex justify-center items-center transition-all duration-500"><IoIosGitCompare /></span>
                    <span className="w-[32px] h-[32px] text-[#184363] p-3 bg-[#ECF4F6] rounded-full  hover:bg-[#00B881] hover:text-white flex justify-center items-center transition-all duration-500"><FaHeart /></span>
                </div>
            </div>
            <div className="content">
                <h2 className="text-[15px] leading-5 capitalize text-[#184363] hover:text-[#00B881]  transition-all duration-500">{title}</h2>
                <div className="flex gap-1 text-[#FABF46] my-2 items-center">
                    <span><FaStar className="text-[11px]" /></span>
                    <span><FaStar className="text-[11px]" /></span>
                    <span><FaStar className="text-[11px]" /></span>
                    <span><FaStar className="text-[11px]" /></span>
                    <span><FaStar className="text-[11px]" /></span>
                    <span className="text-[15px] capitalize text-[#184363]">(1)</span>
                </div>
                <div className="flex gap-2 ">
                <p className={`text-[15px] leading-5 capitalize text-[#184363] ${discount?'line-through': ''}`}>$ <span>{price}</span></p>
             {discount && <p className="text-[15px] leading-5 capitalize text-red-600">$ <span>{price-(price * discount / 100)}</span></p>}   
                </div>
                
                <button className="w-full text-center text-[15px] font-bold leading-5 capitalize text-[#184363] py-2.5 px-5 bg-[#ECF4F6] rounded-[8px] mt-3 hover:bg-[#00B881] hover:text-white transition-all duration-500">Choose Options</button>
            </div>
        </div>
    </div>
    );
};

export default ProductCard02;