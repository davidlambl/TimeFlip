export const AuthTokenManager = {
  getToken: (): string | null => {
    return localStorage.getItem('authToken');
  },

  setToken: async (username: string, password: string): Promise<void> => {
    try {
      const response = await fetch(
        'https://newapi.timeflip.io/api/auth/email/sign-in',
        {
          method: 'POST',
          body: JSON.stringify({
            email: username,
            password,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      if (!response.ok) throw new Error('Network response was not ok');
      const token = response.headers.get('Token')!;
      localStorage.setItem('authToken', token);
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  },

  removeToken: (): void => {
    localStorage.removeItem('authToken');
  }
};
