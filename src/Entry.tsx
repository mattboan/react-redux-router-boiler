import { Field } from './forms/Field';
import { Form } from './forms/Form';

import { TextField } from './forms/TextField';
import { PasswordField } from './forms/PasswordField';

// This is where the application enters
export const Entry = () => {
    // Handle the submission of the form
    const onSubmit = (values: any) => {
        console.log('Got the values: ', values);
    };

    return (
        <div
            className="entry-point"
            style={{
                maxWidth: '400px',
                marginRight: 'auto',
                marginLeft: 'auto',
            }}
        >
            <p>Test</p>

            {/* Form Test */}
            <Form form_name="Test" onSubmit={onSubmit}>
                <TextField
                    label="Email"
                    name="email"
                    error_msg="Invalid email address."
                    validation="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$"
                />
                <TextField label="Full Name" name="name" validation="empty" />
                <PasswordField
                    name={'password'}
                    label="Password"
                    validation="^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$"
                />

                <button type="submit">Submit</button>
            </Form>
        </div>
    );
};
