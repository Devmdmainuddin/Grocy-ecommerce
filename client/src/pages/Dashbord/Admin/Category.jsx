
const Category = () => {
    return (
        <div className="py-20 px-6 bg-gray-200 " >
             <div className="mb-4 px-6 py-8 bg-white rounded-xl">
             <form  action="http://localhost:5000/profile" method="post" encType="multipart/form-data">
                <h2 className='text-[#151875] text-[22px] font-josefin font-semibold  capitalize mt-3'>Category Add</h2>
                <input type="file" name="categoryImage" id="" className=" w-full py-3 px-[11px] border outline-0 mt-2" />
                <input name='category' type='text' placeholder='category name ' className=" w-full py-3 px-[11px] border outline-0 mt-2" />
                <input type="submit" value="submit" className="text-white bg-[#FB2E86] font-josefin text-[14px] rounded-[3px] border border-[#FB2E86] px-[20px] py-[10px] mt-6" />
            </form>
             </div>
            
        </div>
    );
};

export default Category;