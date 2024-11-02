import './style.css';

const Skill = (props) => {

    const progressStyle = {
        width: props.percentage + '%',
        backgroundColor: props.colorFront
    }

    return (
        <div className="skill__content_wrap">
            <img src={props.img} alt="html"/>
            <div className="skill__content_wrap_title">
                <p>{props.title}</p>
                <span>{props.percentage}%</span>
            </div>
            <div className="skill__content_wrap-progress" style={progressStyle}></div>
            <div className="skill__content_wrap-progressBack" style={{backgroundColor: props.colorBack}}></div>
        </div>
    );
}

export default Skill;