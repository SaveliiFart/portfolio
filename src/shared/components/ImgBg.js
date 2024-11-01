import bg1 from '../../img/backGround/bg1.svg';
import bg2 from '../../img/backGround/bg2.svg';
import bg3 from '../../img/backGround/bg3.svg';

const ImgBg = () => {
    return (
    <>
        <img className='root__roseBg' src={bg1} alt='roseBg'/>
        <img className='root__greenBg' src={bg2} alt='greenBg'/>
        <img className='root__purpleBg' src={bg3} alt='purpleBg'/>
    </>
    );
}
 
export default ImgBg;