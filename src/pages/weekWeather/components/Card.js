import {icons} from './../../../utilities/utilities'
import './CardStyles.css'

function Card(props) {
    return ( 
        <div className='card-body'>
            <p className='card-title'>{props.info.day}</p>
            <div className='card-imagen-container'>
                <img src={icons[props.info.weather]} alt={props.info.weather} className='card-imagen'></img>
            </div>
            <div className='card-footer'>
                <p className='max-degree'>16°C</p>
                <p className='min-degree'>18°C</p>
            </div>
        </div>
     );
}

export default Card;