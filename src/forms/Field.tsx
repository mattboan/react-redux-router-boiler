import '../styles/field.scss';
import { useState } from 'react';
import { FormField } from './Form';

export interface Props extends FormField {}

// Default field for copying, bare bones
export const Field = (props: Props) => {
    const [value, setValue] = useState('');

    // Handle updating the field
    const update = (e: any) => {
        setValue(e.target.value);

        // Call the onChange function
        props.onChange(props.name, e.target.value);
    };

    return (
        <div className="form-field">
            <label>Label</label>
            <input type="text" name="test" value={value} onChange={update} />
        </div>
    );
};
