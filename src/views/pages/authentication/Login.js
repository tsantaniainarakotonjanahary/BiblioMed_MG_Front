import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSkin } from '@hooks/useSkin'
import useJwt from '@src/auth/jwt/useJwt'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { useForm, Controller } from 'react-hook-form'
import { Facebook, Twitter, Mail, GitHub, HelpCircle, Coffee, X } from 'react-feather'
import { handleLogin } from '@store/authentication'
import { AbilityContext } from '@src/utility/context/Can'
import Avatar from '@components/avatar'
import InputPasswordToggle from '@components/input-password-toggle'
import { getHomeRouteForLoggedInUser } from '@utils'
import {
  Row,
  Col,
  Form,
  Input,
  Label,
  Alert,
  Button,
  CardText,
  CardTitle,
  FormFeedback,
  UncontrolledTooltip
} from 'reactstrap'

import {
  Navbar,
  Nav,
  NavItem,
  NavLink,
  Jumbotron,
  Carousel,
  CarouselItem,
} from "reactstrap";

// ** Illustrations Imports
import illustrationsLight from '@src/assets/images/pages/login-v2.svg'
import illustrationsDark from '@src/assets/images/pages/login-v2-dark.svg'

import '@styles/react/pages/page-authentication.scss'

const ToastContent = ({ t, name, role }) => {
  return (
    <div className='d-flex'>
      <div className='me-1'>
        <Avatar size='sm' color='success' icon={<Coffee size={12} />} />
      </div>
      <div className='d-flex flex-column'>
        <div className='d-flex justify-content-between'>
          <h6>{name}</h6>
          <X size={12} className='cursor-pointer' onClick={() => toast.dismiss(t.id)} />
        </div>
        <span>You have successfully logged in as an {role} user to Vuexy. Now you can start to explore. Enjoy!</span>
      </div>
    </div>
  )
}

const defaultValues = {
  password: 'admin',
  loginEmail: 'admin@demo.com'
}

