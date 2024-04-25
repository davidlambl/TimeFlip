import { AuthTokenManager } from './authService';

export const fetchData = async <T>(url: string): Promise<T> => {
  const token: string | null = AuthTokenManager.getToken();
  if (!token) throw new Error('No token found');

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) throw new Error('Network response was not ok');
    return (await response.json()) as T;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
