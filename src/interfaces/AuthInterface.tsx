export interface AuthContextObject {
    token: string | null | undefined;
    isLoggedIn: boolean,
    login: (token: string, expirationTime: string) => void,
    logout: () => void
}