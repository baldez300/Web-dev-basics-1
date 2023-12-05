// GoalsContext.js
import { createContext, useContext, useState } from 'react';

const GoalsContext = createContext();

export const GoalsProvider = ({ children }) => {
  const [goals, setGoals] = useState([]);

  const addGoal = (newGoal) => setGoals([...goals, newGoal]);
  const removeGoal = (goalId) => setGoals(goals.filter((goal) => goal.id !== goalId));

  return (
    <GoalsContext.Provider value={{ goals, addGoal, removeGoal }}>
      {children}
    </GoalsContext.Provider>
  );
};

export const useGoals = () => useContext(GoalsContext);
