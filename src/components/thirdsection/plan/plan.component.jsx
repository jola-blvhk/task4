import './plan.styles.css';
import plan from '../../../assets/plan.png';
import List from './list/list.component';


function Plan(props) {
    return (
        <div className='plan'>
            <div>
                <img src={plan}/>
                <p className='planname'>{props.planname}</p>
                <ul>
                    <List />
                   
                    
                </ul>
            </div>
            <div>
                <h2>{props.price}</h2>
                <button className='button'>Select</button>
            </div>
        </div>
    )
}

export default Plan;