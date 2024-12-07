import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useAddProductMutation, useGetProductsQuery } from "../../../Featured/product/productApi";


const AddProduct = () => {
    const [addProduct, ] = useAddProductMutation();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { data: products, error, isLoading } = useGetProductsQuery();
console.log(products);
    const onSubmit = async (data) => {
        try {
            const formData = new FormData();
            for (const key in data) {
                if (key === "image") {
                    formData.append(key, data[key][0]); // For file input
                } else {
                    formData.append(key, data[key]);
                }
            }

            await addProduct(formData);
            console.log(data);
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Login Successful!",
                showConfirmButton: false,
                timer: 1500,
            });

        } catch (err) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: err.message || "Something went wrong!",
                footer: '<a href="#">Why do I have this issue?</a>',
            });
        }
    };
    return (
        <div className="py-20 px-6 bg-gray-200">

            <div className="mb-4 px-6 py-8 bg-white rounded-xl">
                {/* <form action="" >
                    <div className="flex flex-wrap -mx-2">
                        <div className="mb-4 w-full lg:w-1/2 px-2">
                            <input className="w-full p-4 text-xs bg-gray-50 outline-none rounded" type="text" placeholder="First Name" />

                        </div>

                        <div className="mb-4 w-full lg:w-1/2 px-2">
                            <input className="w-full p-4 text-xs bg-gray-50 outline-none rounded" type="text" placeholder="Last Name" />
                        </div>
                    </div>

                    <div className="mb-4 flex p-4 bg-gray-50 rounded">
                        <input className="w-full text-xs bg-gray-50 outline-none" type="email" placeholder="name@email.com" />


                    </div>

                    <div className="mb-6 flex p-4 bg-gray-50 rounded">
                        <input className="w-full text-xs bg-gray-50 outline-none" type="text" placeholder="Enter your password" />

                    </div>

                    <div className="text-center">
                       
                        <input type="submit" value="Sign Up" className="mb-2 w-full py-4 bg-green-600 hover:bg-green-700 rounded text-sm font-bold text-gray-50 transition duration-200" />

                    </div>
                </form> */}

                <form action="http://localhost:5000/product/" method="post" encType="multipart/form-data" onSubmit={handleSubmit(onSubmit)} className="pb-10" >

                    <div className='mt-10  '>

                        <h2 className='text-[#151875] text-[22px] font-josefin font-semibold my-9 capitalize'>add product</h2>
                        <div className=" mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">

                            <input name='title' {...register("title", { required: true })} type='text' placeholder='title ' className="mt-2 w-full py-[13px] px-[11px] border outline-0" />
                            <input name='descaption' {...register("descaption", { required: true })} type='text' placeholder='description ' className='mt-2 w-full py-[13px] px-[11px] border outline-0' />
                            <input name='price' {...register("price", { required: true })} type='number' placeholder=' price ' className='mt-2 w-full py-[13px] px-[11px] border outline-0' />
                            <input name='discount' {...register("discount", { required: true })} type='number' placeholder='discount ' className='mt-2 w-full py-[13px] px-[11px] border outline-0' />
                            <input name='dimensions' {...register("dimensions", { required: true })} type='text' placeholder=' dimensions ' className='mt-2 w-full py-[13px] px-[11px] border outline-0' />
                            <input name='weight' {...register("weight", { required: true })} type='text' placeholder='weight' className='mt-2 w-full py-[13px] px-[11px] border outline-0' />
                            <input name='stock_levels' {...register("stock_levels", { required: true })} type='number' placeholder='stock levels' className='w-full py-[13px] px-[11px] border outline-0' />
                            <div>
                                <input name='image' {...register("image", { required: true })}  type='file' placeholder='image ' className='mt-2 w-full py-[13px] px-[11px] border outline-0' />
                            </div>
                            {/* thumbnail */}
                            {/* <div>
                                <label htmlFor="thumbnail01" className='capitalize'>thumbnail</label>
                                <div className='mt-2 border'>
                                    <input name='thumbnail01' type='file' multiple placeholder='image ' className='w-full py-[13px] px-[11px] border-b outline-0' />
                                    <input name='thumbnail02' type='file' multiple placeholder='image ' className='w-full py-[13px] px-[11px] border-b outline-0' />
                                    <input name='thumbnail03' type='file' multiple placeholder='image ' className='w-full py-[13px] px-[11px] border-b outline-0' />
                                    <input name='thumbnail04' type='file' multiple placeholder='image ' className='w-full py-[13px] px-[11px]  outline-0' />

                                </div>

                            </div> */}
                            {/* color */}
                            <div>

                                <select name="color" {...register("color", { required: true })} id="" className='mt-2 w-full py-[13px] px-[11px] border outline-0'>
                                    <option value='#FF0000'>Red</option>
                                    <option value='#FFFF00'>Yellow</option>
                                    <option value='#0000FF'>Blue</option>
                                    <option value='#FFA500'>Orange</option>
                                    <option value='#A52A2A'>Brown</option>
                                    <option value='#008000'>Green</option>
                                    <option value='#800080'>Purple</option>
                                    <option value='#87CEEB'>Sky</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor=""></label>
                            </div>
                            {/* tags */}
                            <div>

                                <div className='mt-2 border'>
                                    <input name='tag01' {...register("tag01", { required: true })} type='text' placeholder='tag01' className='w-full py-[13px] px-[11px] border-b outline-0' />
                                    <input name='tag02' {...register("tag02", { required: true })} type='text' placeholder='tag02' className='w-full py-[13px] px-[11px] border-b outline-0' />
                                    <input name='tag03' {...register("tag03", { required: true })} type='text' placeholder='tag03' className='w-full py-[13px] px-[11px] border-b outline-0' />

                                </div>

                            </div>


                            {/* return */}
                            <div>

                                <input name='return_policy' {...register("return_policy", { required: true })} type='text' placeholder='return policy ' className='mt-2 w-full py-[13px] px-[11px] border outline-0' />
                            </div>
                            {/* warranty */}
                            <div>

                                <input name='warranty_information' {...register("warranty_information", { required: true })} type='text' placeholder='warranty information' className='mt-2 w-full py-[13px] px-[11px] border outline-0' />
                            </div>


                            {/*availability  */}
                            <div>

                                <select name="availability_status" {...register("availability_status", { required: true })} id="" className='mt-2 w-full py-[13px] px-[11px] border outline-0'>
                                    <option value="In Stock">In Stock</option>
                                    <option value="Out Of Stock">Out Of Stock</option>
                                </select>
                            </div>


                            {/* brand */}
                            {/* <div>

            <select name="brand" id="" className='mt-2 w-full py-[13px] px-[11px] border outline-0'>
                {brand?.map((item, idx) => <option key={idx} value={item.brand}>{item.brand}</option>)}
            </select>
        </div> */}
                            {/* category */}
                            <div >

                                {/* <div className='flex mt-2'>
                <select name="category" id="" className=' w-[95px] py-[13px] px-[11px] border outline-0'>
                    {category?.map((items, idx) => <option key={idx} value={items.category}>{items.category}</option>)}
                </select>
                <select name="subcategory" id="" className=' w-[95px] py-[13px] px-[11px] border outline-0'>
                    {subcategory?.map((items, idx) => <option key={idx} value={items.subcategory}>{items.subcategory}</option>)}
                </select>
                <input name='maincategory' type='text' placeholder=' main category ' className='w-full py-[13px] px-[11px] border outline-0' />
            </div> */}

                            </div>
                            {/* quantity */}
                            <div>

                                <input name='minimum_order_quantity' {...register("minimum_order_quantity", { required: true })} type='number' placeholder='minimum order quantity' className='mt-2 w-full py-[13px] px-[11px] border outline-0' />
                            </div>

                            {/* shipping cost */}
                            <div>

                                <input name='shipping_cost' {...register("shipping_cost", { required: true })} type='number' placeholder='shipping cost' className='mt-2 w-full py-[13px] px-[11px] border outline-0' />
                            </div>





                        </div>
                    </div>
                    <div className=" mt-6">
                        <input type="submit" value="Add product" className="text-white bg-[#FB2E86] font-josefin text-[14px] rounded-[3px] border border-[#FB2E86] px-[20px] py-[10px] mt-[33px]" />
                    </div>
                </form>
                <div className="my-6 bg-slate-300 ">

                </div>
            </div>
        </div>
    );
};

export default AddProduct;