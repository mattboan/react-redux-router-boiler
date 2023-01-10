import { Field } from './forms/Field';
import { Form } from './forms/Form';

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
                <Field name="email" />
                <Field name="name" />
                <Field name="password" />

                <button type="submit">Submit</button>
            </Form>
        </div>
    );
};
