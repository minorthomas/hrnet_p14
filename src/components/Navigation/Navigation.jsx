import { Link, NavLink } from 'react-router-dom';
import './navigation.scss';

export function Navigation() {
    return (
        <nav className='navigation'>
            <h1>
                <Link to='/'>HRnet</Link>
            </h1>
            <ul>
                <li>
                    <NavLink
                        to='/'
                        className={({ isActive }) => (isActive ? 'active' : '')}
                    >
                        Create Employee
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/employees'
                        className={({ isActive }) => (isActive ? 'active' : '')}
                    >
                        Employee list
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}
