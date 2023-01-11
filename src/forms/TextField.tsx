import { useState } from 'react';
import { FormField } from './Form';

// Props
export interface Props extends FormField {}

// This component is for a password field
export const TextField = (props: FormField) => {
    const [value, setValue] = useState('');
    const [error, setError] = useState('');
    const [touched, setTouched] = useState(false);

    // Handle updating the field
    const update = (e: any) => {
        if (!touched) setTouched(true);
        setValue(e.target.value);

        let error = null;

        // Handle the errors
        if (props.validation) {
            // Check if the validation  is equal to empty
            if (props.validation === 'empty') {
                if (e.target.value === '') {
                    error = props.error_msg || 'Cannot be empty.';
                    setError(error);
                } else {
                    setError('');
                    error = '';
                }
            } else {
                // Check the regex for the error
                const regex = new RegExp(props.validation);

                // Check the regex
                if (!regex.test(e.target.value)) {
                    error = props.error_msg || 'Cannot be empty.';
                    setError(error);
                } else {
                    setError('');
                    error = '';
                }
            }
        }

        // Call the onChange function
        props.onChange(props.name, e.target.value, error);
    };

    return (
        <div className="field text-field">
            {/* Label */}
            {props.label && <label>{props.label}</label>}

            {/* Input */}
            <input
                type="text"
                name={props.name}
                value={value}
                onChange={update}
            />

            {/* Set the error here */}
            {touched && props.validation && (
                <div className="error">{error}</div>
            )}
        </div>
    );
};
