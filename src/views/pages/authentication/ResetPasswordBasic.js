import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'react-feather';
import { Card, CardBody, CardTitle, CardText, Form, Label, Button } from 'reactstrap';
import InputPassword from '@components/input-password-toggle';
import '@styles/react/pages/page-authentication.scss';

const ResetPasswordBasic = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }

    const token = new URLSearchParams(window.location.search).get('token');
    console.log(token);

    try {
      const response = await fetch('http://localhost:4000/user/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          token: token,
          newPassword: newPassword,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage('Password reset successful');
        console.log("Successs");
      } else {
        setErrorMessage(data.message);
        console.log(data.message);
      }
    } catch (error) {
      setErrorMessage('An error occurred');
      console.log(error);
    }
  };

  return (
    <div className='auth-wrapper auth-basic px-2'>
      <div className='auth-inner my-2'>
        <Card className='mb-0'>
          <CardBody>
            <Link className='brand-logo' to='/' onClick={(e) => e.preventDefault()}>
              <svg viewBox='0 0 139 95' version='1.1' height='28'>
                {/* Logo SVG code */}
              </svg>
              <h2 className='brand-text text-primary ms-1'>Bibliomed</h2>
            </Link>
            <CardTitle tag='h4' className='mb-1'>
              Reset Password 🔒
            </CardTitle>
            <CardText className='mb-2'>Your new password must be different from previously used passwords</CardText>
            <Form className='auth-reset-password-form mt-2' onSubmit={handleSubmit}>
              <div className='mb-1'>
                <Label className='form-label' for='new-password'>
                  New Password
                </Label>
                <InputPassword
                  className='input-group-merge'
                  id='new-password'
                  autoFocus
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </div>
              <div className='mb-1'>
                <Label className='form-label' for='confirm-password'>
                  Confirm Password
                </Label>
                <InputPassword
                  className='input-group-merge'
                  id='confirm-password'
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <Button color='primary' block type='submit'>
                Set New Password
              </Button>
              {errorMessage && <p className='text-danger mt-2'>{errorMessage}</p>}
              {successMessage && <p className='text-success mt-2'>{successMessage}</p>}
            </Form>
            <p className='text-center mt-2'>
              <Link to='/pages/login-basic'>
              <ChevronLeft className='rotate-rtl me-25' size={14} />
              <span className='align-middle'>Back to login</span>
              </Link>
              </p>
              </CardBody>
              </Card>
              </div>
              </div>
              );
            };

export default ResetPasswordBasic;
