import html from "../../img/skills/html.svg";
import css from "../../img/skills/css.svg";
import js from "../../img/skills/js.svg";
import react from "../../img/skills/React.svg";
import typescirpt from "../../img/skills/typescript.svg";
import angular from "../../img/skills/angular.svg";
import node from "../../img/skills/nodeJs.svg";
import git from "../../img/skills/git.svg";
import electron from "../../img/skills/electron.svg";

const skillList = [
    {
        html: {
            img: html,
            title: "HTML",
            percentage: 90,
            colorFront: '#CC985B',
            colorBack: '#F4B76E'
        },
        css: {
            img: css,
            title: "CSS",
            percentage: 90,
            colorFront: '#84B1DB',
            colorBack: '#CDE7FF'
        },
        js: {
            img: js,
            title: "JavaScript",
            percentage: 80,
            colorFront: '#EDE98B',
            colorBack: '#FFFCB6'
        },
        react: {
            img: react,
            title: "React",
            percentage: 50,
            colorFront: '#87D9D4',
            colorBack: '#A9EBE7'
        },
        typescirpt: {
            img: typescirpt,
            title: "Typescript",
            percentage: 50,
            colorFront: '#007ACC',
            colorBack: '#92d2fc'
        },
        angular: {
            img: angular,
            title: "Angular",
            percentage: 40,
            colorFront: '#DD0031',
            colorBack: '#ff8ba5'
        },
        node: {
            img: node,
            title: "NodeJs",
            percentage: 50,
            colorFront: '#8CC84B',
            colorBack: '#A9EBE7'
        },
        git: {
            img: git,
            title: "Git",
            percentage: 70,
            colorFront: '#F1502F',
            colorBack: '#FF8A6A'
        },
        electron: {
            img: electron,
            title: "Electron",
            percentage: 60,
            colorFront: '#6EBDFF',
            colorBack: '#A9EBE7'
        }
    },
];

export default skillList;