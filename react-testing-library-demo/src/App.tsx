import React from 'react';
import './App.scss';
import { Select } from './components/Select/select';

const options = [
    { label: 'option 1', value: '1' },
    { label: 'option 2', value: '2' },
    { label: 'option 3', value: '3' },
];

const App: React.FC = () => {
    return (
        <div className="App">
            <div className="select-container">
                <Select options={options} />
            </div>
        </div>
    );
};

export default App;
