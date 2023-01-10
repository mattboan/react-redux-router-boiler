import React, { cloneElement, useState } from 'react';
import '../styles/form.scss';

// Props
export interface Props {
    form_name?: string;
    onSubmit: any;
    children: React.ReactNode;
}

// Interface for a form field
export interface FormField {
    form_name?: string;
    name: string;
    onChange?: any;
    touched?: any;
}

export interface FormValue {
    name: string;
    value: any;
    touched: boolean;
}

// This is the wrapper form, it handles all the form checking, etc.
export const Form = (props: Props) => {
    const [formFields, setFormFields] = useState<FormValue[]>([]);

    // Handle the change of a field
    const onChange = (value: any, name: string) => {
        // Get the index of the field
        const index = formFields.findIndex((field) => field.name === name);

        // If the index is -1, then the field doesn't exist
        if (index === -1) {
            // Add the field
            setFormFields([
                ...formFields,
                {
                    name,
                    value,
                    touched: true,
                },
            ]);

            // Return
            return;
        }

        // Update the field
        formFields[index].value = value;
        formFields[index].touched = true;

        // Update the state
        setFormFields([...formFields]);
    };

    // Handle the submission of the form
    const onSubmit = (e: any) => {
        // Prevent the default form action
        e.preventDefault();

        // Pass on to the onSubmit function
        props.onSubmit(formFields);
    };

    // Clone the props.children and add the form_name
    const children = React.Children.map(props.children, (child) => {
        // Clone the child
        const clonedChild = cloneElement(child as React.ReactElement, {
            // Add the form fields
            form_name: props.form_name,
            onChange: onChange,
            touched: false,
        });

        // Return the cloned child
        return clonedChild;
    });

    console.log('Form Fields', formFields);

    return (
        <form className="form" onSubmit={onSubmit}>
            {/* Render the children */}
            {children}
        </form>
    );
};
