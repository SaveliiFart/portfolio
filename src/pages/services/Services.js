import Footer from '../../components/footer/Footer';
import services from '../../img/serivces/services_img.png';
import './style.css';

const Services = () => {
    return (
        <main className="main__services">
            <div className="services__title">
                <p>Services</p>
                <span>What I can do for you</span>
                <div>I offer services in website development, front-end design and UX/UI, web application development, database and API integration, as well as optimization and maintenance of existing solutions.</div>
                <img src={services} alt="services"/>
            </div>
            <Footer />
        </main>
    );
}

export default Services;