import Pets from "./components/Pets";
import './components/Pets.scss'

function App() {
    const pets = [
        {
            key: '1',
            name: 'Rocky',
            breed: 'Australian Terrier',
            img: './img/img-1.jpg',
            weight: 10,
            height: 36,
            coat: 'long',
            age: 1.5,
            date: new Date(2022, 1, 13),
        },
        {
            key: '2',
            name: 'Buddy',
            breed: 'American Bulldog',
            img: './img/img-2.jpg',
            weight: 15,
            height: 49,
            coat: 'shirt',
            age: 2.5,
            date: new Date(2022, 2, 28),
        },
        {
            key: '3',
            name: 'Charlie',
            breed: 'American Hairless Terrier',
            img: './img/img-3.jpg',
            weight: 15,
            height: 49,
            coat: 'shirt',
            age: 1,
            date: new Date(2021, 9, 12),
        },
        {
            key: '4',
            name: 'Dino',
            breed: 'Blue Lacy',
            img: './img/img-4.jpg',
            weight: 15,
            height: 49,
            coat: 'shirt',
            age: 0.5,
            date: new Date(2022, 1, 16),
        }
    ]

    return (
        <div className="wrapper">
            <h2>Amaizing pets</h2>
            <Pets items={pets}/>
        </div>
    );
}

export default App;