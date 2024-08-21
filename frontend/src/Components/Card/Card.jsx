import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Card.css'

const Card = ({ searchQuery }) => {

    const [cards, setCards] = useState([]);
    const [error, setError] = useState(null);


    useEffect(() => {
        async function fetchCards() {
            try {
                const res = await axios.get('http://localhost:5000/cards');
                setCards(res.data);
            } catch (error) {
                console.error("An error occurred while fetching the cards:", error);
                setError("Failed to load cards. Please try again later.");
            }
        }
        fetchCards();
    }, []);

    if (error) {
        return <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>;
    }

    return (
        <div className='card'>
            <div className="card-item">
                {Array.isArray(cards) && cards.length > 0 ? (
                    cards.filter((card) =>
                        card.title.toLowerCase().includes(searchQuery.toLowerCase())
                    ).map((card, index) => {
                        return (
                            <Link to={`/cards/${card.title}`} key={index} style={{ textDecoration: 'none', color: 'inherit' }}>
                                <div className='map-card'>
                                    <h4>{card.title}</h4>
                                    <hr />
                                    <p>{card.description}</p>
                                </div>
                            </Link>
                        );
                    })
                ) : (
                    !error && <p>Loading cards...</p>
                )}
            </div>
        </div>
    );
}

export default Card;
