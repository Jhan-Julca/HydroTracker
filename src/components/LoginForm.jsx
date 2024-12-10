import React, { useState } from 'react';

const LoginForm = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username && password) {
            onLogin(username); // Llama al método para indicar que el usuario inició sesión
        }
    };

    return (
        <div style={{ textAlign: 'center', margin: '50px auto', maxWidth: '400px' }}>
            <h2 style={{ color: '#4CAF50' }}>Iniciar Sesión</h2>
            <form
                onSubmit={handleSubmit}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                    backgroundColor: 'white',
                    padding: '20px',
                    borderRadius: '10px',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                }}
            >
                <div>
                    <label style={{ marginBottom: '5px', display: 'block', color: '#333' }}>Usuario:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Ingresa tu usuario"
                        style={{
                            width: '100%',
                            padding: '10px',
                            borderRadius: '5px',
                            border: '1px solid #ccc',
                        }}
                    />
                </div>
                <div>
                    <label style={{ marginBottom: '5px', display: 'block', color: '#333' }}>Contraseña:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Ingresa tu contraseña"
                        style={{
                            width: '100%',
                            padding: '10px',
                            borderRadius: '5px',
                            border: '1px solid #ccc',
                        }}
                    />
                </div>
                <button
                    type="submit"
                    style={{
                        padding: '10px',
                        backgroundColor: '#4CAF50',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                    }}
                >
                    Iniciar Sesión
                </button>
            </form>
        </div>
    );
};

export default LoginForm;
