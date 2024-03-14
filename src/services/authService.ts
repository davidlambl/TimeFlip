// authService.ts
export const getToken = async (): Promise<string | null> => {
  let token = localStorage.getItem('authToken');
  if (!token) {
    await setToken();
    token = localStorage.getItem('authToken');
  }
  return token;
};
export const setToken = async (): Promise<void> => {
  let token: string;
  try {
    const response = await fetch(
      'https://newapi.timeflip.io/api/auth/email/sign-in',
      {
        method: 'POST',
        body: JSON.stringify({
          email: '',
          password: '',
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    if (!response.ok) throw new Error('Network response was not ok');
    token = response.headers.get('Token')!;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
  localStorage.setItem('authToken', token);
};
export const removeToken = (): void => localStorage.removeItem('authToken');
