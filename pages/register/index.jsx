import React from 'react';
import { useFormik, Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function Register() {
  const zipcodeSearch = (cep) => {
    const address = fetch(`'https://viacep.com.br/ws/${cep}/json'`)
      .then((res) => {
        if (res.status !== 200) {
          console.log('error on the request! Status Code:' + res.status);
          return;
        }
        res.json().then((data) => {
          console.log(data);
        });
      })
      .catch((err) => {
        console.log('Fetch Error', err);
      });
  };
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
    birth: Yup.date(),
  });

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    birth: '',
    cpf: 0,
    cep: '',
    address: '',
    city: '',
    state: '',
    number: '',
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
        <Form>
          <label htmlFor='firstName'>First Name</label>
          <Field name='firstName' type='text' />
          <ErrorMessage name='firstName' />
          <label htmlFor='lastName'>Last Name</label>
          <Field name='lastName' type='text' />
          <ErrorMessage name='lastName' />
          <label htmlFor='email'>Email Address</label>
          <Field name='email' type='email' />
          <ErrorMessage name='email' />
          <button type='submit'>Submit</button>
        </Form>
      </Formik>
    </div>
  );
}

export default Register;
