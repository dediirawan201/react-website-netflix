import { Featured, Navbar,List } from '../../components';
import './home.scss';

const Home = () => {
    return (
        <div className="home">
            <Navbar/>
            <Featured type="series"/>
            <List/>
            <List/>
            <List/>
        </div>
    )
}
 
export default Home;
