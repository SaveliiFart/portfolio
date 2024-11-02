import './style.css';
import { useEffect, useRef } from "react";
import { useLocalStorage } from "../../entities/utils/useLocalStorage";

const Darkmode = (props) => {

    const btnRef = useRef(null);
    const circleRef = useRef(null);

    const app = props.app.current;
    const [darkMode, setDarkMode] = useLocalStorage("darkMode", 'light');

    useEffect(() => {
        if(app) {
            if(darkMode === 'dark') {
                app.style.backgroundColor = 'rgba(77, 80, 94, 0.5)';
                circleRef.current.classList.add('btn__darkMode_circle-active');
            } else {
                app.style.backgroundColor = 'rgba(243,243,243,0.5)';
                circleRef.current.classList.remove('btn__darkMode_circle-active');
            }
        }
    }, [darkMode, app]);


    const toggleDarkMode = () => {
        setDarkMode((curValue) => {
            return curValue === 'light' ? 'dark' : 'light';
        });
    }

    return (
        <button ref={btnRef} className="btn__darkMode" onClick={toggleDarkMode}>
            <span ref={circleRef} className="btn__darkMode_circle"></span>
            <span className="btn__darkMode_oval"></span>
        </button>
    );
}

export default Darkmode;
