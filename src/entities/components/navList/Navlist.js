import './style.css';
import { NavLink } from 'react-router-dom';

const Navlist = (props) => {
    return (
        <li className="nav-list__item">
            <NavLink to={props.name === 'About' ? '/' : `${props.path}`} className="nav-list__link">
                {props.name}
            </NavLink>
        </li>
    );
}

export default Navlist;