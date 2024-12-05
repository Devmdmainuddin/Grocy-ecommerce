import { Link, useLocation, useNavigate } from "react-router-dom";
import Container from "../../components/shared/Container";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useAddUserMutation } from "../../Featured/Auth/authApi";

const Register = () => {
    const [AddUser] = useAddUserMutation();

    const [showpassword, setshowpassword] = useState(null)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const location = useLocation()
    const from = location?.state || '/'

    const onSubmit = async data => {
        // const { firstName, lastName, email, password } = data;
        // console.log(firstName, lastName, email, password);

        try {
            await AddUser(data).unwrap();
            navigate(from);
        } catch (err) {
            console.log(err.message);
        }
    };
    return (
        <div className="py-20 bg-gray-200">
            <Container>
                <div className="w-full lg:w-1/2 px-4 mx-auto">
                    <div className=" text-center mx-auto">
                        <div className="mb-4 px-6 py-8 bg-white rounded-xl">
                            <div className="mb-6">
                                <span className="text-sm text-gray-500">Sign Up</span>
                                <h3 className="text-2xl font-bold">Create an account</h3>
                            </div>
                            <form action="" onSubmit={handleSubmit(onSubmit)}>
                                <div className="flex flex-wrap -mx-2">
                                    <div className="mb-4 w-full lg:w-1/2 px-2">
                                        <input {...register("firstName", { required: true })} className="w-full p-4 text-xs bg-gray-50 outline-none rounded" type="text" placeholder="First Name" />

                                    </div>

                                    <div className="mb-4 w-full lg:w-1/2 px-2">
                                        <input {...register("lastName")} className="w-full p-4 text-xs bg-gray-50 outline-none rounded" type="text" placeholder="Last Name" />
                                    </div>
                                </div>
                                {errors.firstName && <span className='text-red-500'>FirstName field is required</span>}
                                <div className="mb-4 flex p-4 bg-gray-50 rounded">
                                    <input {...register("email", { required: true })} className="w-full text-xs bg-gray-50 outline-none" type="email" placeholder="name@email.com" />
                                    <svg className="h-6 w-6 ml-4 my-auto text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"></path>
                                    </svg>

                                </div>
                                {errors.email && <span className='text-red-500'>Email field is required</span>}
                                <div className="mb-6 flex p-4 bg-gray-50 rounded">
                                    <input {...register("password", { required: true })} className="w-full text-xs bg-gray-50 outline-none" type={showpassword ? "text" : "password"} placeholder="Enter your password" />
                                    <span onClick={() => setshowpassword(!showpassword)}>

                                        {showpassword ? <svg className="h-6 w-6 ml-4 my-auto text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                                        </svg> : <svg className="h-6 w-6 ml-4 my-auto text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                                        </svg>}
                                    </span>
                                </div>
                                {errors.password && <span className='text-red-500'>password field is required</span>}
                                <div className="text-center">
                                    {/* <input type="submit" className="mb-2 w-full py-4 bg-green-600 hover:bg-green-700 rounded text-sm font-bold text-gray-50 transition duration-200"></input> */}
                                    <input type="submit" value="Sign Up" className="mb-2 w-full py-4 bg-green-600 hover:bg-green-700 rounded text-sm font-bold text-gray-50 transition duration-200" />
                                    <span className="text-gray-400 text-xs">Already have an account?<Link to='/login' className="text-green-600 hover:underline" href="#">Sign In</Link> </span>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </Container>



        </div>
    );
};

export default Register;