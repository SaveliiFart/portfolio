import './style.css';
import Darkmode from '../darkMode/Darkmode';
import Navlist from '../../entities/components/navList/Navlist';
import ONavList from '../../entities/utils/navList';

const Navbar = () => {
return (
    <nav className="nav">
        <div className="container">
            <div className="nav-row">
                <div className="logo">
                    <strong>Fartushnyi</strong> Savelii
                </div>

                <ul className="nav-list">
                    {ONavList.map((item) => (
                        <Navlist key={item.id} id={item.id} name={item.name} path={item.path}/>
                    ))}
                    <Darkmode />
                </ul>
            </div>
        </div>
    </nav>
);
};

export default Navbar;
