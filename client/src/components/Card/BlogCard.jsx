

const BlogCard = ({item}) => {
    return (
        <div className="w-[400px]">
            <div className="image w-[400px] rounded-lg">
                <img src={item?.image} alt="" className='w-full h-full object-cover' />
            </div>
            <div className="content">
                <div>
                
                        <div className="flex gap-3 mt-2">
                            <span className="text-[13px]  capitalize text-[#184363] ">August 12, 2023</span>
                            <span className="text-[13px]  capitalize text-[#184363] ">by Admin</span>
                        </div>
              
                    <h2 className="text-2xl  capitalize text-[#184363] hover:text-[#00B881]  transition-all duration-500">{item?.title}</h2>
                    <button className="text-[16px]  capitalize text-[#184363] underline mt-4">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;