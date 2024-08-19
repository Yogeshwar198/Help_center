import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Card = ({ searchQuery }) => {

    const [cards, setCards] = useState([]);
    const [error, setError] = useState(null);


    useEffect(() => {
        async function fetchCards() {
            try {
                const res = await axios.get('https://help-center-backend-87er.onrender.com/cards');
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
        <div className='cart' style={{ margin: "100px 240px" }}>
            <div className="cart-item" style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr", gap: "80px 120px"
            }}>
                {Array.isArray(cards) && cards.length > 0 ? (
                    cards.filter((card) =>
                        card.title.toLowerCase().includes(searchQuery.toLowerCase())
                    ).map((card, index) => {
                        return (
                            <Link to={`/cards/${card.title}`} key={index} style={{ textDecoration: 'none', color: 'inherit' }}>
                                <div style={{
                                    border: "1px solid #d3d3d3",
                                    borderRadius: "8px",
                                    padding: "10px 20px",
                                    background: "#F7F7F7"
                                }}>
                                    <h4 style={{ fontWeight: "bold" }}>{card.title}</h4>
                                    <hr style={{
                                        width: "calc(100% + 40px)",
                                        border: "none",
                                        borderTop: "1px solid #d3d3d3",
                                        margin: "6px -20px"
                                    }} />
                                    <p style={{
                                        color: "gray",
                                        fontSize: "15px"
                                    }}>{card.description}</p>
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
