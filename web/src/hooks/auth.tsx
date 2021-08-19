import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: User;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

interface AuthState {
  token: string;
  user: User;
}

interface User {
  id: string;
  name: string;
  email: string;
  updated_at: string;
  created_at: string;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@Associados:token');
    const user = localStorage.getItem('@Associados:user');

    if (token && user) {
      api.defaults.headers.Authorization = `Bearer ${token}`
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('/session', { email, password });

    const { token, user } = response.data;

    localStorage.setItem('@Associados:token', token);
    localStorage.setItem('@Associados:user', JSON.stringify(user));

    api.defaults.headers.Authorization = `Bearer ${response.data.token}`

    setData({ token, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@Associados:token');
    localStorage.removeItem('@Associados:user');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within am AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
