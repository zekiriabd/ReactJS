import { Formik } from 'formik';
import * as React from 'react';
import { Button, Form } from 'react-bootstrap';
import * as Yup from 'yup';

export const XForm: React.SFC<{}> = () => {
  return (
    <div className="container">
      <h1>Formik</h1>
      
      <Formik initialValues={{ email: '' }}
      
      // tslint:disable-next-line: jsx-no-lambda
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => { alert(JSON.stringify(values, null, 2)); setSubmitting(false); }, 500);
      }}

      validationSchema={Yup.object().shape({
        email: Yup.string().email('is not correct Email').required('Required'),
      })}

    >
      {fm => {
        return (
          <Form onSubmit={fm.handleSubmit}>
            <Form.Label>Email address</Form.Label>
            <Form.Control id="email" placeholder="Enter your email" type="text" 
            value={fm.values.email}  onChange={fm.handleChange} onBlur={fm.handleBlur} 
              className={ fm.errors.email && fm.touched.email ? 'is-invalid' : 'is-valid' }
            />
            {fm.errors.email && fm.touched.email && (
              <div className="text-danger">{fm.errors.email}</div>
            )}
            
            <Button type="submit" disabled={fm.isSubmitting}>  Submit </Button>
            
          </Form>
        );
      }}
    </Formik>
    </div>
  );
};