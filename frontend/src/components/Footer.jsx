import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
		<footer id="footer" className="footer ">
			<div className="footer-top">
				<div className="container">
					<div className="row">
						<div className="col-lg-3 col-md-6 col-12">
							<div className="single-footer">
								<img src="/iiitu-logo.png" />
								<h5>Follow Us</h5>
								<ul className="social">
									<li><Link to="https://www.facebook.com/iiituna/"><FaFacebook style={{marginTop:"-2px"}} /></Link></li>
									<li><Link to="https://twitter.com/iiituna"><FaTwitter style={{marginTop:"-2px"}} /></Link></li>
									<li><Link to="https://in.linkedin.com/school/iiituna/"><FaLinkedinIn style={{marginTop:"-2px"}} /></Link></li>
									<li><Link to="https://www.instagram.com/iiit.una_/"><FaInstagram style={{marginTop:"-2px"}} /></Link></li>
								</ul>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-12">
							<div className="single-footer f-link">
								<h2>Useful Links</h2>
								<div className="row-head">
										<ul>
											<li><Link to="/"><i className="fa fa-caret-right" aria-hidden="true"></i>Home</Link></li>
											<li><Link to="/events"><i className="fa fa-caret-right" aria-hidden="true"></i>Events</Link></li>
											<li><Link to="/directory"><i className="fa fa-caret-right" aria-hidden="true"></i>Directory</Link></li>
											<li><Link to="https://iiitu.ac.in/about/organization/senate/placements-statistics/"><i className="fa fa-caret-right" aria-hidden="true"></i>Placements</Link></li>
											<li><Link to="#"><i className="fa fa-caret-right" aria-hidden="true"></i>About Us</Link></li>	
										</ul>
										<ul>
											<li><Link to="https://iiitu.ac.in/"><i className="fa fa-caret-right" aria-hidden="true"></i>IIIT Una</Link></li>
											<li><Link to="#"><i className="fa fa-caret-right" aria-hidden="true"></i>Awards</Link></li>
											<li><Link to="#"><i className="fa fa-caret-right" aria-hidden="true"></i>Testimonials</Link></li>
											<li><Link to="#"><i className="fa fa-caret-right" aria-hidden="true"></i>FAQ</Link></li>
										</ul>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-12">
							<div className="single-footer">
								<h2>Contact Us</h2>
								<p>Indian Institute of Information Technology Una<br />Permanent Campus: Vill. Saloh, Teh. Haroli, Distt. Una Himachal Pradesh-177209</p>
								<ul className="time-sidual">
									<li className="day">Phone: 01975-257908</li>
									<li className="day">E-Mail: <Link href="mailto:office@iiitu.ac.in">office@iiitu.ac.in</Link></li>
								</ul>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-12">
							<div className="single-footer">
								<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.565569044615!2d76.18811517506771!3d31.48113464908043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391adb198180014f%3A0xbf76347093a3aa9a!2sIndian%20Institute%20of%20Information%20Technology%20(IIIT)%20Una!5e0!3m2!1sen!2sin!4v1699030662549!5m2!1sen!2sin" width="300" height="300" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="copyright">
				<div className="container">
					<div className="row">
						<div className="col-lg-12 col-md-12 col-12">
							<div className="copyright-content">
								<p>© Copyright 2024  |  All Rights Reserved by <Link to="https://iiitu.ac.in" target="_blank">iiitu.ac.in</Link></p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
    )
}

export default Footer;