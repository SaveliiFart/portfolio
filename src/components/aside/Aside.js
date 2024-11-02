import "./style.css";
import enemy from "../../img/aside/enemy.svg";
import telegram from "../../img/aside/telegram.png";
import instagram from "../../img/aside/instagram.svg";
import github from "../../img/aside/github.svg";

const Aside = () => {
return (
    <aside className="aside">
        <div className="aside__enemy">
            <img src={enemy} alt="enemy" />
        </div>
        <div className="aside__name">
            <p>
            <strong>Fartushnyi</strong> Savelii
            </p>
            <span>Frontend Developer</span>
        </div>
        <div className="aside__text">
            <p>
                High level experience
                <br /> in web development
                <br /> knowledge
            </p>
        </div>
        <div className="aside__social">
            <a href="https://t.me/Savelii_Fartushnyi">
                <img src={telegram} alt="telegram" />
            </a>
            <a href="https://www.instagram.com/fartuw/">
                <img src={instagram} alt="instagram" />
            </a>
            <a href="https://github.com/SaveliiFart">
                <img src={github} alt="github" />
            </a>
        </div>
        <div className="aside__btn">
            <button><a href="https://drive.google.com/file/d/10wjAM8aQyi7IgvM_x_DsweI7Z7eBoV3z/view?usp=drive_link">Dowloand CV</a></button>
        </div>
    </aside>
);
};

export default Aside;
