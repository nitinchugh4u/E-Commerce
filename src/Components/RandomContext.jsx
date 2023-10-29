import React, { createContext } from "react";

const RandomContext = createContext();

const RandomProvider = (props) => {
  const random = Math.random();
  const state = random;

  return (
    <RandomContext.Provider value={state}>
      {props.children}
    </RandomContext.Provider>
  );
};

export { RandomProvider, RandomContext };
