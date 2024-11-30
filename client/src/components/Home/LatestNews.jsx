import BlogCard from "../Card/BlogCard";
import Container from "../shared/Container";


const LatestNews = () => {
    const Blog = [
        { title: "New Arrival: Fresh Vegetable Oil", image:"/blog-02.jpeg", content: "Discover our new range of fresh vegetable oil, featuring a variety of flavors and textures." },
        { title: "Exclusive Offer: Buy 2 Get 1 Free", image:"/blog-03.jpeg", content: "Join our exclusive offer, where you can purchase two vegetable oil bottles for just the price of one." },
        { title: "Exclusive Offer: Buy 2 Get 1 Free", image:"/blog-04.jpeg", content: "Join our exclusive offer, where you can purchase two vegetable oil bottles for just the price of one." },
    ]
    return (
        <div className="my-[120px]">
            <Container>
                <div>

                    <h2 className="text-2xl leading-5 capitalize text-[#184363] text-center font-bold">Our Latest News</h2>
                    <div className="flex flex-wrap gap-6 mt-[50px]">
                        {Blog.map((item, idx) => <BlogCard key={idx} item={item} />)}

                    </div>





                </div>
            </Container>
        </div>
    );
};

export default LatestNews;