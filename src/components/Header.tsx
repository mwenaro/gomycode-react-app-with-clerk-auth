import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white shadow-md border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-gray-900">My App</h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <NavLink
              to="/"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </NavLink>
            <NavLink
              to="/contact"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              Contact
            </NavLink>
            <NavLink
              to="/about"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              About
            </NavLink>
            <SignedIn>
              <NavLink
                to="/dashboard"
                className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                Dashboard
              </NavLink>
            </SignedIn>
          </nav>

          {/* Authentication */}
          <div className="flex items-center space-x-4">
            <SignedOut>
              <SignInButton>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </div>
    </header>
  );
}
