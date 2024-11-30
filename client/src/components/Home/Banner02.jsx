import React from 'react';
import Container from '../shared/Container';

const Banner02 = () => {
    return (
        <Container>
            <div className='flex , gap-6 flex-col lg:flex-row '>
                <div className='w-full lg:w-1/2 relative  overflow-hidden'>
                    <img src='/b02.webp' alt='Banner 02' className='w-full h-full object-cover hover:scale-110 transition-all duration-300' />

                    <div className='content absolute top-1/2 -translate-y-1/2 left-6 max-w-[224px]'>
                        <h4 className="text-[#184363] text-[16px]">Up to 45% OFF</h4>
                        <h2 className="text-[#184363] text-xl md:text-2xl leading-[1.2] mt-3" > Don{`'`}t Miss Out on
                            Tasty Grocery Deals!</h2>
                        <button className=" py-1 md:py-3 px-[36px] text-[#184363] bg-white hover:bg-[#00B881] hover:text-white rounded-full mt-3 md:mt-[30px] transition-all duration-500">Shop Now</button>
                    </div>

                </div>
                <div className="w-full lg:w-1/2 relative  overflow-hidden">
                    <img src='/b01.jpeg' alt='Banner 02' className='w-full h-full object-cover  hover:scale-110 transition-all duration-500' />
                    <div className='content absolute top-1/2 -translate-y-1/2 left-6 max-w-[224px]'>
                        <h4 className="text-[#184363] text-[16px]">Up to 45% OFF</h4>
                        <h2 className="text-[#184363] text-xl md:text-2xl leading-[1.2] mt-3" > Don{`'`}t Miss Out on
                            Tasty Grocery Deals!</h2>
                        <button className=" py-1 md:py-3 px-[36px] text-[#184363] bg-white hover:bg-[#00B881] hover:text-white rounded-full mt-3 md:mt-[30px] transition-all duration-500">Shop Now</button>
                    </div>
                </div>
            </div>
        </Container>

    );
};

export default Banner02;