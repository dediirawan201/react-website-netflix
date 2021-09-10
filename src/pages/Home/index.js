import { Featured, Navbar } from '../../components';
import './home.scss';

const Home = () => {
    return (
        <div className="home">
            <Navbar/>
            <Featured type="series"/>
        </div>
    )
}
 
export default Home;
