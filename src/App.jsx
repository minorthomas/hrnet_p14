import { Router } from './router/Router';
import { Navigation } from './components/Navigation/Navigation';
import './styles/global.scss';

export function App() {
    return (
        <>
            <header>
                <Navigation />
            </header>
            <Router />
        </>
    );
}
