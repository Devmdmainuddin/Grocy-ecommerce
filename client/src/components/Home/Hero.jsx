import Container from '../shared/Container'

const Hero = () => {
    return (
        <Container>
            <div className="w-full h-[490px] bg-[url('/hero.jpeg')] bg-cover bg-no-repeat my-[86px] lg:my-6  flex flex-col  justify-center">
                <div className='ml-[120px] '>
                    <h4 className="text-[#184363] text-[16px]">Pyridoxine Vitamin B6</h4>
                    <h2 className="text-[#184363] text-[42px] leading-[1.2] " >100% Natural &amp; <br />Organic Fruit Juice</h2>
                    <button className="py-3 px-[36px] text-[#184363] bg-white hover:bg-[#00B881] hover:text-white rounded-full mt-[30px] transition-all duration-500">Shop Now</button>
                </div>
            </div>
        </Container>

    );
};

export default Hero;