import './style.css';

const Expcard = (props) => {
    return (
        <div className="exp_card">
            <div className="exp_card__icon">
                <img src={props.imgName} alt="yersExp"/>
            </div>
            <div className="exp_card__content">
                <span>
                Years
                <br />
                experience
                </span>
                <p>{props.yers}</p>
            </div>
        </div>
    );
}
 
export default Expcard;
