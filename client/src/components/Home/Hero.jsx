import Container from '../shared/Container'

const Hero = () => {
    return (
        <Container>
            <div>
            <div className="w-full h-[490px] bg-[url('/hero.jpeg')] bg-cover bg-no-repeat my-[86px] lg:my-6  flex flex-col  justify-center">
                <div className='ml-[120px] '>
                    <h4 className="text-[#184363] text-[16px]">Pyridoxine Vitamin B6</h4>
                    <h2 className="text-[#184363] text-[42px] leading-[1.2] " >100% Natural &amp; <br />Organic Fruit Juice</h2>
                    <button className="py-3 px-[36px] text-[#184363] bg-white hover:bg-[#00B881] hover:text-white rounded-full mt-[30px] transition-all duration-500">Shop Now</button>
                </div>
            </div>
            <div className='flex flex-wrap gap-6 my-[50px]'>
                <div className='py-4 px-9 flex flex-col justify-center items-center shadow-[0.6px_1.598px_6px_#00000014]'>
                    <div className="image w-[45px] h-[45px]">
                        <img src="/cat-01.png" alt="" className='w-full h-full object-cover' />
                    </div>
                    <div className="content mt-4">
                        <h2>Vegetables</h2>
                    </div>
                </div>
                <div className='py-4 px-9 flex flex-col justify-center items-center shadow-[0.6px_1.598px_6px_#00000014]'>
                    <div className="image w-[45px] h-[45px]">
                        <img src="/cat-02.png" alt="" className='w-full h-full object-cover' />
                    </div>
                    <div className="content mt-4">
                        <h2>Bakery</h2>
                    </div>
                </div>
                <div className='py-4 px-9 flex flex-col justify-center items-center shadow-[0.6px_1.598px_6px_#00000014]'>
                    <div className="image w-[45px] h-[45px]">
                        <img src="/cat-03.png" alt="" className='w-full h-full object-cover' />
                    </div>
                    <div className="content mt-4">
                        <h2>Meats</h2>
                    </div>
                </div>
                <div className='py-4 px-9 flex flex-col justify-center items-center shadow-[0.6px_1.598px_6px_#00000014]'>
                    <div className="image w-[45px] h-[45px]">
                        <img src="/cat-04.png" alt="" className='w-full h-full object-cover' />
                    </div>
                    <div className="content mt-4">
                        <h2>Juices</h2>
                    </div>
                </div>
                <div className='py-4 px-9 flex flex-col justify-center items-center shadow-[0.6px_1.598px_6px_#00000014]'>
                    <div className="image w-[45px] h-[45px]">
                        <img src="/cat-05.png" alt="" className='w-full h-full object-cover' />
                    </div>
                    <div className="content mt-4">
                        <h2>Milk</h2>
                    </div>
                </div>
                <div className='py-4 px-9 flex flex-col justify-center items-center shadow-[0.6px_1.598px_6px_#00000014]'>
                    <div className="image w-[45px] h-[45px]">
                        <img src="/cat-06.png" alt="" className='w-full h-full object-cover' />
                    </div>
                    <div className="content mt-4">
                        <h2>Fruits</h2>
                    </div>
                </div>
            </div>
            </div>
           
        </Container>

    );
};

export default Hero;