import { Link } from "react-router-dom";
import Container from "../../components/shared/Container";


const Login = () => {
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
                            <form action="">
                               
                                <div className="mb-4 flex p-4 bg-gray-50 rounded">
                                    <input className="w-full text-xs bg-gray-50 outline-none" type="email" placeholder="name@email.com" />
                                    <svg className="h-6 w-6 ml-4 my-auto text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"></path>
                                    </svg>
                                </div>
                                <div className="mb-6 flex p-4 bg-gray-50 rounded">
                                    <input className="w-full text-xs bg-gray-50 outline-none" type="password" placeholder="Enter your password" />
                                    <button>
                                        <svg className="h-6 w-6 ml-4 my-auto text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                                        </svg>
                                    </button>
                                </div>
                                <div className="text-center">
                                    <button className="mb-2 w-full py-4 bg-green-600 hover:bg-green-700 rounded text-sm font-bold text-gray-50 transition duration-200"> Sign In</button>
                                    <span className="text-gray-400 text-xs">Already have an account? <Link to ='/register' className="text-green-600 hover:underline" >Sign Up</Link></span>
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