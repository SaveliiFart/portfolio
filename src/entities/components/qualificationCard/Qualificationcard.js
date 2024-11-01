import calendar from '../../../img/about/calendar.svg';
import './style.css';

const Qualificationcard = (props) => {
    return (
        <div className="qualification__card">
            <span>{props.title}</span>
            <div className="qualification__card_info">
                <p>{props.place}</p>
                <img src={calendar} alt="calendar" />
                <span>{props.date}</span>
            </div>
        </div>
    );
}

export default Qualificationcard;