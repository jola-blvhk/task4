import illustration from '../../assets/Illustration2.png';
import liststyle from '../../assets/list-style.png';
import './secondsection.styles.css'

function SecondSection() {
    return(
        <section className='secondsection'>
            <div>
                <img className='illustration' src={illustration}/>
            </div>

            <div>
                <h3>We Provide Many<br />Features You Can Use</h3>
                <p>You can explore the features that we provide with fun and have their own functions each feature.</p>
                <ul>
                    <li><img src={liststyle}/>
                    <p>Powerfull online protection.</p></li>
                    <li><img src={liststyle}/><p>Internet without borders.</p></li>
                    <li><img src={liststyle}/><p>Supercharged VPN</p></li>
                    <li><img src={liststyle}/><p>No specific time limits.</p></li>
                </ul>
            </div>
        </section>


    )
}

export default SecondSection;