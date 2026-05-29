import { ThemeProvider } from "./context/ThemeContext";
import AppRoutes         from "./routes/AppRoutes";

/**
 * Root component.
 * Wraps the entire app in global context providers,
 * then delegates routing to AppRoutes.
 */
export default function App() {
  return (
    <ThemeProvider>
      <AppRoutes />
    </ThemeProvider>
  );
}
