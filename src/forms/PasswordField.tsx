import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { FormField } from './Form';

// Props
export interface Props extends FormField {}

// This component is for a password field
export const PasswordField = (props: FormField) => {
    const [value, setValue] = useState('');
    const [error, setError] = useState('');
    const [visibile, setVisible] = useState(false);
    const [touched, setTouched] = useState(false);

    // Handle updating the field
    const update = (e: any) => {
        if (!touched) setTouched(true);
        setValue(e.target.value);

        let error = null;

        // Handle the errors
        if (props.validation) {
            // Check the regex for the error
            const regex = new RegExp(props.validation);

            // Check the regex
            if (!regex.test(e.target.value)) {
                error =
                    props.error_msg ||
                    'Password must be at least 8 characters long, contain at least one digit and one special character';
                setError(error);
            } else {
                setError('');
                error = '';
            }
        }

        // Call the onChange function
        props.onChange(props.name, e.target.value, error);
    };

    return (
        <div className="field password-field">
            {/* Label */}
            {props.label && <label>{props.label}</label>}

            {/* Input */}
            <input
                type={visibile ? 'text' : 'password'}
                name={props.name}
                value={value}
                onChange={update}
            />

            {/* Hidden eye icon */}
            <div
                className="password-wrapper"
                onClick={() => setVisible(!visibile)}
            >
                <FontAwesomeIcon icon={visibile ? faEyeSlash : faEye} />
            </div>

            {/* Set the error here */}
            {touched && props.validation && (
                <div className="error">{error}</div>
            )}
        </div>
    );
};
