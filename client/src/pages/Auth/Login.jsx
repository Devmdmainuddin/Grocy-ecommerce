import { Link, useLocation, useNavigate } from "react-router-dom";
import Container from "../../components/shared/Container";
import { useLoginUserMutation } from "../../Featured/Auth/authApi";
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import { useDispatch } from "react-redux";
import { resetAuth, setAuth } from "../../Featured/Auth/authSlice";
// import { useLogin } from "../../user";

const Login = () => {
    // const handleLogin=useLogin()
    const [LoginUser] = useLoginUserMutation()
    const dispatch = useDispatch();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const location = useLocation()
    const from = location?.state || '/'

    // const onSubmit = async ( data) => {

    //     try {
    //     const response = await LoginUser(data).unwrap();

    //     if (response.data.success == true) {

    //         const token = response.data.data.token;
    //         sessionStorage.setItem("accessToken", JSON.stringify(token));
    //         Swal.fire({
    //             position: "top-end",
    //             icon: "success",
    //             title: " login Successful ",
    //             showConfirmButton: false,
    //             timer: 1500
    //         });
    //         navigate(from)
    //     }else {

    //         Swal.fire({
    //             position: "top-end",
    //             icon: "error",
    //             title: "Invalid email or password",
    //             showConfirmButton: false,
    //             timer: 1500
    //         });
    //     }


    //     } catch (err) {
    //         console.log(err.message);
    //         Swal.fire({
    //             position: "top-end",
    //             icon: "error",
    //             title: err.message,
    //             showConfirmButton: false,
    //             timer: 1500,
    //         });
    //     }
    // }
    const onSubmit = async (data) => {
        try {
            const log = await LoginUser(data).unwrap();
            if (log?.success) {
                const token = log?.data.token;
             
                // sessionStorage.setItem("accessToken", JSON.stringify(token));
                localStorage.setItem("accessToken", JSON.stringify(token));
                dispatch(setAuth({ user: log.data.user }))
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Login Successful!",
                    showConfirmButton: false,
                    timer: 1500,
                });
                console.log(log);
                navigate(from, { replace: true });
            } else {
                // dispatch(resetAuth());
                Swal.fire({
                    icon: "error",
                    title: "Login Failed",
                    text: log?.message || "Invalid credentials",
                });
            }
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
        <div className="py-20 bg-gray-200">
            <Container>
                <div className="w-full lg:w-1/2 px-4 mx-auto">
                    <div className=" text-center mx-auto">
                        <div className="mb-4 px-6 py-8 bg-white rounded-xl">
                            <div className="mb-6">
                                <span className="text-sm text-gray-500">Sign In</span>
                                <h3 className="text-2xl font-bold">Create an account</h3>
                            </div>
                            <form action="" onSubmit={handleSubmit(onSubmit)}>

                                <div className="mb-4 flex p-4 bg-gray-50 rounded">
                                    <input {...register("email", { required: true })} className="w-full text-xs bg-gray-50 outline-none" type="email" placeholder="name@email.com" />
                                    <svg className="h-6 w-6 ml-4 my-auto text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"></path>
                                    </svg>
                                </div>
                                {errors.email && <span className='text-red-500'>This field is required</span>}
                                <div className="mb-6 flex p-4 bg-gray-50 rounded">
                                    <input {...register("password", { required: true })} className="w-full text-xs bg-gray-50 outline-none" type="password" placeholder="Enter your password" />
                                    <span>
                                        <svg className="h-6 w-6 ml-4 my-auto text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                                        </svg>
                                    </span>
                                </div>
                                {errors.password && <span className='text-red-500'>This field is required</span>}
                                <div className="text-center">
                                    {/* <button className="mb-2 w-full py-4 bg-green-600 hover:bg-green-700 rounded text-sm font-bold text-gray-50 transition duration-200"> </button> */}
                                    <input type="submit" value="Sign In" className="mb-2 w-full py-4 bg-green-600 hover:bg-green-700 rounded text-sm font-bold text-gray-50 transition duration-200" />
                                    <span className="text-gray-400 text-xs">Already have an account? <Link to='/register' className="text-green-600 hover:underline" >Sign Up</Link></span>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </Container>



        </div>
    );
};

export default Login;