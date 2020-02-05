import React from 'react';

import './NewGoal.css';

const NewGoal = () => {
    const addGoalHandler = event => {
        event.preventDefault();
    };

    return( 
    <form className="new-goal" onSubmit={addGoalHandler}>
        <input type="text" />
        <button type="submit">Add Goal</button> 
    </form>
    );
};

export default NewGoal;