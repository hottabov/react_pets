import PetItem from './PetItem';
import Card from "./Card";
import './Pets.scss';

function Pets(props) {
    return (
        <Card className="pets">

            <PetItem name={props.items[0].name}
                     breed={props.items[0].breed}
                     img={props.items[0].img}
                     weight={props.items[0].weight}
                     height={props.items[0].height}
                     coat={props.items[0].coat}
                     age={props.items[0].age}
                     date={props.items[0].date}
            />
            <PetItem name={props.items[1].name}
                     breed={props.items[1].breed}
                     img={props.items[1].img}
                     weight={props.items[1].weight}
                     height={props.items[1].height}
                     coat={props.items[1].coat}
                     age={props.items[1].age}
                     date={props.items[1].date}
            />
            <PetItem name={props.items[2].name}
                     breed={props.items[2].breed}
                     img={props.items[2].img}
                     weight={props.items[2].weight}
                     height={props.items[2].height}
                     coat={props.items[2].coat}
                     age={props.items[2].age}
                     date={props.items[2].date}
            />
            <PetItem name={props.items[3].name}
                     breed={props.items[3].breed}
                     img={props.items[3].img}
                     weight={props.items[3].weight}
                     height={props.items[3].height}
                     coat={props.items[3].coat}
                     age={props.items[3].age}
                     date={props.items[3].date}
            />
        </Card>
    );
}

export default Pets;