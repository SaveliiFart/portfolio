import work from "../../img/about/work.svg"
import education from "../../img/about/education.svg"
import './style.css'
import expList from "../../entities/utils/expList"
import Expcard from "../../entities/components/expCard/Expcard"
import qualificationList from "../../entities/utils/qualificationList"
import Qualification from "../../entities/components/qualificationCard/Qualificationcard"

const About = () => {
return (
    <main className="main">
        <h1>About</h1>
        <div div className="main__about">
            <p>
                Web Developer, with a focus on front-end development. I have a passion
                for creating beautiful, responsive, and user-friendly websites. I am a
                self-taught developer with a background in graphic design. I am always
                looking to learn new technologies and improve my skills.
            </p>
        </div>
        <div className="main__cards">
            {expList.map((item) => {
                return <Expcard key={item.id} title={item.title} id={item.id} imgName={item.imgName} yers={item.yers} />;
            })}
        </div>
        <div className="main__qualification">
            <div className="main__qualification_title">
                <strong>Qualification</strong>
                <span>My personal journey</span>
            </div>
            <div className="main__qualification_type">
                <div className="main__qualification_type_item">
                    <img src={education} alt="education" />
                    <span>Education</span>
                </div>
                <div className="main__qualification_type_item">
                    <img src={work} alt="work" />
                    <span>Work</span>
                </div>
            </div>
            <div className="main__qualification_cards">
                {qualificationList.map((item) => {
                    return <Qualification key={item.id} id={item.id} title={item.title} place={item.place} date={item.date} />;
                })}
            </div>
        </div>
    </main>
);
};

export default About;
