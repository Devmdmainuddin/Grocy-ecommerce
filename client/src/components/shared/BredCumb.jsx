import { Link } from "react-router-dom";
import Container from "./Container";


const BredCumb = () => {
    const pathSegments = window.location.pathname.split("/").filter(Boolean);
    return (
        <div className="bg-[#ECF4F6]">
            <Container>
                <div className='py-6  flex flex-col justify-center items-center'>
                    <h2 className='text-[#184363] text-2xl  font-bold capitalize'> {pathSegments[0] ? pathSegments[0] : "Home"}
                    </h2>

                     <ul className='flex items-center gap-2 mt-3'>
                        <li className='className="text-sm md:text-xl"  font-normal text-[#101750] flex items-center'>
                            <Link to='/' className="text-sm md:text-xl" >Home</Link>
                            {pathSegments[0] && (
                                <>
                                    <span className="mx-1 md:mx-2"> - </span>
                                    <Link to={`/${pathSegments[0]}`} className="text-sm md:text-xl">
                                        {pathSegments[0]}
                                    </Link>
                                </>
                            )}
                            {pathSegments[1] && (
                                <>
                                    <span className="mx-1 md:mx-2"> - </span>
                                    <Link to={`/${pathSegments[0]}/${pathSegments[1]}`} className="text-sm md:text-xl" >
                                        {pathSegments[1]}
                                    </Link>
                                </>
                            )}
                        </li>
                    </ul>
                </div>
            </Container>
        </div>
    );
};

export default BredCumb;