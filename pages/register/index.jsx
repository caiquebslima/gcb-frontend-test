import React from 'react';
import { useFormik, Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function Register() {
  const validationSchema = Yup.object({
    firstName: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .min(3, 'Must be over 3 characters')
      .required('Required'),
    lastName: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .min(2, 'Must be over 2 characters')
      .required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
  });

  const initialValues = {
    firstName: '',
    lastName: '',
    // birth: '',
    email: '',
    // cpf: 0,
    // cep: '',
    // address: '',
    // city: '',
    // state: '',
    // number: '',
  };

  const formik = useFormik({
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className='container register'>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));

            setSubmitting(false);
          }, 400);
        }}
      >
        {(formik) => (
          <form onSubmit={formik.handleSubmit}>
            <label htmlFor='firstName'>First Name</label>
            <input
              type='text'
              id='firstName'
              {...formik.getFieldProps('firstName')}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <div>{formik.errors.firstName}</div>
            ) : null}
            <label htmlFor='lastName'>Last Name</label>
            <input
              type='text'
              id='lastName'
              {...formik.getFieldProps('lastName')}
            />
            {formik.touched.lastName && formik.errors.lastName ? (
              <div>{formik.errors.lastName}</div>
            ) : null}
            <label htmlFor='email'>Email Address</label>
            <input type='email' id='email' {...formik.getFieldProps('email')} />
            {formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
            ) : null}

            <button type='submit'>Submit</button>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default Register;
