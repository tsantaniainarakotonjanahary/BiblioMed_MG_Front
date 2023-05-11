// ** React Imports
import { Link } from 'react-router-dom'

// ** Icons Imports
import { ChevronLeft } from 'react-feather'

// ** Custom Components
import InputPassword from '@components/input-password-toggle'

// ** Reactstrap Imports
import { Card, CardBody, CardTitle, CardText, Form, Label, Button } from 'reactstrap'

// ** Styles
import '@styles/react/pages/page-authentication.scss'

const ResetPasswordBasic = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Retrieve the values from the input fields
    const newPassword = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (newPassword !== confirmPassword) {
      // Handle password mismatch error
      return;
    }

    // Extract the token value from the URL
    const searchParams = new URLSearchParams(window.location.search);
    const token = searchParams.get('token');

    try {
      const response = await fetch('https://bibliotheque-medical-back.vercel.app/user/reset-password', {
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
        // Handle success message
      } else {
        // Handle error message
      }
    } catch (error) {
      // Handle error message
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
                <InputPassword className='input-group-merge' id='new-password' autoFocus />
              </div>
              <div className='mb-1'>
                <Label className='form-label' for='confirm-password'>
                  Confirm Password
                </Label>
                <InputPassword className='input-group-merge' id='confirm-password' />
              </div>
              <Button color='primary' block type='submit'>
                Set New Password
              </Button>
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
``
