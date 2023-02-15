import {useEffect, useState} from "react";
import styles from './authentication.module.css';

function SpotifyLogin() {
    const CLIENT_ID = "c35655e60fa34a61ab97ed457628b872";
    const REDIRECT_URI = "http://localhost:3000";
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
    const RESPONSE_TYPE = "token"

    const [token, setToken] = useState("")

    useEffect(() => {
        const hash = window.location.hash
        let token = window.localStorage.getItem("token") as string;

        if (!token && hash) {
            // @ts-ignore
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1];

            window.location.hash = ""
            window.localStorage.setItem("token", token)
        }

        setToken(token)

    }, [])

    const logout = () => {
        setToken("")
        window.localStorage.removeItem("token")
    }

    return (
        <div className={styles.loginWrapper}>
            {!token ?
                <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>
                    <button className={styles.loginButton}>Log In</button>
                </a>
                : <button
                    onClick={logout}
                    className={styles.loginButton}
                    style={{backgroundColor: '#444444'}}
                >
                    Log Out
                </button>}
        </div>
    );
}

export default SpotifyLogin;
