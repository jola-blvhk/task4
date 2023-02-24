import './fifthsection.styles.css';
import Review from './reviews/review.component';
import picture1 from '../../assets/reviewpicture1.png'
import picture2 from '../../assets/reviewpicture2.png'
import picture3 from '../../assets/reviewpicture3.png'


function FifthSection(){
    return(
        <section className="fifthsection">
        <h3>Trusted by Thousands of <br /> Happy Customer</h3>
        <p>These are the stories of our customers who have joined us with great pleasure when using this crazy feature</p>
        <div className='reviews'>
        <Review picture={picture1} pname="Viezh Robert" location="Warsaw, Poland" review='“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.'/>
        <Review picture={picture2} pname="Yessica Christy" location="Shanxi, China" review='“I like it because I like to travel far and still can connect with high speed.”.'/>
        <Review picture={picture3} pname="Kim Young Jou" location="Seoul, South Korea" review='“This is very unusual for my business that currently requires a virtual private network that has high security.”.' />
        </div>

        <div className='subscribe'>
            <div>
                <h3>Subscribe Now to<br /> Get Special Features!</h3>
                <p>Let's subscribe with us and find the fun.</p>
            </div>
            <div>
                <button>Subscribe Now</button>
            </div>
        </div>
        </section>
    ) 
}

export default FifthSection;