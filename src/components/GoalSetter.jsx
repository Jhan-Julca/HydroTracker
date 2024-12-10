import React, { useState } from 'react';

const GoalSetter = ({ onSetGoal }) => {
    const [goal, setGoal] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (goal > 0) {
            onSetGoal(parseInt(goal));
            setGoal('');
        }
    };

    return (
        <div>
            <h2>Establecer Meta Diaria</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="number"
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)}
                    placeholder="Meta en ml"
                />
                <button type="submit">Establecer</button>
            </form>
        </div>
    );
};

export default GoalSetter;
