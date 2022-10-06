import { Link } from 'react-router-dom';
import "./FooterLinks.css";

function FooterLinks() {
    return (
            <div className="links">
                <ul>
                    <li className="items">
                        <Link to="/">Home</Link>
                        </li>
                    <li className="items">
                        <Link to="/about">About</Link>
                        </li>
                    <li className="contact">
                        <Link to="/contact">Contact Us</Link>
                        </li>
                </ul>
            </div>
    );
}

export default FooterLinks;