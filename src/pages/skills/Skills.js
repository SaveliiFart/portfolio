import './style.css';
import skillList from '../../entities/utils/skillList';
import Skill from '../../entities/components/skill/Skill';

const Skills = () => {
    return (
        <main className="main">
            <div className="skills__title">
                <p>Skills</p>
                <span>My technical level</span>
            </div>
            <div className="skill">
                <div className="skill__front">
                    <div className="skill__front_title">
                        <p>Front-end Developer</p>
                        <span>More than 1 years</span>
                    </div>
                    <div className="skill__front_content">
                        {
                            Object.keys(skillList[0]).map((key) => {
                                return <Skill key={key} img={skillList[0][key].img} title={skillList[0][key].title} percentage={skillList[0][key].percentage} colorFront={skillList[0][key].colorFront} colorBack={skillList[0][key].colorBack}/>
                            })
                        }
                    </div>
                </div>
                <div className="skill__back"></div>
                <div className="skill__others"></div>
            </div>
        </main>
    );
}

export default Skills;