const Login = () => {
  // ** Hooks
  const { skin } = useSkin()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const ability = useContext(AbilityContext)
  const {
    control,
    setError,
    handleSubmit,
    formState: { errors }
  } = useForm({ defaultValues })

  const source = skin === 'dark' ? illustrationsDark : illustrationsLight

  const onSubmit = async data => {
    if (Object.values(data).every(field => field.length > 0)) {

    try {
      const response = await fetch('https://bibliotheque-medical-back.vercel.app/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: data.loginEmail,
          password: data.password
        })
      });
      const result = await response.json();
      if (response.ok) {
        localStorage.setItem('userData', JSON.stringify(result.user));
        localStorage.setItem('token', result.token);
        ability.update(result.user.ability)
        navigate(getHomeRouteForLoggedInUser(result.user.role));
        navigate(0);
        toast(t => (
          <ToastContent t={t} role={result.user.role } name={result.user.nom + " " + result.user.prenom} />
        ))
      } else {
        if (result.message === 'Utilisateur non trouvé') {
          setError('loginEmail', {
            type: 'manual',
            message: 'Email invalide'
          });
        } else if (result.message === 'Utilisateur non validé') {
          setError('password', {
            type: 'manual',
            message: 'Vous devez être validé par l\'administrateur pour vous connecter.'
          });
        } else if (result.message === 'Mot de passe incorrect') {
          setError('password', {
            type: 'manual',
            message: 'Mot de passe incorrect'
          });
        }
      }
    } catch (error) {
      console.error(error);
      // Display a generic error message
      setError('password', {
        type: 'manual',
        message: 'Une erreur est survenue lors de la connexion. Veuillez réessayer plus tard.'
      });
    }


  } else {
    for (const key in data) {
      if (data[key].length === 0) {
        setError(key, {
          type: 'manual'
        });
      }
    }
  }
}

  return (
    <div className='auth-wrapper auth-cover'>
      <Row className='auth-inner m-0'>
        <Link className='brand-logo' to='/' onClick={e => e.preventDefault()}>
        <svg viewBox='0 0 139 95' version='1.1' height='28'>
        <defs>
          <linearGradient x1='100%' y1='10.5120544%' x2='50%' y2='89.4879456%' id='linearGradient-1'>
            <stop stopColor='#000000' offset='0%'></stop>
            <stop stopColor='#FFFFFF' offset='100%'></stop>
          </linearGradient>
          <linearGradient x1='64.0437835%' y1='46.3276743%' x2='37.373316%' y2='100%' id='linearGradient-2'>
            <stop stopColor='#EEEEEE' stopOpacity='0' offset='0%'></stop>
            <stop stopColor='#FFFFFF' offset='100%'></stop>
          </linearGradient>
        </defs>
        <g id='Page-1' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
          <g id='Artboard' transform='translate(-400.000000, -178.000000)'>
            <g id='Group' transform='translate(400.000000, 178.000000)'>
              <path id='path0' fill='url(#linearGradient-1)' d='M13.9,23.7c-1.3,0-2.5,0.5-3.4,1.4L0.9,36.5c-1.9,1.9-1.9,4.9,0,6.8l9.1,9.1c0.9,0.9,2.1,1.4,3.4,1.4c1.3,0,2.5-0.5,3.4-1.4l9.1-9.1c1.9-1.9,1.9-4.9,0-6.8l-9.1-9.1C16.4,24.2,15.2,23.7,13.9,23.7z M13.9,33.2c-0.6,0-1.2-0.2-1.7-0.7l-5.5-5.5c-0.9-0.9-0.9-2.3,0-3.2l5.5-5.5c0.9-0.9,2.3-0.9,3.2,0l5.5,5.5c0.9,0.9,0.9,2.3,0,3.2l-5.5,5.5C15.1,33,14.5,33.2,13.9,33.2z'></path>
            </g>
          </g>
        </g>
      </svg>

          <h2 className='brand-text text-primary ms-1'>BiblioMed</h2>
        </Link>
        <Col className='d-none d-lg-flex align-items-center p-5' lg='8' sm='12'>
          <div className='w-100 d-lg-flex align-items-center justify-content-center px-5'>



     <div>
      <header>
        <h1 >My Website</h1>
        <nav>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </nav>
      </header>
      <main>
        <section id="about">
          <h2>About</h2>
          <p>This is a website about me. I am a software engineer and I love to build things. I am also a big fan of technology and I am always looking for new ways to use it to make my life easier.</p>
        </section>
        <section id="contact">
          <h2>Contact</h2>
          <p>You can contact me at <a href="mailto:me@example.com">me@example.com</a>.</p>
        </section>
        <section id="carousel">
          <div id="carousel-container">
            <img src="https://placeholdit.imgix.net/~text?txtsize=33&txt=Image%201&w=1000&h=600" alt="Image 1" />
            <img src="https://placeholdit.imgix.net/~text?txtsize=33&txt=Image%202&w=1000&h=600" alt="Image 2" />
            <img src="https://placeholdit.imgix.net/~text?txtsize=33&txt=Image%203&w=1000&h=600" alt="Image 3" />
          </div>
          <button id="prev-btn">Previous</button>
          <button id="next-btn">Next</button>
        </section>
      </main>
      <footer>
        <p>Copyright &copy; 2023 My Website</p>
      </footer>
    </div>





            
          </div>
        </Col>
        <Col className='d-flex align-items-center auth-bg px-2 p-lg-5' lg='4' sm='12'>
          <Col className='px-xl-2 mx-auto' sm='8' md='6' lg='12'>
            <CardTitle tag='h2' className='fw-bold mb-1'>
              Welcome to Bibliomed! 👋
            </CardTitle>
            
            <Form className='auth-login-form mt-2' onSubmit={handleSubmit(onSubmit)}>
              <div className='mb-1'>
                <Label className='form-label' for='login-email'>
                  Email
                </Label>
                <Controller
                  id='loginEmail'
                  name='loginEmail'
                  control={control}
                  render={({ field }) => (
                    <Input
                      autoFocus
                      type='email'
                      placeholder='john@example.com'
                      invalid={errors.loginEmail && true}
                      {...field}
                    />
                  )}
                />
                {errors.loginEmail && <FormFeedback>{errors.loginEmail.message}</FormFeedback>}
              </div>
              <div className='mb-1'>
                <div className='d-flex justify-content-between'>
                  <Label className='form-label' for='login-password'>
                    Password
                  </Label>
                  <Link to='/forgot-password'>
                    <small>Forgot Password?</small>
                  </Link>
                </div>
                <Controller
                  id='password'
                  name='password'
                  control={control}
                  render={({ field }) => (
                    <InputPasswordToggle className='input-group-merge' invalid={errors.password && true} {...field} />
                  )}
                />
              </div>
              <div className='form-check mb-1'>
                <Input type='checkbox' id='remember-me' />
                <Label className='form-check-label' for='remember-me'>
                  Remember Me
                </Label>
              </div>
              <Button type='submit' color='primary' block>
                Sign in
              </Button>
            </Form>
            <p className='text-center mt-2'>
              <span className='me-25'>New on our platform?</span>
              <Link to='/register'>
                <span>Create an account</span>
              </Link>
            </p>
           
           
          </Col>
        </Col>
      </Row>
    </div>
  )
}

export default Login
