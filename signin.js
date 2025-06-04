import React, { useState } from 'react';
import { Field, Form as FormikForm, Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './signin.css'; // Importing the updated CSS

// Validation schema for sign in
const signInValidationSchema = Yup.object({
  email: Yup.string().email('Invalid email format').required('Required'),
  password: Yup.string().required('Required'),
});

function SignIn() {
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    console.log('Form values:', values); // Debugging form values
    try {
      const response = await axios.post('http://localhost:5000/api/login', values);

      if (response.status === 200) {
        const { user_id, role } = response.data;
        localStorage.setItem('user_id', user_id); // Store user_id in localStorage
        alert('Login successful');

        // Redirect based on role
        if (role === 'admin') {
          navigate('/admin-dashboard'); // Admin Dashboard
        } else {
          navigate('/user-dashboard'); // User Dashboard
        }
      } else {
        setErrorMessage('Invalid email or password');
      }
    } catch (err) {
      console.error('Error during sign in:', err.response?.data || err.message);
      setErrorMessage(err.response?.data?.message || 'An error occurred. Please try again.');
    }
  };

  return (
    <div className="signin-container">
      <div className="form-container">
        {errorMessage && (
          <div className="error">
            <p>{errorMessage}</p>
          </div>
        )}
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={signInValidationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <FormikForm>
              <div className="signin-section">
                <h2>Sign In</h2>
                <p>Enter your credentials to access your account</p>

                <div className="signin-form">
                  <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <Field
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      className="form-control"
                    />
                    <ErrorMessage name="email" component="div" className="error" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <Field
                      id="password"
                      name="password"
                      type="password"
                      placeholder="Enter your password"
                      className="form-control"
                    />
                    <ErrorMessage name="password" component="div" className="error" />
                  </div>
                  <div className="text-center mt-4">
                    <button type="submit" className="w-100 mt-3" 
                style={{ backgroundColor: '#66785F', color: '#FFFFFF', border: 'none'}}>Sign In</button>
                  </div>
                </div>
              </div>
            </FormikForm>
          )}
        </Formik>
        <div className="signin-link mt-3">
          <p className='mt-3'>Don't have an account? <a href="/signup">Sign up</a></p>
        </div>

      </div>
    </div>
  );
}

export default SignIn;
