import './list.styles.css';
import checkbox from '../../../../assets/checkbox.png';


function List() {
    return(
        <div className='lists'>
        <li className='list'><img src={checkbox}/><p>Unlimited Bandwith</p></li>
        <li className='list'><img src={checkbox}/><p>Encrypyted Connection</p></li>
        <li className='list'><img src={checkbox}/><p>Works on All Devices</p></li>
        </div>
    )

}

export default List;