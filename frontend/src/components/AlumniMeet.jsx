import AOS from 'aos';
import 'aos/dist/aos.css';
import "../styles/convocation.css";
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

AOS.init();

const AlumniMeet = () => {
    return (
        <>
            <Navbar />
            <div className="main-head">
                <h1>Events</h1>
                <div className="content" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true">
                    <div className="item">
                        <div className="content" data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true">
                            <h2>
                                First Alumni Meet
                            </h2>
                            <h4>Batch 2018-22</h4>
                            <ul>
                                <li><Link to="https://iiitu.ac.in/wp-content/uploads/2022/09/List-of-Graduands-2018-22-batch.pdf">List of Graduands</Link></li>
                                <li><Link>Convocation Report</Link></li>
                            </ul>
                        </div>
                        <div className="animate" data-aos="fade-left" data-aos-duration="2000" data-aos-easing="ease-in-out" data-aos-mirror="true">
                            <img src="/slider.jpg" />
                        </div>
                    </div>
                </div>
                <div className="partition"></div>
            </div>
        </>
    )
}

export default AlumniMeet;