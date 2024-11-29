

import BestSelling from '../../components/Home/BestSelling';
import Featured from '../../components/Home/Featured';
import Hero from '../../components/Home/Hero';
import ShopByDepartments from '../../components/Home/ShopByDepartments';

const Home = () => {
    return (
        <div>
            <Hero/>
            <Featured/>
            <ShopByDepartments/>
            <BestSelling/>
        </div>
    );
};

export default Home;