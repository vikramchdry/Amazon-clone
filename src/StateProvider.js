import React, { createContext ,useContext,useReducer,} from 'react';
//{/* data layer*/}
//{/* we need this to track basket */}



// This is data layer
export  const StateContext = createContext();

// Build the Provider because once we create data layer . Provider is kind of middleman to send that to different component

export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );

// This is how we use it inside of a component

export const useStateValue = () => useContext(StateContext);

