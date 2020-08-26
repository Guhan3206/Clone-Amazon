// setup data layer
// We need this to track the basket
import React ,{createContext,useContext,useReducer, Component} from "react";
// this is the data layer
export const StateContext= createContext();
// Build a provider 
export const StateProvider =({reducer,initialState,children}) =>(
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
)

// this is how we use it inside of a Component
export const useStateValue=()=> useContext(StateContext);