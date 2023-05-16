import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from '../pages/Home';
import { EmployeesList } from '../pages/EmployeesList';

export function Router() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/employees' element={<EmployeesList />} />
            <Route path='*' element={<Navigate replace to='/' />} />
        </Routes>
    );
}
