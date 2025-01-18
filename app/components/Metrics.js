export default function Metrics() {
    return (
        <section className="bg-gray-100 dark:bg-gray-800 p-4 ml-16 md:ml-64 mt-16">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">Métriques</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-white dark:bg-gray-700 p-4 rounded shadow">
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">Chiffre d'affaire</h2>
                    <p className="text-lg text-gray-800 dark:text-gray-200">10 000 €</p>
                </div>
                <div className="bg-white dark:bg-gray-700 p-4 rounded shadow">
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">Liste des taches</h2>
                    <ul>
                        <li className="text-lg text-gray-800 dark:text-gray-200">Tâche 1</li>
                        <li className="text-lg text-gray-800 dark:text-gray-200">Tâche 2</li>
                        <li className="text-lg text-gray-800 dark:text-gray-200">Tâche 3</li>
                    </ul>
                </div>
                <div className="bg-white dark:bg-gray-700 p-4 rounded shadow">
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">Statistique du nombres de clients</h2>
                    <p className="text-lg text-gray-800 dark:text-gray-200">100 clients</p>
                </div>
            </div>
        </section>
    );
}
