import { ThemeProvider } from "./context/ThemeContext";
import { AuthProvider }  from "./context/AuthContext";
import AppRoutes         from "./routes/AppRoutes";

/**
 * Root component.
 * Wraps the entire app in global context providers,
 * then delegates routing to AppRoutes.
 */
export default function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <AppRoutes />
      </ThemeProvider>
    </AuthProvider>
  );
}
