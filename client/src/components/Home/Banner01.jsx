import React from 'react';

const Banner01 = () => {
    return (
        <div className="w-full h-[200px] relative  overflow-hidden px-6 rounded-lg">
        <img src='/sb.jpeg' alt='Banner 02' className='w-full h-full object-cover rounded-lg ' />
        <div className='content absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 max-w-[372px] flex flex-col items-center'>
            <h4 className="text-[#184363] text-[16px]">Up to 45% OFF</h4>
            <h2 className="text-[#184363] font-bold text-xl md:text-3xl leading-[1.2] mt-2 text-center"> Delicious Foods from India’s Best Sellers</h2>
            <button className=" py-1 md:py-3 px-[36px] hover:bg-[#184363] text-white bg-[#00B881]  rounded-full mt-3 md:mt-[30px] transition-all duration-500">View More</button>
        </div>
    </div>
    );
};

export default Banner01;