import ProductCard from "../Card/ProductCard";
import Container from "../shared/Container";


const BestSelling = () => {
    const product =[
        {title: "Heinz Baby Puree with Peach, Mango, Banana", price: 20, discount:10, image: "/19.jpeg", thum:"/30.jpeg" },
        {title: "Cucumber 500 g (Approx. 200 g - 2500 g)", price: 30, discount:15, image: "/30.jpeg",thum:"/29.jpeg" },
        {title: "Potato per kg (Approx. 950 g - 1000 g)", price: 40, discount:10, image: "/29.jpeg",thum:"/30.jpeg" },
        {title: "Milky Mist Mango Fruit Yogurt 100 g (Cup)", price: 50,discount:'', image: "/02.jpeg",thum:"/19.jpeg" },
        {title: "Amaranthus 1 Bunch (Approx 160 g - 1500 g)", price: 60, discount:10, image: "/33.jpeg",thum:"/30.jpeg" },
    ]
    return (
        <div className="my-[120px]">
           <Container>
            <div>
                <h2 className="text-2xl leading-5 capitalize text-[#184363] text-center font-bold">Best Selling Products</h2>
                <div className="flex flex-wrap gap-6 mt-[50px]">
                    {product.map((item,idx)=> <ProductCard key={idx} item={item}/>)}
 
                </div>
            </div>
            </Container> 
        </div>
    );
};

export default BestSelling;