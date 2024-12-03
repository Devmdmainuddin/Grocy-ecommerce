import Container from "../shared/Container";


const Brand = () => {
    return (
        <div className="bg-[#184363] py-6">
            <Container>
                <div className="flex gap-6 justify-center">
                    <div className="image w-[168px]">
                        <img src="brand-01.png" alt="" className="w-full h-full object-cover"/>
                    </div>
                    <div className="image w-[168px]">
                        <img src="brand-02.png" alt="" className="w-full h-full object-cover"/>
                    </div>
                    <div className="image w-[168px]">
                        <img src="brand-03.png" alt="" className="w-full h-full object-cover"/>
                    </div>
                    <div className="image w-[168px]">
                        <img src="brand-04.png" alt="" className="w-full h-full object-cover"/>
                    </div>
                    <div className="image w-[168px]">
                        <img src="brand-05.png" alt="" className="w-full h-full object-cover"/>
                    </div>
                    <div className="image w-[168px]">
                        <img src="brand-06.png" alt="" className="w-full h-full object-cover"/>
                    </div>

                </div>
            </Container>
        </div>
    );
};

export default Brand;