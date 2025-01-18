// Navbar.js
'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
    const [theme, setTheme] = useState('light');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <nav className="bg-white dark:bg-gray-800 py-4 fixed top-0 left-0 right-0 z-50 shadow-md">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
                    ManageYourBusiness
                </h1>
                <ul className="flex items-center space-x-6">
                    <li className="relative">
                        <button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="text-gray-700 dark:text-white hover:text-gray-900 dark:hover:text-gray-200"
                        >
                            Préférence
                        </button>
                        {isDropdownOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-700 rounded-md shadow-lg py-1">
                                <Link href="/preferences/personnalisation"
                                      className="block px-4 py-2 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600">
                                    Personnalisation
                                </Link>
                            </div>
                        )}
                    </li>
                    <li>
                        <Link href="/compte"
                              className="text-gray-700 dark:text-white hover:text-gray-900 dark:hover:text-gray-200">
                            Compte
                        </Link>
                    </li>
                    <li>
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                            {theme === 'light' ? (
                                <svg
                                    className="w-6 h-6 text-gray-700 dark:text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="w-6 h-6 text-gray-700 dark:text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16.243 6.343l-.707-.707M6.343 6.343l-.707-.707"
                                    />
                                </svg>
                            )}
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
