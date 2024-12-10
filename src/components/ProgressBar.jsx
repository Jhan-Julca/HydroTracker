import React from 'react';

const ProgressBar = ({ current, goal }) => {
    const percentage = Math.min((current / goal) * 100, 100);

    return (
        <div style={{ textAlign: 'center', margin: '20px auto', maxWidth: '400px' }}>
            <h2 style={{ color: '#4CAF50' }}>Progreso</h2>
            <div
                style={{
                    backgroundColor: '#f0f0f0',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    border: '1px solid #ccc',
                }}
            >
                <div
                    style={{
                        width: `${percentage}%`,
                        backgroundColor: '#4CAF50',
                        height: '30px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontWeight: 'bold',
                    }}
                >
                    {Math.round(percentage)}%
                </div>
            </div>
            <p style={{ marginTop: '10px', fontSize: '16px', color: '#333' }}>
                {current} ml / {goal} ml
            </p>
        </div>
    );
};

export default ProgressBar;
