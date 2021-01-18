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
import Cookies from 'universal-cookie';
import * as Yup from 'yup';
import 'react-datetime/css/react-datetime.css';

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className='form-item'>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className='text-input form-control' {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className='error'>{meta.error}</div>
      ) : null}
    </div>
  );
};

const DateOfBirthField = ({ label, ...props }) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(props);
  return (
    <div className='form-item'>
      <label htmlFor={props.id || props.name}>{label}</label>
      {/* <p>{label}</p> */}
      <Datetime
        dateFormat={'MM/DD/YYYY'}
        timeFormat={false}
        onChange={(e) => {
          setFieldValue('birth', e._d);
        }}
      />
    </div>
  );
};

const ZipCodeField = ({ label, ...props }) => {
  const {
    values: { cep },
    touched,
    setFieldValue,
  } = useFormikContext();
  const [field, meta] = useField(props);

  React.useEffect(async () => {
    if (touched.cep && cep.length === 8) {
      await fetch(`https://viacep.com.br/ws/${cep}/json`)
        .then((res) => {
          if (res.status !== 200) {
            console.log('error on the request! Status Code:' + res.status);
            return;
          }
          res.json().then((data) => {
            setFieldValue('address', data.logradouro);
            setFieldValue('state', data.uf);
            setFieldValue('city', data.localidade);
          });
        })
        .catch((err) => {
          console.log('Fetch Error', err);
        });
    }
  }, [cep, touched.cep, props.name]);

  return (
    <div className='form-item'>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className='text-input form-control' {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className='error'>{meta.error}</div>
      ) : null}
    </div>
  );
};

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
    birth: Yup.date().required(),
    cpf: Yup.string()
      .matches(/^[0-9]{11}$/, 'Must be exactly 11 digits')
      .required('Required'),
    cep: Yup.string()
      .matches(/^[0-9]{8}$/, 'Must be exactly 8 digits')
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

  return (
    <div className='container register'>
      <h2>Register</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          localStorage.setItem('Register Form Values', JSON.stringify(values));
          const cookies = new Cookies();
          cookies.set('Register Form Values', values, {
            path: '/',
            sameSite: true,
            secure: true,
          });
          console.log(cookies.get('Register Form Values'));
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));

            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <div className=' register__row'>
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
          </div>
          <div className=' register__row'>
            <TextInput
              label='Email'
              name='email'
              type='email'
              placeholder='john@healthyfood.com'
            />

            <DateOfBirthField label='Date of Birth (MM/DD/YYYY)' name='birth' />
          </div>
          <div className=' register__row'>
            <TextInput
              label='CPF'
              name='cpf'
              type='text'
              placeholder='12345678910'
            />

            <ZipCodeField
              label='CEP'
              name='cep'
              type='text'
              placeholder='08008000'
            />
          </div>
          <div className=' register__row'>
            <ZipCodeField
              label='Address'
              name='address'
              type='text'
              placeholder='Avenida Paulista'
              disabled={true}
            />

            <TextInput
              label='Address Number'
              name='addressNumber'
              type='text'
              placeholder='900'
            />
          </div>
          <div className=' register__row'>
            <ZipCodeField
              label='State'
              name='state'
              type='text'
              placeholder='São Paulo'
              disabled={true}
            />
            <ZipCodeField
              label='City'
              name='city'
              type='text'
              placeholder='São Paulo'
              disabled={true}
            />
          </div>

          <button type='submit'>Submit</button>
        </Form>
      </Formik>
    </div>
  );
}

export default Register;
