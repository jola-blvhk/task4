import './review.styles.css';
import star from '../../../assets/star.png';

function Review(props){
    return(
        <div className='review'>
            <div className='reviewd'>
                <div><img className="ppicture"src={props.picture} />
                    <div>
                    <p className="pname"> {props.pname}</p>
                    <p className='location'>{props.location}</p>
                    </div>
                </div>
                <div><p>4.5 <span><img src={star}/></span></p></div>
            </div>
            <div className='reviewi'>
                <p>{props.review}</p>
            </div>
        </div>
    )
}

export default Review;