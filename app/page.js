import Head from 'next/head';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Metrics from './components/Metrics';
import Dashboard from "@/app/pages";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Tableau de bord | ManegeYourBusiness</title>
            </Head>
            <Dashboard />
        </div>
    );
}