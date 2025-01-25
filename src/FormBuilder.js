import React from 'react';

function FormBuilder({ formStructure }) {
    return (
        <form>
            {formStructure.map((field, index) => {
                if (field.type === 'select') {
                    return (
                        <div key={index}>
                            <label>{field.label}</label>
                            <select name={field.name}>
                                {field.options.map((option, idx) => (
                                    <option key={idx} value={option}>{option}</option>
                                ))}
                            </select>
                        </div>
                    );
                } else if (field.type === 'submit') {
                    return (
                        <div key={index}>
                            <button type="submit">{field.label}</button>
                        </div>
                    );
                } else {
                    return (
                        <div key={index}>
                            <label>{field.label}</label>
                            <input type={field.type} name={field.name} placeholder={field.label} />
                        </div>
                    );
                }
            })}
        </form>
    );
}

export default FormBuilder;