import React from 'react';
import { useEffect, useState } from 'react';
import PeopleDetails from '../PeopleDetails/PeopleDetails'
import Card from '../Card/Card'

const People = () => {
    const [people, setPeople] = useState([])
    const [card, setCard] = useState([])
    useEffect(() => {
        fetch('https://mocki.io/v1/e0ab4275-1340-4927-9f60-b9645bc37d22')
            .then(response => response.json())
            .then(data => setPeople(data))
            .catch(error => console.log(error))

    }, []);
    const handleClick = (product) =>{
        const newCard = [...card, product]
        setCard(newCard)
    }

    return (
        <div>
            <div>
                <h1>Hello: {card.length}</h1>
                {/* <p>Totat Salery: {totalSalery}</p> */}
                <Card card={card}></Card>
            </div>
            {
                people.map(people => <PeopleDetails
                    handleClick={handleClick}
                    key={people.id} people={people}></PeopleDetails>)
            }
        </div>
    );
};

export default People;