

import BlogCard from '../../components/Card/BlogCard';
import Banner01 from '../../components/Home/Banner01';
import Banner02 from '../../components/Home/Banner02';
import BestSelling from '../../components/Home/BestSelling';
import Featured from '../../components/Home/Featured';
import Hero from '../../components/Home/Hero';
import LatestNews from '../../components/Home/LatestNews';
import Newsletter from '../../components/Home/Newsletter';
import ShopByDepartments from '../../components/Home/ShopByDepartments';

const Home = () => {
    return (
        <div>
            <Hero/>
            <Featured/>
            <ShopByDepartments/>
            <Banner02/>
            <BestSelling/>
            <Banner01/>
            <LatestNews/>
            <Newsletter/>
        </div>
    );
};

export default Home;