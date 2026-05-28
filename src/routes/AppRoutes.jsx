import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainLayout  from "../layouts/MainLayout";
import AuthLayout  from "../layouts/AuthLayout";
import Home        from "../pages/Home";
import About       from "../pages/About";
import Dashboard   from "../pages/Dashboard";

/**
 * Central routing config.
 * Add new routes here; wrap with the appropriate layout.
 */
export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes — MainLayout (Navbar + Footer) */}
        <Route element={<MainLayout><Home /></MainLayout>}      path="/"         />
        <Route element={<MainLayout><About /></MainLayout>}     path="/about"    />

        {/* Admin routes — no public layout */}
        <Route element={<Dashboard />} path="/dashboard" />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
