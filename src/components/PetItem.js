import PetDate from "./PetDate";
import './PetItem.scss';

function PetItem(props) {

    return (

        <div className="pets__pet pet">
            <div className="pet__picture">
                <img src={props.img} alt={props.name}/>
                <div className="pet__name">{props.name}</div>
            </div>
            <ul className="pet__description">
                <li className="pet__breed">Breed: {props.breed}</li>
                <li className="pet__weight">Weight: {props.weight} kg</li>
                <li className="pet__height">Height: {props.height} sm</li>
                <li className="pet__coat">Coat: {props.coat}</li>
                <li className="pet__age">Age: {props.age} years</li>
                <li className="pet__arrival-date">Arrival date:
                    <PetDate date={props.date}/>
                </li>
            </ul>
        </div>

    );
}

export default PetItem;