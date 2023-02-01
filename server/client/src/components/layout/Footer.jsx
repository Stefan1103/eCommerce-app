import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagram, faPinterestP, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
	return (
		<div className="myFooter">
			<div className="left">
				<h6>
					<FontAwesomeIcon icon={faCopyright} /> all rights reserved by FleaMarket
				</h6>
			</div>
			<div className="right">
				<ul>
					<li>
						<a href="#">
							<FontAwesomeIcon icon={faFacebookF} />
						</a>
					</li>
					<li>
						<a href="#">
							<FontAwesomeIcon icon={faTwitter} />
						</a>
					</li>
					<li>
						<a href="#">
							<FontAwesomeIcon icon={faInstagram} />
						</a>
					</li>
					<li>
						<a href="#">
							<FontAwesomeIcon icon={faPinterestP} />
						</a>
					</li>
					<li>
						<a href="#">
							<FontAwesomeIcon icon={faYoutube} />
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Footer;
