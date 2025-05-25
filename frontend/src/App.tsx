import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { AppToastContainer, toastService } from './components/ui/toast/toast.tsx';

function App() {
    const [count, setCount] = useState(0);

    const handleCountClick = () => {
        const newCount = count + 1;
        setCount(newCount);

        if (newCount % 5 === 0) {
            toastService.success(`${newCount} clicks done!`);
        } else if (newCount % 3 === 0) {
            toastService.warning(`${newCount} clicks`);
        } else {
            toastService.info(`Clicks: ${newCount}`);
        }
    };

    const showCustomToast = () => {
        toastService.custom(
            <div style={{ padding: '16px', color: 'white' }}>
                <h3>Custom Notification</h3>
                <p>ATM: {count}</p>
            </div>,
            { autoClose: 3000 }
        );
    };

    return (
        <>
            <AppToastContainer />

            <div>
                <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={handleCountClick}>
                    count is {count}
                </button>
                <button
                    onClick={showCustomToast}
                    style={{ marginLeft: '10px', background: '#646cff' }}
                >
                    Показать кастомный toast
                </button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    );
}

export default App;