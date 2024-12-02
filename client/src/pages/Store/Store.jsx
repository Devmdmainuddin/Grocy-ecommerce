import { Link } from "react-router-dom";
import BredCumb from "../../components/shared/BredCumb";
import Container from "../../components/shared/Container";
import { FaBars, FaCheckSquare } from "react-icons/fa";
import { useState } from "react";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import ProductCard from "../../components/Card/ProductCard";
import { HiMiniBars2 } from "react-icons/hi2";

const Store = () => {
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [selectedPriceRange, setSelectedPriceRange] = useState([]);
    const [selectedColors, setSelectedColors] = useState([]);

    const product = [
        { title: "Heinz Baby Puree with Peach, Mango, Banana", price: 20, image: "/19.jpeg", thum: "/30.jpeg" },
        { title: "Cucumber 500 g (Approx. 200 g - 2500 g)", price: 30, image: "/30.jpeg", thum: "/29.jpeg" },
        { title: "Potato per kg (Approx. 950 g - 1000 g)", price: 40, image: "/29.jpeg", thum: "/30.jpeg" },
        { title: "Milky Mist Mango Fruit Yogurt 100 g (Cup)", price: 50, image: "/02.jpeg", thum: "/19.jpeg" },
        { title: "Amaranthus 1 Bunch (Approx 160 g - 1500 g)", price: 60, image: "/33.jpeg", thum: "/30.jpeg" },
    ]


    const categories = [
        "Vegetable Oil",
        "Cooking Oils",
        "Baking Oils",
        "Spices",
        "Nuts & Seeds",
        "Herbs & Spices",
        "Healthy Snacks",
    ];
    const colors = ["Red", "Blue", "Green", "Yellow", "Black", "White"];

    const handleCategoryClick = (category) => {
        setSelectedCategories((prev) =>
            prev.includes(category)
                ? prev.filter((item) => item !== category)
                : [...prev, category]
        );
    };
    // ..............................
    const brands = ["Brand A", "Brand B", "Brand C", "Brand D"];

    const handleBrandClick = (brand) => {
        setSelectedBrands((prev) =>
            prev.includes(brand)
                ? prev.filter((item) => item !== brand)
                : [...prev, brand]
        );
    };

    const priceRanges = [
        { label: "Below $10", min: 0, max: 10 },
        { label: "$10 - $50", min: 10, max: 50 },
        { label: "$50 - $100", min: 50, max: 100 },
        { label: "Above $100", min: 100, max: Infinity },
    ];



    const handlePriceRangeClick = (range) => {
        setSelectedPriceRange((prev) =>
            prev.includes(range.label)
                ? prev.filter((item) => item !== range.label) // Remove if already selected
                : [...prev, range.label] // Add if not selected
        );
    };

    const handleColorClick = (color) => {
        setSelectedColors((prev) =>
            prev.includes(color)
                ? prev.filter((item) => item !== color)
                : [...prev, color]
        );
    };


    // ......................................
    return (
        <div>
            <BredCumb />
            <Container>
                <div className="flex gap-6  my-[50px] flex-wrap">
                    <div>
                        <aside className="  border rounded-lg w-full md:w-[220px] ">

                            <h2 className="border-b p-4 text-[17px] font-bold text-[#184363]">Filter</h2>
                            {/* category */}
                            <div className="">
                                <label htmlFor="accordion-1" className="relative flex flex-col rounded-md border-b border-gray-100 ">
                                    <input className="peer hidden" type="checkbox" id="accordion-1" />
                                    <svg xmlns="http://www.w3.org/2000/svg" className="absolute right-0 top-4 ml-auto mr-5 h-4 text-gray-500 transition peer-checked:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                    </svg>
                                    <div className="relative  cursor-pointer select-none ">
                                        <h3 className=" p-4 text-[17px] font-bold text-[#184363]"> Categories</h3>
                                    </div>
                                    <div className="max-h-0 overflow-hidden transition-all duration-500 peer-checked:max-h-96">
                                        <ul className="p-4 text-[#184363] list-inside list-square">
                                            {categories.map((category) => (
                                                <li className="mt-2" key={category}>
                                                    <label className="cursor-pointer">
                                                        <input
                                                            type="checkbox"
                                                            className="mr-2"
                                                            checked={selectedCategories.includes(category)}
                                                            onChange={() => handleCategoryClick(category)}
                                                        />
                                                        {category}
                                                    </label>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </label>
                            </div>

                            {/* Brands Filter */}
                            <div className="">
                                <label htmlFor="accordion-2" className="relative flex flex-col rounded-md border-b border-gray-100 ">
                                    <input className="peer hidden" type="checkbox" id="accordion-2" />
                                    <svg xmlns="http://www.w3.org/2000/svg" className="absolute right-0 top-4 ml-auto mr-5 h-4 text-gray-500 transition peer-checked:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                    </svg>
                                    <div className="relative  cursor-pointer select-none ">
                                        <h2 className=" p-4 text-[17px] font-bold text-[#184363]">Brands</h2>
                                    </div>
                                    <div className="max-h-0 overflow-hidden transition-all duration-500 peer-checked:max-h-96">
                                        <ul className="p-4 text-[#184363] list-inside list-square">
                                            {brands.map((brand) => (
                                                <li className="mt-2" key={brand}>
                                                    <label className="cursor-pointer">
                                                        <input
                                                            type="checkbox"
                                                            className="mr-2"
                                                            checked={selectedBrands.includes(brand)}
                                                            onChange={() => handleBrandClick(brand)}
                                                        />
                                                        {brand}
                                                    </label>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </label>
                            </div>



                            {/* Price Filter */}
                            <div className="">
                                <label htmlFor="accordion-3" className="relative flex flex-col rounded-md border-b border-gray-100 ">
                                    <input className="peer hidden" type="checkbox" id="accordion-3" />
                                    <svg xmlns="http://www.w3.org/2000/svg" className="absolute right-0 top-4 ml-auto mr-5 h-4 text-gray-500 transition peer-checked:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                    </svg>
                                    <div className="relative  cursor-pointer select-none ">
                                        <h2 className=" p-4 text-[17px] font-bold text-[#184363]">Price Range</h2>
                                    </div>
                                    <div className="max-h-0 overflow-hidden transition-all duration-500 peer-checked:max-h-96">
                                        <ul className="p-4 text-[#184363] list-inside list-square">
                                            {priceRanges.map((range) => (
                                                <li className="mt-2" key={range.label}>
                                                    <label className="cursor-pointer">
                                                        <input
                                                            type="checkbox"
                                                            className="mr-2"
                                                            checked={selectedPriceRange.includes(range.label)} // Check if selected
                                                            onChange={() => handlePriceRangeClick(range)}
                                                        />
                                                        {range.label}
                                                    </label>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </label>
                            </div>

                            {/* .............................. */}
                            {/* color filter */}
                            <div className="">
                                <label htmlFor="accordion-4" className="relative flex flex-col rounded-md border-b border-gray-100 ">
                                    <input className="peer hidden" type="checkbox" id="accordion-4" />
                                    <svg xmlns="http://www.w3.org/2000/svg" className="absolute right-0 top-4 ml-auto mr-5 h-4 text-gray-500 transition peer-checked:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                    </svg>
                                    <div className="relative  cursor-pointer select-none ">
                                        <h2 className="p-4 text-[17px] font-bold text-[#184363]">Colors</h2>
                                    </div>
                                    <div className="max-h-0 overflow-hidden transition-all duration-500 peer-checked:max-h-96">
                                        <ul className="p-4 text-[#184363] hover:text-[#00B881] list-inside list-square ">
                                            {colors.map((color) => (
                                                <li className=" " key={color}>
                                                    <label className="cursor-pointer text-[#184363] hover:text-[#00B881] transition-all duration-300">
                                                        <input
                                                            type="checkbox"
                                                            className="mr-2 peer  appearance-none hover:text-[#00B881] "
                                                            checked={selectedColors.includes(color)}
                                                            onChange={() => handleColorClick(color)}
                                                        />
                                                        <p className="flex  items-center">
                                                            <span className={` flex  items-center ${selectedColors.includes(color) ? 'text-[#00B881]' : 'text-[#184363]'}`}>
                                                                {selectedColors.includes(color) ? <FaCheckSquare className="hover:text-[#00B881]" /> : <MdCheckBoxOutlineBlank />}
                                                            </span>
                                                            <span className="peer-checked:text-[#00B881] ml-2">{color}</span>
                                                        </p>


                                                    </label>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </label>
                            </div>


                            {/* ........................... */}




                        </aside>
                    </div>

                    <main className="flex-1">
                        <div>
                            <div className="flex gap-6 items-center justify-between flex-wrap ">
                                <h2 className="text-[20px] font-semibold text-[#184363]">{34} Products</h2>
                                <div className="flex gap-2 items-center">
                                    <h2 className="text-[20px] font-semibold text-[#184363]">Sort by:</h2>
                                    <select name="" id="" className="text-[#184363] p-3 border rounded-lg outline-0 ">
                                        <option value="Best-Selling">Best Selling</option>
                                        <option value="New-Product">New Product</option>

                                    </select>
                                </div>

                                <div className="flex gap-6 items-center">
                                    <span className="p-3 bg-[#EBF4F6] hover:hover:bg-[#00B881] hover:text-white text-xl rounded-lg transition-all duration-500"><FaBars /></span>
                                    <span className="p-3 bg-[#EBF4F6] hover:hover:bg-[#00B881] hover:text-white text-xl rounded-lg transition-all duration-500"><HiMiniBars2 /></span>
                                    <span className="p-3 bg-[#EBF4F6] hover:hover:bg-[#00B881] hover:text-white text-xl rounded-lg transition-all duration-500 rotate-90 "><FaBars /></span>
                                </div>

                            </div>

                            <div className="flex gap-4 mt-[30px] flex-wrap">
                                {product.map((item, idx) => (
                                    <ProductCard
                                        key={idx}
                                        item={item}

                                    />
                                ))}
                            </div>


                        </div>
                    </main>
                </div>
            </Container>
        </div>
    );
};

export default Store;