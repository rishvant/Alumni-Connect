import AOS from 'aos';
import 'aos/dist/aos.css';
import "../styles/convocation.css";
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

AOS.init();

const Convocation = () => {
    return (
        <>
            <Navbar />
            <div className="main-head">
                <h1>Convocation</h1>
                <div className="content" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true">
                    <div className="item">
                        <div className="content" data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true">
                            <h2>
                                Fifth Convocation
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
                <div className="content" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true">
                    <div className="item">
                        <div className="content" data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true">
                            <h2>
                                Fourth Convocation
                            </h2>
                            <h4>Batch 2017-21</h4>
                            <ul>
                                <li><Link to="https://iiitu.ac.in/wp-content/uploads/2022/09/List-of-Graduands-2017-2014-15-Batch.pdf">List of Graduands</Link></li>
                                <li><Link to="https://iiitu.ac.in/wp-content/uploads/2022/09/Institute-Report-Fourth-Convocation-April-22.pdf">Convocation Report</Link></li>
                            </ul>
                        </div>
                        <div className="animate" data-aos="fade-left" data-aos-duration="2000" data-aos-easing="ease-in-out" data-aos-mirror="true">
                            <img src="/slider.jpg" />
                        </div>
                    </div>
                </div>
                <div className="partition"></div>
                <div className="content" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true">
                    <div className="item">
                        <div className="content" data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true">
                            <h2>
                                Third Convocation
                            </h2>
                            <h4>Batch 2016-20</h4>
                            <ul>
                                <li><Link to="https://iiitu.ac.in/wp-content/uploads/2022/09/List-of-Graduands-2016-20.pdf">List of Graduands</Link></li>
                                <li><Link to="https://iiitu.ac.in/wp-content/uploads/2022/09/Institute-Report-Third-Convocation-Aug.2020.pdf">Convocation Report</Link></li>
                            </ul>
                        </div>
                        <div className="animate" data-aos="fade-left" data-aos-duration="2000" data-aos-easing="ease-in-out" data-aos-mirror="true">
                            <img src="/slider.jpg" />
                        </div>
                    </div>
                </div>
                <div className="partition"></div>
                <div className="content" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true">
                    <div className="item">
                        <div className="content" data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true">
                            <h2>
                                Second Convocation
                            </h2>
                            <h4>Batch 2015-19</h4>
                            <ul>
                                <li><Link to="https://iiitu.ac.in/wp-content/uploads/2022/09/list-of-graduands-2015-19.pdf">List of Graduands</Link></li>
                                <li><Link to="https://iiitu.ac.in/wp-content/uploads/2022/09/Institute-Report-Second-Convocation-Nov.2019.pdf">Convocation Report</Link></li>
                            </ul>
                        </div>
                        <div className="animate" data-aos="fade-left" data-aos-duration="2000" data-aos-easing="ease-in-out" data-aos-mirror="true">
                            <img src="/slider.jpg" />
                        </div>
                    </div>
                </div>
                <div className="partition"></div>
                <div className="content" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true">
                    <div className="item">
                        <div className="content" data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true">
                            <h2>
                                First Convocation
                            </h2>
                            <h4>Batch 2014-18</h4>
                            <ul>
                                <li><Link to="https://iiitu.ac.in/wp-content/uploads/2022/09/List-of-Graduands-2014-18-Batch.pdf">List of Graduands</Link></li>
                                <li><Link to="https://iiitu.ac.in/wp-content/uploads/2022/09/Institute-Report-First-Convocation-March-2019.pdf">Convocation Report</Link></li>
                            </ul>
                        </div>
                        <div className="animate" data-aos="fade-left" data-aos-duration="2000" data-aos-easing="ease-in-out" data-aos-mirror="true">
                            <img src="/slider.jpg" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Convocation;