import { T_Response } from '../types/types';

export async function fetchWebApi(endpoint: string, method: string, token: string, body?: T_Response) {
  const res = await fetch(`https://api.spotify.com/${endpoint}`, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-type': 'application/json'
    },
    method,
    body:JSON.stringify(body)
  });

  return await res.json();
}
