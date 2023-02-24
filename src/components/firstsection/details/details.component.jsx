import './details.styles.css'

function Details(props) {

    return(
        <div className="details">
            <img src={props.img}/>
            <p><span>{props.number}</span><br/>{props.detail}</p>
        </div>
    )
}
export default Details;