import React from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  Button,
  Checkbox,
  FormHelperText,
  Grid,
  IconButton,
  Link,
  TextField,
  Typography,
  makeStyles
} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Page from 'src/components/Page';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    height: '100%'
  },
  grid: {
    height: '100%'
  },
  quoteContainer: {
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  quote: {
    backgroundColor: theme.palette.neutral,
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: 'url(/static/images/auth.jpg)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  },
  quoteInner: {
    textAlign: 'center',
    flexBasis: '600px'
  },
  quoteText: {
    color: theme.palette.white,
    fontWeight: 300
  },
  name: {
    marginTop: theme.spacing(3),
    color: theme.palette.white
  },
  bio: {
    color: theme.palette.white
  },
  contentContainer: {},
  content: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  contentHeader: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: theme.spacing(5),
    paddingBototm: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  },
  logoImage: {
    marginLeft: theme.spacing(4)
  },
  contentBody: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center'
    }
  },
  form: {
    paddingLeft: 100,
    paddingRight: 100,
    paddingBottom: 125,
    flexBasis: 700,
    [theme.breakpoints.down('sm')]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2)
    }
  },
  title: {
    marginTop: theme.spacing(3)
  },
  textField: {
    marginTop: theme.spacing(2)
  },
  policy: {
    marginTop: theme.spacing(1),
    display: 'flex',
    alignItems: 'center'
  },
  policyCheckbox: {
    marginLeft: '-14px'
  },
  signUpButton: {
    margin: theme.spacing(2, 0)
  }
}));

const RegisterView = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <Page
      className={classes.root}
      title="Register"
    >
      <Grid
        className={classes.grid}
        container
      >
        <Grid
          className={classes.quoteContainer}
          item
          lg={5}
        >
          <div className={classes.quote}>
            <div className={classes.quoteInner}>
              <Typography
                className={classes.quoteText}
                color="textPrimary"
                variant="h1"
              >
                Hella narwhal Cosby sweater McSweeney&apos;s, salvia kitsch before
                they sold out High Life.
              </Typography>
              <div className={classes.person}>
                <Typography
                  className={classes.name}
                  color="textPrimary"
                  variant="body1"
                >
                  Takamaru Ayako
                </Typography>
                <Typography
                  className={classes.bio}
                  color="textPrimary"
                  variant="body2"
                >
                  Manager at inVision
                </Typography>
              </div>
            </div>
          </div>
        </Grid>
        <Grid
          className={classes.content}
          item
          lg={7}
          xs={12}
        >
          <div className={classes.content}>
            <div className={classes.contentHeader}>
              <IconButton
                component={RouterLink}
                to="/"
              >
                <ArrowBackIcon />
              </IconButton>
            </div>
            <div className={classes.contentBody}>
              <Formik
                initialValues={{
                  email: '',
                  firstName: '',
                  lastName: '',
                  password: '',
                  policy: false
                }}
                validationSchema={
                  Yup.object().shape({
                    email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
                    firstName: Yup.string().max(255).required('First name is required'),
                    lastName: Yup.string().max(255).required('Last name is required'),
                    password: Yup.string().max(255).required('password is required'),
                    policy: Yup.boolean().oneOf([true], 'This field must be checked')
                  })
                }
                onSubmit={() => {
                  navigate('/app/dashboard', { replace: true });
                }}
              >
                {({
                  errors,
                  handleBlur,
                  handleChange,
                  handleSubmit,
                  isSubmitting,
                  touched,
                  values
                }) => (
                  <form
                    className={classes.form}
                    onSubmit={handleSubmit}
                  >
                    <Typography
                      className={classes.title}
                      color="textPrimary"
                      variant="h2"
                    >
                      Create new account
                    </Typography>
                    <Typography
                      color="textSecondary"
                      gutterBottom
                    >
                      Use your email to create new account
                    </Typography>
                    <TextField
                      autoFocus
                      error={Boolean(touched.firstName && errors.firstName)}
                      fullWidth
                      helperText={touched.firstName && errors.firstName}
                      label="First name"
                      margin="normal"
                      name="firstName"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.firstName}
                      variant="outlined"
                    />
                    <TextField
                      error={Boolean(touched.lastName && errors.lastName)}
                      fullWidth
                      helperText={touched.lastName && errors.lastName}
                      label="Last name"
                      margin="normal"
                      name="lastName"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.lastName}
                      variant="outlined"
                    />
                    <TextField
                      error={Boolean(touched.email && errors.email)}
                      fullWidth
                      helperText={touched.email && errors.email}
                      label="Email Address"
                      margin="normal"
                      name="email"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      type="email"
                      value={values.email}
                      variant="outlined"
                    />
                    <TextField
                      error={Boolean(touched.password && errors.password)}
                      fullWidth
                      helperText={touched.password && errors.password}
                      label="Password"
                      margin="normal"
                      name="password"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      type="password"
                      value={values.password}
                      variant="outlined"
                    />
                    <div className={classes.policy}>
                      <Checkbox
                        checked={values.policy}
                        name="policy"
                        onChange={handleChange}
                      />
                      <Typography
                        className={classes.policyText}
                        color="textSecondary"
                        variant="body1"
                      >
                        I have read the
                        {' '}
                        <Link
                          color="primary"
                          component={RouterLink}
                          to="#"
                          underline="always"
                          variant="h6"
                        >
                          Terms and Conditions
                        </Link>
                      </Typography>
                    </div>
                    {Boolean(touched.policy && errors.policy) && (
                      <FormHelperText error>
                        {errors.policy}
                      </FormHelperText>
                    )}
                    <Button
                      className={classes.signUpButton}
                      color="primary"
                      disabled={isSubmitting}
                      fullWidth
                      size="large"
                      type="submit"
                      variant="contained"
                    >
                      Sign up now
                    </Button>
                    <Typography
                      color="textSecondary"
                      variant="body1"
                    >
                      Have an account?
                      {' '}
                      <Link
                        component={RouterLink}
                        to="/login"
                        variant="h6"
                      >
                        Sign in
                      </Link>
                    </Typography>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </Grid>
      </Grid>
    </Page>
  );
};

export default RegisterView;
