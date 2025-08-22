import type { CredentialsType } from "../types/CredentialsType";

interface Token {
    token: string | null;
}

export async function signup(credentials:CredentialsType) {
    const response = await fetch(`/api/signup`, {
        method: "POST",
        body: JSON.stringify(credentials),
        headers: {
            "content-type": "application/json; charset=UTF-8"
        },
    });
    if (response.status !== 200) throw new Error();
    const token: Token = await response.json();
    return token;
};

export async function login(credentials: CredentialsType){
    const response = await fetch(`/api/login`, {
        method: "POST",
        body: JSON.stringify(credentials),
        headers: {
            "content-type": "application/json; charset=UTF-8"
        },
    });
    if (response.status !== 200) throw new Error();
    const token: Token = await response.json();
    return token;
};