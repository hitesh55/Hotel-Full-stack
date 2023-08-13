import React from 'react';
import "./footer.css";
import { faTwitter, faInstagram, faLinkedin, faFacebook } from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
    return (
        <div className="footer">
            <div className="fLists">
                <ul className="fList">
                    <li className="fListItem">Countries</li>
                    <li className="fListItem">Regions</li>
                    <li className="fListItem">Districts</li>
                    <li className="fListItem">Cities</li>
                    <li className="fListItem">Airports</li>
                    <li className="fListItem">Hotels</li>
                </ul>
                <ul className="fList">
                    <li className="fListItem">Homes</li>
                    <li className="fListItem">Apartments</li>
                    <li className="fListItem">Resorts</li>
                    <li className="fListItem">Villas</li>
                    <li className="fListItem">Hostels</li>
                    <li className="fListItem">Guest houses</li>
                </ul>
                <ul className="fList">
                    <li className="fListItem">Unique places to stay</li>
                    <li className="fListItem">Reviews</li>
                    <li className="fListItem">Unpacked: Travel articles</li>
                    <li className="fListItem">Travel communities</li>
                    <li className="fListItem">Seasonal and holiday deals</li>
                </ul>
                <ul className="fList">
                    <li className="fListItem">Car rental</li>
                    <li className="fListItem">Flight Finder</li>
                    <li className="fListItem">Restaurant reservations</li>
                    <li className="fListItem">Travel Agents</li>
                </ul>
                <ul className="fList">
                    <li className="fListItem">Customer Service</li>
                    <li className="fListItem">Partner Help</li>
                    <li className="fListItem">Careers</li>
                    <li className="fListItem">Sustainability</li>
                    <li className="fListItem">Press center</li>
                    <li className="fListItem">Safety Resource Center</li>
                    <li className="fListItem">Investor relations</li>
                    <li className="fListItem">Terms &amp; conditions</li>
                </ul>
            </div>
            <div className="fSocial">
                <ul className="fSocialList">
                    <li className="fSocialListItem">
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faTwitter} className="icon"/>
                        </a>
                    </li>
                    <li className="fSocialListItem">
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} className="icon" />
                        </a>
                    </li>
                    <li className="fSocialListItem">
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin}  className="icon"/>
                        </a>
                    </li>
                    <li className="fSocialListItem">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebook}  className="icon"/>
                        </a>
                    </li>
                </ul>
            </div>

            <div className="fContact">
                <p className="fContactText">Contact Us:</p>
                <p className="fContactInfo">Email: maharajamanors@gmail.com</p>
                <p className="fContactInfo">Phone: +91 123 666 7890</p>
            </div>
            <div className="fText">© 2023 Maharaja Manors. All rights reserved.</div>
        </div>
    );
};

export default Footer;
