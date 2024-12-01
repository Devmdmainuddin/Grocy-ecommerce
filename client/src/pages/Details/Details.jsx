import { FaStar } from 'react-icons/fa';
import Container from '../../components/shared/Container'
import { useState } from 'react';
import { CiHeart } from "react-icons/ci";
import { IoGitCompareOutline } from 'react-icons/io5';
import ProductCard from '../../components/Card/ProductCard';

const Details = () => {
    const [count, setCount] = useState(1)
    const product =[
        {title: "Heinz Baby Puree with Peach, Mango, Banana", price: 20, image: "/19.jpeg", thum:"/30.jpeg" },
        {title: "Cucumber 500 g (Approx. 200 g - 2500 g)", price: 30, image: "/30.jpeg",thum:"/29.jpeg" },
        {title: "Potato per kg (Approx. 950 g - 1000 g)", price: 40, image: "/29.jpeg",thum:"/30.jpeg" },
        {title: "Milky Mist Mango Fruit Yogurt 100 g (Cup)", price: 50, image: "/02.jpeg",thum:"/19.jpeg" },
        {title: "Amaranthus 1 Bunch (Approx 160 g - 1500 g)", price: 60, image: "/33.jpeg",thum:"/30.jpeg" },
    ]
    return (
        <div className='mt-[50px]'>
            <Container>
                <div className='flex gap-6 '>
                    <div className="image flex flex-col items-center">
                        <div className='w-[452px] h-[350px] rounded-lg border '>
                            <img src="/19.jpeg" alt="" className="w-full h-full object-cover" />
                        </div>
                        <div className='flex gap-6 mt-[50px]'>
                            <div className='w-[114px] h-[114px] border rounded-lg overflow-hidden'>
                                <img src="/19.jpeg" alt="" className="w-full h-full object-cover rounded-lg hover:scale-125 transition-all duration-500" />
                            </div>
                            <div className='w-[114px] h-[114px] border rounded-lg overflow-hidden'>
                                <img src="/19.jpeg" alt="" className="w-full h-full object-cover rounded-lg hover:scale-125 transition-all duration-500" />
                            </div>
                            <div className='w-[114px] h-[114px] border rounded-lg overflow-hidden '>
                                <img src="/19.jpeg" alt="" className="w-full h-full object-cover rounded-lg hover:scale-125 transition-all duration-500" />
                            </div>
                            <div className='w-[114px] h-[114px] border rounded-lg overflow-hidden'>
                                <img src="/19.jpeg" alt="" className="w-full h-full object-cover rounded-lg hover:scale-125 transition-all duration-500" />
                            </div>
                        </div>
                    </div>
                    <div className="content">
                        <h2 className="text-[22px] leading-5 capitalize text-[#184363] hover:text-[#00B881]  transition-all duration-500">Coconut Kalash 5 pcs (Pack) (Approx 1600 g - 2000 g)</h2>
                        <div className="flex gap-1 text-[#FABF46] my-3 items-center">
                            <span><FaStar className="text-[11px]" /></span>
                            <span><FaStar className="text-[11px]" /></span>
                            <span><FaStar className="text-[11px]" /></span>
                            <span><FaStar className="text-[11px]" /></span>
                            <span><FaStar className="text-[11px]" /></span>
                            <span className="text-[15px] capitalize text-[#184363]">(1)</span>
                        </div>
                        <div className="flex gap-2 ">
                            <p className={`text-[15px] leading-5 capitalize text-[#184363] line-through`}>$ <span>$45</span></p>
                            <p className="text-lg font-bold leading-5 capitalize text-red-600">$ <span>$42.00</span></p>
                        </div>
                        <p className='mt-2 text-[#184363] capitalize'>shipping calculated at checkout.</p>
                        <hr className='my-6' />
                        <p className='mt-2 text-[#184363]  capitalize'> <span className='text-lg font-bold'>type :</span> <span>Grains</span></p>
                        <p className='mt-2 text-[#184363]  capitalize'> <span className='text-lg font-bold'>SKU :</span> <span>SKU15</span></p>
                        <p className='mt-2 text-[#184363]  capitalize'> <span className='text-lg font-bold'>Tags :</span> <span> Dryfruits ,</span> <span> Food</span></p>
                        <p className='mt-2 text-[#184363]  capitalize'><span className='text-lg font-bold'>Collections :</span>  <span>Our Store,</span>  <span>Sale Collection,</span>  <span>Vegetables,</span></p>
                        <p className='mt-2 text-[#184363]  capitalize'> <span className='text-lg font-bold'> Availability :</span> <span>In Stock</span></p>
                        <div className='flex gap-2 items-center mt-4'>
                            <p className=' text-[#184363]  capitalize text-lg font-bold'> quantity : </p>
                            <div className='border text-[#184363] p-1 rounded-sm'>
                                <span onClick={() => setCount(count > 1 ? count - 1 : 1)} className='p-2 cursor-pointer text-xl'>-</span>
                                <span className='p-2'>{count}</span>
                                <span onClick={() => setCount(count + 1)} className='p-2 cursor-pointer text-xl'>+</span>
                            </div>
                        </div>
                        <div className='flex gap-3 items-center mt-4'>
                            <button className='py-2 px-4 text-white bg-[#00B881] hover:bg-[#184363] rounded-full inline-block capitalize transition-all duration-500'>add to cart</button>
                            <button className='py-2 px-4 text-white bg-[#184363] hover:bg-[#00B881] rounded-full inline-block capitalize transition-all duration-500'>buy it now</button>
                        </div>
                        <div className='flex gap-3 items-center mt-4'>
                            <button className='text-lg flex gap-1 items-center'><CiHeart className='text-xl' /> add to wishlist</button>
                            <button className='text-lg flex gap-1 items-center'> <IoGitCompareOutline className='text-lg' /> add to compare</button>
                        </div>
                        <div className="text-left">
                            <label htmlFor="accordion-2" className="relative flex flex-col rounded-md border-b border-gray-100 ">
                                <input className="peer hidden" type="checkbox" id="accordion-2" />
                                <svg xmlns="http://www.w3.org/2000/svg" className="absolute right-0 top-4 ml-auto mr-5 h-4 text-gray-500 transition peer-checked:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                                <div className="relative  cursor-pointer select-none items-center py-4 pr-12">
                                    <h3 className="text-lg leading-5 capitalize text-[#184363] flex gap-1 items-center">
                                        <svg className="icon icon-accordion text-[#184363] " fill="currentColor" aria-hidden="true" focusable="false" role="presentation" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 20 20"><path d="M0 3.75156C0 3.47454 0.224196 3.24997 0.500755 3.24997H10.647C10.9235 3.24997 11.1477 3.47454 11.1477 3.75156V5.07505V5.63362V6.10938V13.6616C10.9427 14.0067 10.8813 14.1101 10.5516 14.6648L7.22339 14.6646V13.6614H10.1462V4.25316H1.00151V13.6614H2.6842V14.6646H0.500755C0.224196 14.6646 0 14.44 0 14.163V3.75156Z"></path>
                                            <path d="M18.9985 8.08376L11.1477 6.10938V5.07505L19.6212 7.20603C19.8439 7.26203 20 7.46255 20 7.69253V14.1631C20 14.4401 19.7758 14.6647 19.4992 14.6647H17.3071V13.6615H18.9985V8.08376ZM11.1477 13.6616L13.3442 13.6615L13.3443 14.6647L10.5516 14.6648L11.1477 13.6616Z"></path>
                                            <path d="M7.71269 14.1854C7.71269 15.6018 6.56643 16.75 5.15245 16.75C3.73847 16.75 2.59221 15.6018 2.59221 14.1854C2.59221 12.7691 3.73847 11.6209 5.15245 11.6209C6.56643 11.6209 7.71269 12.7691 7.71269 14.1854ZM5.15245 15.7468C6.01331 15.7468 6.71118 15.0478 6.71118 14.1854C6.71118 13.3231 6.01331 12.6241 5.15245 12.6241C4.29159 12.6241 3.59372 13.3231 3.59372 14.1854C3.59372 15.0478 4.29159 15.7468 5.15245 15.7468Z"></path>
                                            <path d="M17.5196 14.1854C17.5196 15.6018 16.3733 16.75 14.9593 16.75C13.5454 16.75 12.3991 15.6018 12.3991 14.1854C12.3991 12.7691 13.5454 11.6209 14.9593 11.6209C16.3733 11.6209 17.5196 12.7691 17.5196 14.1854ZM14.9593 15.7468C15.8202 15.7468 16.5181 15.0478 16.5181 14.1854C16.5181 13.3231 15.8202 12.6241 14.9593 12.6241C14.0985 12.6241 13.4006 13.3231 13.4006 14.1854C13.4006 15.0478 14.0985 15.7468 14.9593 15.7468Z"></path>
                                        </svg>
                                        Shipping & Returns</h3>
                                </div>
                                <div className="max-h-0 overflow-hidden transition-all duration-500 peer-checked:max-h-96">
                                    <div className="p-5">
                                        <p className="text-[16px]">Free shipping and returns available on all orders!
                                            We ship all US domestic orders within 5-10 business days!</p>
                                    </div>
                                </div>
                            </label>
                        </div>
                        <div className="text-left">
                            <label htmlFor="accordion-1" className="relative flex flex-col rounded-md border-b border-gray-100 ">
                                <input className="peer hidden" type="checkbox" id="accordion-1" />
                                <svg xmlns="http://www.w3.org/2000/svg" className="absolute right-0 top-4 ml-auto mr-5 h-4 text-gray-500 transition peer-checked:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                                <div className="relative  cursor-pointer select-none items-center py-4 pr-12">
                                    <h3 className="text-lg leading-5 capitalize text-[#184363] flex gap-1 items-center">
                                        <CiHeart className='text-[22px]' />
                                        Care Instructions</h3>
                                </div>
                                <div className="max-h-0 overflow-hidden transition-all duration-500 peer-checked:max-h-96">
                                    <div className="p-5">
                                        <p className="text-[16px]">Free shipping and returns available on all orders!
                                            We ship all US domestic orders within 5-10 business days!</p>
                                    </div>
                                </div>
                            </label>
                        </div>
                        <div className="text-left">
                            <label htmlFor="accordion-3" className="relative flex flex-col rounded-md border-b border-gray-100 ">
                                <input className="peer hidden" type="checkbox" id="accordion-3" />
                                <svg xmlns="http://www.w3.org/2000/svg" className="absolute right-0 top-4 ml-auto mr-5 h-4 text-gray-500 transition peer-checked:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                                <div className="relative  cursor-pointer select-none items-center py-4 pr-12">
                                    <h3 className="text-lg leading-5 capitalize text-[#184363] flex gap-1 items-center">
                                        <svg className="icon icon-accordion  text-[#184363]" fill="currentColor" aria-hidden="true" focusable="false" role="presentation" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 20 20"><path d="M10.6616 1.84311C11.4997 0.994336 12.5829 0.555929 13.3364 0.406304C13.4671 0.380359 13.6027 0.407635 13.7132 0.48208C13.8237 0.556525 13.8999 0.671982 13.9249 0.802834C14.2685 2.59987 13.7042 3.90202 12.8265 4.77303C11.9732 5.61989 10.8528 6.03394 10.0739 6.16284C9.94237 6.1846 9.80763 6.15297 9.69957 6.07495C9.59151 5.99694 9.51906 5.87901 9.49832 5.74735C9.22227 3.99494 9.8034 2.71219 10.6616 1.84311ZM10.4322 5.05051C10.9838 4.87866 11.6201 4.56143 12.1221 4.06324C12.6862 3.5034 13.1028 2.69625 13.0153 1.52987C12.4847 1.71504 11.8688 2.04373 11.3731 2.54573C10.8104 3.1156 10.3882 3.92035 10.4322 5.05051Z"></path>
                                            <path d="M6.74466 1.36403C6.82081 1.09859 7.09771 0.945143 7.36315 1.02129C8.4313 1.32771 10.4241 2.68991 10.4999 5.68393C10.5069 5.95998 10.2888 6.18943 10.0127 6.19643C9.73668 6.20342 9.50723 5.9853 9.50024 5.70925C9.43732 3.22559 7.81131 2.19019 7.0874 1.98252C6.82196 1.90637 6.66851 1.62947 6.74466 1.36403Z"></path>
                                            <path d="M5.7976 5.51618C5.08273 5.80325 4.40428 6.33518 3.91474 6.94951C3.01446 8.0793 2.53613 9.47907 2.53613 11.1986C2.53613 14.3276 4.3809 16.9669 7.07997 18.0835C7.41131 18.2206 7.75875 18.2099 8.22329 18.1348C8.32226 18.1188 8.42919 18.0991 8.54253 18.0782C8.92684 18.0074 9.38491 17.923 9.85684 17.923C10.3302 17.923 10.8107 18.007 11.2255 18.0795C11.3576 18.1026 11.4831 18.1246 11.5995 18.1422C12.1188 18.2211 12.517 18.2314 12.872 18.0838C15.6049 16.9478 17.4589 14.3 17.4639 11.2113C17.3883 9.75258 17.1668 8.70553 16.7428 7.88888C16.3278 7.08972 15.6964 6.46856 14.717 5.90109C13.9224 5.57109 13.3583 5.45194 12.9406 5.4387C12.5294 5.42567 12.2379 5.51434 11.9817 5.63936C11.8475 5.70489 11.72 5.78185 11.5797 5.86982C11.5575 5.8837 11.5348 5.89804 11.5115 5.91271C11.3938 5.98697 11.2627 6.06966 11.1279 6.14411C10.7884 6.3316 10.3877 6.48938 9.85684 6.48938C9.22764 6.48938 8.83995 6.29877 8.52175 6.04985C8.44189 5.98738 8.34486 5.90226 8.26392 5.83126C8.22148 5.79404 8.18347 5.76069 8.15468 5.73653C8.04777 5.64681 7.94466 5.57121 7.8199 5.50793C7.21536 5.2013 6.5101 5.23007 5.7976 5.51618ZM5.42495 4.58821C6.32089 4.22843 7.33981 4.14315 8.27225 4.61609C8.4901 4.72659 8.65843 4.8538 8.79753 4.97054C8.86924 5.03072 8.92077 5.07647 8.96623 5.11683C9.02365 5.16781 9.07139 5.2102 9.13788 5.26221C9.30136 5.39009 9.47644 5.48938 9.85684 5.48938C10.1679 5.48938 10.4012 5.4031 10.6445 5.26872C10.7515 5.20961 10.8536 5.14531 10.9708 5.07145C10.9959 5.05563 11.0217 5.03937 11.0484 5.02262C11.1936 4.93153 11.3585 4.83076 11.5431 4.74067C11.9247 4.55444 12.3768 4.42033 12.9722 4.4392C13.556 4.4577 14.2527 4.62242 15.1322 4.99079L15.1611 5.00288L15.1882 5.01846C16.3065 5.66113 17.1032 6.41295 17.6303 7.42805C18.1508 8.43058 18.3851 9.64589 18.4633 11.173L18.4639 11.1858V11.1986C18.4639 14.7063 16.3566 17.7183 13.2559 19.0072C12.6339 19.2658 12.0024 19.2149 11.4494 19.1309C11.2863 19.1061 11.1317 19.0792 10.9824 19.0532C10.5912 18.9849 10.2359 18.923 9.85684 18.923C9.48487 18.923 9.15235 18.984 8.78723 19.0509C8.65765 19.0747 8.52396 19.0992 8.38294 19.122C7.87454 19.2042 7.29552 19.2549 6.69769 19.0075C3.6271 17.7372 1.53613 14.7348 1.53613 11.1986C1.53613 9.28002 2.07513 7.65346 3.13268 6.32632C3.71714 5.59286 4.53139 4.94704 5.42495 4.58821Z"></path></svg>
                                        Collapsible row</h3>
                                </div>
                                <div className="max-h-0 overflow-hidden transition-all duration-500 peer-checked:max-h-96">
                                    <div className="p-5">
                                        <p className="text-[16px]">Free shipping and returns available on all orders!
                                            We ship all US domestic orders within 5-10 business days!</p>
                                    </div>
                                </div>
                            </label>
                        </div>
                        <h3 className="mt-2 text-lg leading-5 capitalize text-[#184363] flex gap-1 items-center">
                            <svg width="18" height="18" viewBox="0 0 13 12" className="icon icon-share text-[#184363]" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                                <path d="M1.625 8.125V10.2917C1.625 10.579 1.73914 10.8545 1.9423 11.0577C2.14547 11.2609 2.42102 11.375 2.70833 11.375H10.2917C10.579 11.375 10.8545 11.2609 11.0577 11.0577C11.2609 10.8545 11.375 10.579 11.375 10.2917V8.125" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
                                <path fillRule="evenodd" clipRule="evenodd" d="M6.14775 1.27137C6.34301 1.0761 6.65959 1.0761 6.85485 1.27137L9.56319 3.9797C9.75845 4.17496 9.75845 4.49154 9.56319 4.6868C9.36793 4.88207 9.05135 4.88207 8.85609 4.6868L6.5013 2.33203L4.14652 4.6868C3.95126 4.88207 3.63468 4.88207 3.43942 4.6868C3.24415 4.49154 3.24415 4.17496 3.43942 3.9797L6.14775 1.27137Z" fill="currentColor"></path>
                                <path fillRule="evenodd" clipRule="evenodd" d="M6.5 1.125C6.77614 1.125 7 1.34886 7 1.625V8.125C7 8.40114 6.77614 8.625 6.5 8.625C6.22386 8.625 6 8.40114 6 8.125V1.625C6 1.34886 6.22386 1.125 6.5 1.125Z" fill="currentColor"></path>
                            </svg>
                            Share</h3>

                    </div>
                </div>
                <div className='mt-[76px]'>
                    <h2 className='text-2xl text-[#184363] font-bold'>You may also like</h2>
                    <div className="flex flex-wrap gap-6 mt-[50px]">
                    {/* {product.map((item,idx)=> <ProductCard key={idx} item={item}/>)} */}
                    {product.map((item,idx)=> <ProductCard key={idx} item={item}/>)}
                </div>
                </div>
            </Container>
        </div>
    );
};

export default Details;