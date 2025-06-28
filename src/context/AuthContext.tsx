// src/context/AuthContext.tsx
import { createContext, useContext, useEffect, useState } from 'react';
import * as SecureStore from 'expo-secure-store';
import { Platform } from 'react-native';

type AuthContextType = {
  isAuthenticated: boolean;
  login: (token: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkToken = async () => {
      const token = Platform.OS === 'web'
      ? localStorage.getItem('access_token') // fallback for web
      : await SecureStore.getItemAsync('access_token');      setIsAuthenticated(!!token);
    };
    checkToken();
  }, []);

  const login = async (token: string) => {
    if (Platform.OS === 'web') {
      localStorage.setItem('access_token', token);
    } else {
      await SecureStore.setItemAsync('access_token', token);
    }
    setIsAuthenticated(true);
  };

  const logout = async () => {
    await SecureStore.deleteItemAsync('access_token');
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};
