import './footer.styles.css';
import logo from '../../assets/Logo.png';
import facebook from '../../assets/Facebook.png';
import twitter from '../../assets/Twitter.png';
import instagram from '../../assets/Instagram.png'



function Footer(){
    return(
        <footer className='footer'>
            <div className='footer-first-grid'>
                <img alt="logo" src={logo}/>
                <p className='firstp'><span>LaslesVPN</span> is a private virtual network that <br />has unique features and has high security.</p>
                <div>
                    <img src={facebook} alt="facebook" />
                    <img src={twitter} alt="twitter" />
                    <img src={instagram} alt="instagram" />
                </div>
                <p className='secondp'>©2020LaslesVPN</p>
            </div>

            <div className='footer-second-grid'>
                <div>
                    <h4>Product</h4>
                    <ul>
                        <li>Download</li>
                        <li>Pricing</li>
                        <li>Locations</li>
                        <li>Server</li>
                        <li>Countries</li>
                        <li>Blog</li>
                    </ul>
                </div>

                <div>
                    <h4>Engage</h4>
                    <ul>
                        <li>LaslesVPN ?</li>
                        <li>FAQ</li>
                        <li>Tutorials</li>
                        <li>About Us</li>
                        <li>Privacy Policy</li>
                        <li>Terms of Service</li>
                    </ul>
                </div>

                <div>
                    <h4>Earn Money</h4>
                    <ul>
                        <li>Affiliate</li>
                        <li>Become Partner</li>
                    </ul>
                </div>
            </div>
        </footer>

    )
}

export default Footer