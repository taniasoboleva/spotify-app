
export async function generateToken() {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
    const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;

    const urlencoded = new URLSearchParams();
    urlencoded.append("grant_type", "client_credentials");
    urlencoded.append("client_id", CLIENT_ID);
    urlencoded.append("client_secret", CLIENT_SECRET);

    const requestOptions: any = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'
    };

    const res: any = await fetch('https://accounts.spotify.com/api/token', requestOptions);

    return await res.json();
}
