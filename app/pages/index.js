// pages/index.js (Dashboard)
'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Metrics from '../components/Metrics';
import AccountModal from '../components/modals/AccountModal';
import PersonalizationModal from '../components/modals/PersonalizationModal';

export default function Dashboard() {
    const [isAccountModalOpen, setIsAccountModalOpen] = useState(false);
    const [isPersonalizationModalOpen, setIsPersonalizationModalOpen] = useState(false);

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
            <Navbar
                onAccountClick={() => setIsAccountModalOpen(true)}
                onPersonalizationClick={() => setIsPersonalizationModalOpen(true)}
            />
            <Sidebar />
            <main className="ml-64 pt-16">
                <Metrics />
            </main>

            {/* Modales */}
            <AccountModal
                isOpen={isAccountModalOpen}
                onClose={() => setIsAccountModalOpen(false)}
            />
            <PersonalizationModal
                isOpen={isPersonalizationModalOpen}
                onClose={() => setIsPersonalizationModalOpen(false)}
            />
        </div>
    );
}
