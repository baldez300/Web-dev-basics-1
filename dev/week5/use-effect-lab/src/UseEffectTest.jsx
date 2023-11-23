import React, { useState, useEffect } from 'react';

const UseEffectTest = () => {
  const [toggleOne, setToggleOne] = useState(false);
  const [toggleTwo, setToggleTwo] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('UseEffect1 Ran');
  });

  useEffect(() => {
    console.log('UseEffect2 Ran');
    if (toggleTwo)
        console.log('toggleTwo slice of state is true so this code runs');
  }, [toggleTwo]);

//   useEffect(() => {
//     setInterval(() => {
//       console.log(`UseEffect3 with interval number ${count} is running`);
//     }, 1000);
//   }, [count]);

  // To fix this problem, use the cleanup function. First, assign the setInterval function to a variable called myInterval.
  const myInterval = setInterval(() => {
    return () => {
        console.log(
          `UseEffect3 cleanup ran.\nsetInterval number ${count} is being cleared out`
        );
        clearInterval(myInterval);
      };
    });

  return (
    <div>
      {console.log('rendered or re-rendered')}
      <h1>UseEffectTest Component</h1>
      <button onClick={() => setToggleOne(!toggleOne)}>ToggleOne</button>
      <button onClick={() => setToggleTwo(!toggleTwo)}>ToggleTwo</button>
      {/* <button onClick={() => setCount(count + 1)}>Count</button> */}
    </div>
  );
};

export default UseEffectTest;
