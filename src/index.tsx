/* @refresh reload */
import './css/nero.css';
import App from './views/App';
import { render } from 'solid-js/web';
import { Router } from 'solid-app-router';

render(() => (
    <div class={'bg-gray-800'}>
        <Router>
            <App />
        </Router>
    </div>
    ), document.getElementById('root') as HTMLElement
);
