import PetDate from "./PetDate";
import './Pet.css';

function Pet(props) {

    return (
        <div className="expense-item">
            <PetDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
        </div>
    );
}

export default Pet;