import './fourthsection.styles.css';
import map from '../../assets/map.png';
import netflix from '../../assets/Netflix.png';
import reddit from '../../assets/Reddit.png';
import amazon from '../../assets/Amazon.png';
import discord from '../../assets/Discord.png';
import spotify from '../../assets/Spotify.png'


function FourthSection() {
    return(
        <section className='fourthsection'>
            <h2>Huge Global Network of Fast VPN</h2>
            <p>See LaslesVPN everywhere to make it easier for you when you move locations.</p>
            <img src={map}/>

            <div className="companies">
                <img src={netflix} />
                <img src={reddit} />
                {/* <img src={amazon} />
                <img src={discord} />
                <img src={spotify} /> */}
            </div>
        </section>
    )
}

export default FourthSection;