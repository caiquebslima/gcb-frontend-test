import React from 'react';
import {
  useFormik,
  Formik,
  Form,
  ErrorMessage,
  useField,
  useFormikContext,
} from 'formik';
import Datetime from 'react-datetime';
import * as Yup from 'yup';
import 'react-datetime/css/react-datetime.css';

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className='text-input' {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className='error'>{meta.error}</div>
      ) : null}
    </>
  );
};

function Register() {
  const zipCodeSearch = function (cep) {
    const addressData = fetch(`https://viacep.com.br/ws/${cep}/json`)
      .then((res) => {
        if (res.status !== 200) {
          console.log('error on the request! Status Code:' + res.status);
          return;
        }
        res.json().then((data) => {
          console.log(data);

          return data;
        });
      })
      .catch((err) => {
        console.log('Fetch Error', err);
      });
    return addressData;
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
    birth: Yup.date().required(),
    cpf: Yup.number()
      .min(11, 'Must be 11 numbers')
      .max(11, 'Must be 11 numbers')
      .required('Required'),
    cep: Yup.number()
      .min(8, 'Must be 8 numbers')
      .max(8, 'Must be 8 numbers')
      .required('Required'),
  });

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    birth: new Date(),
    cpf: '',
    cep: '',
    address: '',
    city: '',
    state: '',
    addressNumber: '',
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
          console.log(values);
          // setTimeout(() => {
          //   alert(JSON.stringify(values, null, 2));

          //   setSubmitting(false);
          // }, 400);
        }}
      >
        <Form>
          <TextInput
            label='First Name'
            name='firstName'
            type='text'
            placeholder='John'
          />
          <TextInput
            label='Last Name'
            name='lastName'
            type='text'
            placeholder='Doe'
          />
          <TextInput
            label='Email'
            name='email'
            type='email'
            placeholder='john@healthyfood.com'
          />

          <p>Data de Nascimento</p>
          <Datetime />

          <TextInput
            label='CPF'
            name='cpf'
            type='text'
            placeholder='12345678910'
          />
          <TextInput
            label='CEP'
            name='cep'
            type='text'
            placeholder='01010101'
            onBlur={(e) => {
              const values = zipCodeSearch(e.target.value).then((res) => {
                console.log(res);
              });
            }}
          />
          <TextInput
            label='Address'
            name='address'
            type='text'
            placeholder='Avenida Paulista'
          />
          <TextInput
            label='Address Number'
            name='addressNumber'
            type='text'
            placeholder='900'
          />
          <TextInput
            label='State'
            name='state'
            type='text'
            placeholder='São Paulo'
          />
          <TextInput
            label='City'
            name='city'
            type='text'
            placeholder='São Paulo'
          />

          <button type='submit'>Submit</button>
        </Form>
      </Formik>
    </div>
  );
}

export default Register;
