import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WeatherInfo = () => {
    const [city, setCity] = useState('Lima');
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState('');
    const API_KEY = '6d7445d16be64deba0e194101241012';

    const fetchWeather = async () => {
        try {
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
            );
            setWeather(response.data);
            setError('');
        } catch (err) {
            setError('Error al obtener el clima.');
        }
    };

    useEffect(() => {
        fetchWeather();
    }, []);

    const handleCityChange = (e) => setCity(e.target.value);

    const handleCitySubmit = (e) => {
        e.preventDefault();
        fetchWeather();
    };

    if (error) return <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>;

    if (!weather) return <p style={{ textAlign: 'center' }}>Cargando clima...</p>;

    return (
        <div style={{ margin: '20px auto', maxWidth: '400px', textAlign: 'center' }}>
            <form onSubmit={handleCitySubmit}>
                <input
                    type="text"
                    value={city}
                    onChange={handleCityChange}
                    placeholder="Ingresa tu ciudad"
                    style={{ padding: '10px', width: 'calc(100% - 22px)', marginBottom: '10px' }}
                />
                <button type="submit">Consultar Clima</button>
            </form>
            <h2>Clima en {weather.name}</h2>
            <p>Temperatura: {weather.main.temp}°C</p>
            <p>Condición: {weather.weather[0].description}</p>
            <p>Humedad: {weather.main.humidity}%</p>
            <p>Viento: {weather.wind.speed} m/s</p>
        </div>
    );
};

export default WeatherInfo;
