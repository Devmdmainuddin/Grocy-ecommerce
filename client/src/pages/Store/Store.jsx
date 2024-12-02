import { Link } from "react-router-dom";
import BredCumb from "../../components/shared/BredCumb";
import Container from "../../components/shared/Container";
import { FaCheckSquare } from "react-icons/fa";
import { useState } from "react";
import { MdCheckBoxOutlineBlank } from "react-icons/md";

const Store = () => {
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [selectedPriceRange, setSelectedPriceRange] = useState([]);
    const [selectedColors, setSelectedColors] = useState([]);

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
                <div className="flex gap-6  my-[50px] ">
                    <aside className="  border rounded-lg w-1/4">

                        <h2 className="border-b p-4 text-[17px] font-bold text-[#184363]">Filter</h2>
                        {/* category */}
                        <div>
                            <h2 className=" p-4 text-[17px] font-bold text-[#184363] bg-[">Categories</h2>
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

                        {/* Brands Filter */}
                        <div className="mb-6">
                            <h2 className=" p-4 text-[17px] font-bold text-[#184363]">Brands</h2>
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

                        {/* Price Filter */}
                        <div className="mb-6">
                            <h2 className=" p-4 text-[17px] font-bold text-[#184363]">Price Range</h2>
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
                        {/* .............................. */}
{/* color filter */}
                        <div className="mb-6">
                            <h2 className="p-4 text-[17px] font-bold text-[#184363]">Colors</h2>
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

                        {/* ........................... */}
                  



                    </aside>
                    <main>
                        <h1>Store</h1>
                        <p>Discover our wide range of products and services.</p>
                    </main>
                </div>
            </Container>
        </div>
    );
};

export default Store;