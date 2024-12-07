import Swal from "sweetalert2";

const Brand = () => {
    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;
        const brand = form.brand.value;
        const image = form.brandImage.files[0];
      


        const info = {
            brand,
            image,
        }
        console.log(info);
        try {
            // await addBrand(info)
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: " create Brand Item  ",
                showConfirmButton: false,
                timer: 1500
            });
            form.reset();
        } catch (error) {
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: " create Brand items faile",
                showConfirmButton: false,
                timer: 1500
            });
        }

    }
    return (
        <div className="py-20 px-6 bg-gray-200 " >
             <div className="mb-4 px-6 py-8 bg-white rounded-xl">
             <form  action="http://localhost:5000/profile" method="post" encType="multipart/form-data">
                <h2 className='text-[#151875] text-[22px] font-josefin font-semibold  capitalize mt-3'>brand add</h2>
                <input type="file" name="brandImage" id="" className=" w-full py-3 px-[11px] border outline-0 mt-2" />
                <input name='brand' type='text' placeholder='brand name ' className=" w-full py-3 px-[11px] border outline-0 mt-2" />
                <input type="submit" value="submit" className="text-white bg-[#FB2E86] font-josefin text-[14px] rounded-[3px] border border-[#FB2E86] px-[20px] py-[10px] mt-6" />
            </form>
             </div>
            
        </div>
    );
};

export default Brand;