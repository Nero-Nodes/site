/* @refresh reload */
import './index.css';
import App from './views/App';
import { render } from 'solid-js/web';
import { Router } from 'solid-app-router';

render(() => (
    <div class={'bg-gray-900'}>
        <Router>
            <App />
        </Router>
    </div>
    ), document.getElementById('root') as HTMLElement
);
