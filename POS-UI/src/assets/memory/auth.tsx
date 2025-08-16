import { createContext, useReducer, type ReactNode } from "react";
import type { AuthAction, AuthContextType, AuthState } from "../../types/authTypes";

const initialState:AuthState = {
    token: null,
    authenticated: false
};

interface MyProps {
  children: ReactNode;
}

function reducer(state:AuthState, action:AuthAction) {
    switch(action.type) {
        case "put": {
            const newState = {
                token: action.token,
                authenticated: true
            };
            return newState;
        }
        default:
            throw new Error();
    }
}

export let AuthContext = createContext<AuthContextType | null>(null);

function MemoryAuth({ children }: MyProps) {
    const value = useReducer(reducer, initialState);
    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
}

export default MemoryAuth