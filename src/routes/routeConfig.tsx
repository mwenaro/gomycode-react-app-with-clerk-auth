import { useUser } from "@clerk/clerk-react";
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../components/Dashboard";
import ProtectedRoute from "../components/ProtectedRoute";

export const routeConfig = (
  <Routes>
    <Route path="/" element={<div>Home Page</div>} />
    <Route
      path="/about"
      element={
        <ProtectedRoute>
          <div>About page</div>
        </ProtectedRoute>
      }
    />
    <Route path="/contact" Component={Dashboard} />
    <Route
      path="/dashboard"
      element={
        <ProtectedRoute>
          <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <h2 className="text-2xl font-semibold mb-4">
              Welcome to the Dashboard
            </h2>
            <p className="text-gray-600">
              You are signed in and can access all features.
            </p>
          </div>
        </ProtectedRoute>
      }
    />
    <Route path="*" Component={NotFound} />
  </Routes>
);

function NotFound() {
  const { user, isSignedIn } = useUser();
  if (isSignedIn) {
    return (
      <div className="bg-red-100 text-red-800 p-4 rounded-md">
        {" "}
        Hi {user?.lastName}. Page Not Found. Please check the URL.
      </div>
    );
  }
  return <div>Page Not Found</div>;
}
