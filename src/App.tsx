import React, { useState, useEffect } from 'react';
import LoginForm from './components/LoginForm';
import GoalSetter from './components/GoalSetter';
import DailyTracker from './components/DailyTracker';
import ProgressBar from './components/ProgressBar';
import WeatherInfo from './components/WeatherInfo';

const App = () => {
    const [user, setUser] = useState(null); // Estado para guardar el nombre del usuario conectado
    const [isWelcome, setIsWelcome] = useState(false); // Estado para mostrar el mensaje de bienvenida
    const [currentWater, setCurrentWater] = useState(0); // Agua consumida actual
    const [goal, setGoal] = useState(2000); // Meta diaria inicial (en ml)
    const [isGoalReached, setIsGoalReached] = useState(false); // Estado para mensaje de felicitaciones

    const handleLogin = (username) => {
        setUser(username); // Guarda el nombre del usuario
        setIsWelcome(true); // Activa el mensaje de bienvenida
    };

    useEffect(() => {
        if (isWelcome) {
            // Después de 5 segundos, oculta el mensaje de bienvenida
            const timer = setTimeout(() => setIsWelcome(false), 5000);
            return () => clearTimeout(timer); // Limpia el temporizador si el componente se desmonta
        }
    }, [isWelcome]);

    const handleAddWater = (amount) => {
        setCurrentWater((prev) => {
            const newTotal = prev + amount;
            if (newTotal >= goal) {
                setIsGoalReached(true); // Activa el mensaje de felicitaciones
            }
            return newTotal;
        });
    };

    const handleSetGoal = (newGoal) => {
        setGoal(newGoal);
        setCurrentWater(0); // Reinicia el progreso actual
        setIsGoalReached(false); // Reinicia el estado de felicitaciones
    };

    return (
        <div>
            <header style={{ backgroundColor: '#007bff', color: 'white', padding: '10px 20px' }}>
                <h1>HydroTracker</h1>
                {user && <p>Bienvenido, {user}!</p>}
            </header>
            {!user ? (
                <LoginForm onLogin={handleLogin} />
            ) : isWelcome ? (
                <div style={{ textAlign: 'center', marginTop: '50px' }}>
                    <h2>¡Bienvenido, {user}! Cargando tu panel...</h2>
                </div>
            ) : (
                <div>
                    <GoalSetter onSetGoal={handleSetGoal} />
                    <DailyTracker onAddWater={handleAddWater} />
                    <ProgressBar current={currentWater} goal={goal} />
                    {isGoalReached && (
                        <div
                            style={{
                                marginTop: '20px',
                                padding: '15px',
                                backgroundColor: '#d4edda',
                                color: '#155724',
                                border: '1px solid #c3e6cb',
                                borderRadius: '5px',
                                textAlign: 'center',
                            }}
                        >
                            <h2>🎉 ¡Felicidades! 🎉</h2>
                            <p>Has alcanzado tu meta diaria de hidratación. ¡Sigue así!</p>
                        </div>
                    )}
                    <WeatherInfo />
                </div>
            )}
        </div>
    );
};

export default App;
