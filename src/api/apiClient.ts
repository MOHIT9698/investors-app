const API_BASE_URL = 'https://your-api.com';

export const apiClient = async <T>(
  endpoint: string,
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET',
  body?: any,
  token?: string
): Promise<T> => {
  try {
    const response = await fetch(`${API_BASE_URL}/${endpoint}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` }),
      },
      body: body ? JSON.stringify(body) : undefined,
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Something went wrong');
    }

    return response.json() as Promise<T>;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

// Usage example:
// const data = await apiClient<User>('users/1', 'GET', undefined, token);
