import React, { useState } from 'react';

const DailyTracker = ({ onAddWater, isWaiting }) => {
    const [amount, setAmount] = useState(250); // Cantidad fija de 250 ml

    return (
        <div style={{ textAlign: 'center', margin: '20px auto', maxWidth: '400px' }}>
            <h2 style={{ color: '#4CAF50' }}>Registrar Consumo Diario</h2>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', marginTop: '10px' }}>
                <button
                    onClick={() => setAmount(amount > 250 ? amount - 250 : 250)}
                    disabled={isWaiting}
                    style={{
                        padding: '10px 20px',
                        fontSize: '18px',
                        backgroundColor: '#007bff',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                    }}
                >
                    -
                </button>
                <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#333' }}>{amount} ml</span>
                <button
                    onClick={() => setAmount(amount + 250)}
                    disabled={isWaiting}
                    style={{
                        padding: '10px 20px',
                        fontSize: '18px',
                        backgroundColor: '#007bff',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                    }}
                >
                    +
                </button>
            </div>
            <button
                onClick={() => onAddWater(amount)}
                disabled={isWaiting}
                style={{
                    marginTop: '20px',
                    padding: '10px 20px',
                    fontSize: '16px',
                    backgroundColor: '#4CAF50',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                }}
            >
                Añadir Agua
            </button>
        </div>
    );
};

export default DailyTracker;
