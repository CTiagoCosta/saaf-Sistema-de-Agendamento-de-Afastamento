import { HashRouter, Route, Routes } from 'react-router-dom';
import { SingIn } from '../pages/SingIn';
import { Home } from '../pages/Home';
import { Setting } from '../pages/Setting';

export function Router() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<SingIn />} />
                <Route path="/home" element={<Home />} />
                <Route path="/setting" element={<Setting />} />
            </Routes>
        </HashRouter>
    );
}