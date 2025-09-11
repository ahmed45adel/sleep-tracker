'use client';

import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { ThemeToggle } from './ThemeToggle';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <span className="text-md sm:text-2xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-transparent">
              SleepTracker
            </span>
          </Link>

          {/* Navigation & User Actions */}
          <div className="flex items-center space-x-4">
            <Link
              href="/"
              className="text-foreground hover:text-primary transition-colors px-2 py-1 rounded-md text-sm sm:px-3 sm:py-2 sm:text-base font-medium hidden sm:block"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-foreground hover:text-primary transition-colors px-2 py-1 rounded-md text-sm sm:px-3 sm:py-2 sm:text-base font-medium"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-foreground hover:text-primary transition-colors px-2 py-1 rounded-md text-sm sm:px-3 sm:py-2 sm:text-base font-medium"
            >
              Contact
            </Link>

            <SignedOut>
              <SignInButton mode="modal">
                <button className="w-full sm:w-auto bg-gradient-to-r from-primary via-pink-500 to-red-500 hover:from-primary/90 hover:via-pink-600 hover:to-red-600 text-primary-foreground sm:px-4 sm:py-2 px-3 py-1 text-sm sm:text-md rounded-md font-medium cursor-pointer transition">
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>

            <SignedIn>
              <ThemeToggle />
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </div>
    </nav>
  );
}