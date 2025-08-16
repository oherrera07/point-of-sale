export interface AuthState {
    token: string | null;
    authenticated: boolean;
}

export type AuthAction = 
| {type: "put"; token: string};

export type AuthContextType = [AuthState, React.Dispatch<AuthAction>];