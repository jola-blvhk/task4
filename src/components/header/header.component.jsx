import Logo from "../../assets/Logo.png";
import './header.styles.css';

function Header() {
    return(
        <header className="header">
            <div>
                <img src={Logo}/>
            </div>
            <div>
                <ul className="nav-links">
                    <li>About</li>
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>Testimonials</li>
                    <li>Help</li>
                </ul>
            </div>
            <div className="buttons">
                <button className="signin">Sign In</button>
                <button className="signup">Sign Up</button>
            </div>
        </header>
    )
}

export default Header;