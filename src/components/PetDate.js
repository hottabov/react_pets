import './PetDate.scss';

function PetDate(props) {

    const month = props.date?.toLocaleString('en-US', {month: 'long'}),
        day = props.date?.toLocaleString('en-US', {day: '2-digit'}),
        year = props.date?.getFullYear();

    return (
        <div className="pet__date">
            {day} {month}, {year}
        </div>
    );
}

export default PetDate;