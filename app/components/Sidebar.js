'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaTachometerAlt, FaPlus } from 'react-icons/fa';

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(true);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <aside
            className={`bg-gray-100 dark:bg-gray-800 p-4 fixed top-16 bottom-0 left-0 z-10 transition-width duration-300 ${
                isOpen ? 'w-64' : 'w-16'
            }`}
        >
            <div className="flex justify-between items-center mb-4">
                {isOpen && <img src="/logo.png" alt="Logo" className="h-12 w-12" />}
                <button
                    className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 p-2 rounded"
                    onClick={handleToggle}
                >
                    {isOpen ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-gray-800 dark:text-gray-200"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-gray-800 dark:text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    )}
                </button>
            </div>
            <ul>
                <li className="flex items-center mb-4">
                    <FaTachometerAlt className="text-gray-800 dark:text-white" />
                    {isOpen && <Link href="/" className="ml-2 text-gray-800 dark:text-white">Tableau de bord</Link>}
                </li>
                <li className="flex items-center">
                    <FaPlus className="text-gray-800 dark:text-white" />
                    {isOpen && <Link href="/add-module" className="ml-2 text-gray-800 dark:text-white">Ajouter un module</Link>}
                </li>
            </ul>
        </aside>
    );
}
