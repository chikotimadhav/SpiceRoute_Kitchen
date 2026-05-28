import { createContext, useState, useCallback } from "react";

export const AuthContext = createContext(null);

/**
 * Wrap your app (or a subtree) with <AuthProvider> to give all children
 * access to authentication state via useAuth().
 */
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = useCallback((userData) => {
    setUser(userData);
  }, []);

  const logout = useCallback(() => {
    setUser(null);
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
}
