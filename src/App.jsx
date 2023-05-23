import { Router } from './router/Router';
import { Navigation } from './components/Navigation';
import './styles/global.scss';

export function App() {
    return (
        <>
            <Navigation />
            <Router />
        </>
    );
}
