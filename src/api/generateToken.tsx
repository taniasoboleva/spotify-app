
export async function generateToken() {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    const urlencoded = new URLSearchParams();
    urlencoded.append("grant_type", "client_credentials");
    urlencoded.append("client_id", "33f18473c9864e51adb9623b94d829aa");
    urlencoded.append("client_secret", "ac004494f47347b7a42471080a29b36f");

    const requestOptions: any = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'
    };

    const res: any = await fetch('https://accounts.spotify.com/api/token', requestOptions);

    return await res.json();
}
