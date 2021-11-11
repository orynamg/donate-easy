import Showcase from '../components/showcase';
import PopularCharities from '../components/popular-charities';
import Footer from '../components/footer';
import Navbar from '../components/navbar';

function Home() {
    return (
        <div className="home-page">

            <Navbar />
    
            <Showcase />
    
            <PopularCharities />
    
            <Footer />
    
        </div>
    );
}
    
    export default Home;
    
