import fsd from '../../assets/firstsection-diagram.png';
import './firstsection.styles.css';
import Details from './details/details.component';
import Users from '../../assets/user.png';
import Location from '../../assets/location.png';
import Server from '../../assets/Server.png'

function FirstSection() {
    return(
        <section className='firstsection'>
            <div className="firstgrid">
                <div className='firstgridd'>
                    <h2> Want anything to be easy with <span>LaslesVPN.</span></h2>
                    <p>Provide a network for all your needs with ease and fun using LalesVPN discover interesting features from us.</p>
                    <button>Get Started</button>
                </div>

                <div className='firstgridsd'> 
                    <img src={fsd}/>
                </div>
            </div>

            <div className='secondgrid'>
                <Details img={Users} number="90+" detail="Users"/>
                <Details img={Location} number="30+" detail="Locations"/>
                <Details img={Server} number="50+" detail="Servers"/>
            </div>
        </section>

    )
}

export default FirstSection;