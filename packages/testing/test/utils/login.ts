import { HttpClient } from './../../scripts/client';
export async function login() {
    const loginReq = {
        "username": "admin",
        "password": "xufeng23",
        "type": "account"
    };
    const res = await HttpClient.login(loginReq);
    return res;
}
