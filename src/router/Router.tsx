import { HashRouter, Route, Routes } from 'react-router-dom';
import { StartPage } from '../pages/StartPage';
import { Dashboard } from '../pages/Dashboard';

export function Router() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<StartPage />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </HashRouter>
    );
}