import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { Row, Col, CardTitle, CardText, Form, Label, Input, Button } from 'reactstrap';
import { ChevronLeft } from 'react-feather';

import { useSkin } from '@hooks/useSkin'

import illustrationsLight from '@src/assets/images/pages/forgot-password-v2.svg';
import illustrationsDark from '@src/assets/images/pages/forgot-password-v2-dark.svg';
import '@styles/react/pages/page-authentication.scss';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  // Example implementation of the `isUserLoggedIn` function
const isUserLoggedIn = () => {
  // Add your logic here to check if the user is logged in
  // Return `true` if the user is logged in, otherwise `false`
  // You can use cookies, local storage, or any other mechanism to determine the user's login status
  // For simplicity, let's assume the user is logged in if there is a token in the local storage
  return localStorage.getItem('token') !== null;
};

// Make sure to update the import statement in the ForgotPassword component:
// import { Link, Navigate } from 'react-router-dom';


  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    fetch('https://bibliotheque-medical-back.vercel.app/user/forgot-password', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    })
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setMessage(data.message);
      })
      .catch((error) => {
        setLoading(false);
        setMessage('An error occurred. Please try again.');
        console.error(error);
      });
  };

  const { skin } = useSkin();
  const source = skin === 'dark' ? illustrationsDark : illustrationsLight;


    return (
      <div className='auth-wrapper auth-cover'>
        <Row className='auth-inner m-0'>
          {/* ... rest of the code ... */}
          <Col className='d-flex align-items-center auth-bg px-2 p-lg-5' lg='4' sm='12'>
            <Col className='px-xl-2 mx-auto' sm='8' md='6' lg='12'>
              <CardTitle tag='h2' className='fw-bold mb-1'>
                Forgot Password? 🔒
              </CardTitle>
              <CardText className='mb-2'>
                Enter your email and we'll send you instructions to reset your password
              </CardText>
              <Form className='auth-forgot-password-form mt-2' onSubmit={handleSubmit}>
                <div className='mb-1'>
                  <Label className='form-label' for='login-email'>
                    Email
                  </Label>
                  <Input
                    type='email'
                    id='login-email'
                    placeholder='john@example.com'
                    autoFocus
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <Button color='primary' block disabled={loading}>
                  {loading ? 'Sending...' : 'Send reset link'}
                </Button>
              </Form>
              {message && <p className='text-center mt-2'>{message}</p>}
              <p className='text-center mt-2'>
                <Link to='/login'>
                  <ChevronLeft className='rotate-rtl me-25' size={14} />
                  <span className='align-middle'>Back to login</span>
                </Link>
              </p>
            </Col>
          </Col>
        </Row>
      </div>
    );

};

export default ForgotPassword;
