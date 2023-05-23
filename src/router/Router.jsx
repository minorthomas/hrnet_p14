import { Routes, Route, Navigate } from 'react-router-dom';
import { CreateEmployee } from '../pages/CreateEmployee';
import { EmployeesList } from '../pages/EmployeesList';

export function Router() {
    return (
        <Routes>
            <Route path='/' element={<CreateEmployee />} />
            <Route path='/employees' element={<EmployeesList />} />
            <Route path='*' element={<Navigate replace to='/' />} />
        </Routes>
    );
}
