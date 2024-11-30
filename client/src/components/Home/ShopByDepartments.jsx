import ProductCard from "../Card/ProductCard";
import Container from "../shared/Container";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const ShopByDepartments = () => {
    const product = [
        { title: "Heinz Baby Puree with Peach, Mango, Banana", price: 20, image: "/19.jpeg", thum: "/30.jpeg" },
        { title: "Cucumber 500 g (Approx. 200 g - 2500 g)", price: 30, image: "/30.jpeg", thum: "/29.jpeg" },
        { title: "Potato per kg (Approx. 950 g - 1000 g)", price: 40, image: "/29.jpeg", thum: "/30.jpeg" },
        { title: "Milky Mist Mango Fruit Yogurt 100 g (Cup)", price: 50, image: "/02.jpeg", thum: "/19.jpeg" },
        { title: "Amaranthus 1 Bunch (Approx 160 g - 1500 g)", price: 60, image: "/33.jpeg", thum: "/30.jpeg" },
    ]
    return (
        <div className="my-[120px]">
            <Container>
                <div>
                    <h2 className="text-2xl leading-5 capitalize text-[#184363] text-center font-bold">Shop by Departments</h2>
                    <Tabs>
                        <TabList className=" flex gap-2  items-center justify-center flex-wrap text-xl py-6 ">
                            <Tab className=' text-[#184363] bg-[#ECF4F6] hover:bg-[#00B881] hover:text-white text-[15px] py-2 px-5 font-josefin font-semibold outline-0 transition-all duration-300 rounded-full'>Milk Items</Tab>
                            <Tab className=' text-[#184363] bg-[#ECF4F6] hover:bg-[#00B881] hover:text-white text-[15px] py-2 px-5 font-josefin font-semibold outline-0 transition-all duration-300 rounded-full'>Vegetables</Tab>
                            <Tab className=' text-[#184363] bg-[#ECF4F6] hover:bg-[#00B881] hover:text-white text-[15px] py-2 px-5 font-josefin font-semibold outline-0 transition-all duration-300 rounded-full'>Bakery</Tab>
                        </TabList>

                        <TabPanel >
                            <div className="flex flex-wrap gap-6 mt-[50px]">
                                {product.map((item, idx) => <ProductCard key={idx} item={item} />)}
                            </div>
                        </TabPanel>
                        <TabPanel >
                            <div className="flex flex-wrap gap-6 mt-[50px]">
                                {product.map((item, idx) => <ProductCard key={idx} item={item} />)}
                            </div>
                        </TabPanel>
                        <TabPanel >
                            <div className="flex flex-wrap gap-6 mt-[50px]">
                                {product.map((item, idx) => <ProductCard key={idx} item={item} />)}
                            </div>
                        </TabPanel>
              
                    </Tabs>

                </div>
            </Container>
        </div>
    );
};

export default ShopByDepartments;