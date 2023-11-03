import { HashRouter, Route, Routes } from 'react-router-dom';
import { SingIn } from '../pages/SingIn';
import { Home } from '../pages/Home';
import { Setting } from '../pages/Setting';
import { WeeklyShifts } from '../pages/WeeklyShifts';
import { ServiceShifts } from '../pages/ServiceShifts';
import { UserRegistration } from '../pages/UserRegistration';

export function Router() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<SingIn />} />
                <Route path="/home" element={<Home />} />
                <Route path="/setting" element={<Setting />} />
                <Route path="/weeklyshifts" element={<WeeklyShifts />} />
                <Route path="/serviceshifts" element={<ServiceShifts />} />
                <Route path="/userregistration" element={<UserRegistration />} />
            </Routes>
        </HashRouter>
    );
}