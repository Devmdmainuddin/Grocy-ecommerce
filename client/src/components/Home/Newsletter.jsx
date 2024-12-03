

const Newsletter = () => {
    return (
        <div className="mt-[80px] py-[30px]  flex flex-col justify-center items-center">
            <h2 className=" text-2xl font-semibold">Join Our Newsletter & Get $10 Discount For Your First Order!</h2>
            <p className=" text-[16px]  mt-3 capitalize">Get e-mail updates about our letest shop and special offers.</p>
            <div className="flex items-center mt-[30px]">
                <input type="text" name="" id="" placeholder="Enter Your Email" className="py-2.5 px-5 rounded-tl-full rounded-bl-full text-[#004461] outline-0 w-full md:w-[320px]" />
                <button className="py-2.5 px-3 rounded-tr-full rounded-br-full text-white bg-[#00B881] flex gap-2 items-center">
                    <svg className="icon icon-newsletter text-white" width="16px" height="16px" id="Layer_1" fill="currentColor" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 383.12 332.94"><path d="M-528,53.53c1.86-5,5.73-7.33,10.53-9.16Q-339.64-23.38-161.91-91.36c4.9-1.87,9.51-2.17,13.57,1.67s4.05,8.37,2.5,13.44Q-190.93,71.26-235.9,218.83c-3.24,10.61-11.1,13.21-20,6.61q-48.51-36-97-72c-1-.73-2-1.43-3.33-2.37-.71,1.34-1.35,2.49-1.94,3.67q-19.35,38.35-38.71,76.72a34,34,0,0,1-2.15,3.93,11.17,11.17,0,0,1-12.18,4.47,11.29,11.29,0,0,1-8.16-9.7,40.21,40.21,0,0,1-.08-4.11q0-58.19.07-116.37c0-3-.78-4.28-3.64-5.37-31.63-12.08-63.18-24.39-94.81-36.46-4.71-1.8-8.35-4.29-10.16-9.08Zm346.76-90.77-.77-.53L-343.43,132.51l90,66.8C-229.23,120.1-205.24,41.43-181.24-37.24Zm-55.37-.84-.29-.56L-485.17,56.14c1.8.79,2.8,1.28,3.83,1.68,22.65,8.75,45.31,17.45,67.93,26.29a6.28,6.28,0,0,0,6.78-.85q83.55-59.67,167.22-119.18C-238.45-36.61-237.54-37.36-236.61-38.08ZM-397,180.07l.79.13,1.68-3.31q11.81-23.32,23.63-46.65a21,21,0,0,1,3.38-4.86q47-49.74,94.15-99.39,13.31-14,26.59-28.1a6.67,6.67,0,0,0-3.34,1.39q-72,51.29-144.07,102.53a5.87,5.87,0,0,0-2.86,5.46c.1,22.44.05,44.88.05,67.33Z" transform="translate(528 92.7)"></path></svg>
                    Subscibe
                </button>
            </div>
        </div>
    );
};

export default Newsletter;