import React, { useState } from 'react';
import FormBuilder from './FormBuilder';

const initialFormStructure = [
    { type: 'text', label: 'Name', name: 'name' },
    { type: 'email', label: 'Email', name: 'email' },
    { type: 'select', label: 'Gender', name: 'gender', options: ['Male', 'Female', 'Other'] },
    { type: 'submit', label: 'Submit' }
];

function App() {
    const [formStructure, setFormStructure] = useState(initialFormStructure);

    return (
        <div>
            <h1>Dynamic Form Builder</h1>
            <FormBuilder formStructure={formStructure} />
        </div>
    );
}

export default App;