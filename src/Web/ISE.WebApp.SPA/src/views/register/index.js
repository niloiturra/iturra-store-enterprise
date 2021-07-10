import React from 'react';
import { connect } from 'react-redux';
import { Form, Field } from 'react-final-form';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import Email from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import Header from 'components/Header/Header.js';
import Footer from 'components/Footer/Footer.js';
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import Button from 'components/CustomButtons/Button.js';
import Card from 'components/Card/Card.js';
import CardBody from 'components/Card/CardBody.js';
import CardHeader from 'components/Card/CardHeader.js';
import CardFooter from 'components/Card/CardFooter.js';
import CustomInput from 'components/CustomInput/CustomInput';
import styles from 'assets/jss/material-kit-react/views/loginPage.js';
import image from 'assets/img/login_bg.jpg';
import { bindActionCreators } from 'redux';
import { Creators } from 'store/register/register-duck';
import {
  required,
  emailPattern,
  passwordsMustMatch,
  minLength6,
} from '_helpers/validations';

const useStyles = makeStyles(styles);

const Register = ({ registerAsync }) => {
  const [cardAnimaton, setCardAnimation] = React.useState('cardHidden');
  setTimeout(() => {
    setCardAnimation('');
  }, 700);

  const classes = useStyles();

  const composeValidators =
    (...validators) =>
    (value) =>
      validators.reduce(
        (error, validator) => error || validator(value),
        undefined
      );

  const renderField = ({
    input,
    label,
    type,
    autoComplete,
    placeholder,
    customIcon,
    meta: { touched, error },
  }) => (
    <CustomInput
      error={touched && error ? true : false}
      labelText={touched && error ? error + ` : ` + label : label}
      type={type}
      formControlProps={{
        fullWidth: true,
      }}
      inputProps={{
        ...input,
        endAdornment: (
          <InputAdornment position="end">{customIcon}</InputAdornment>
        ),
        autoComplete,
        placeholder,
      }}
    />
  );

  return (
    <div>
      <Header absolute color="transparent" />
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: 'url(' + image + ')',
          backgroundSize: 'cover',
          backgroundPosition: 'top center',
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <Card className={classes[cardAnimaton]}>
                <Form
                  onSubmit={(values) => registerAsync(values)}
                  validate={(values) => {
                    const errors = {};

                    const error = passwordsMustMatch(values);
                    if (error) {
                      errors.confirmPassword = error;
                    }

                    return errors;
                  }}
                  render={({ handleSubmit, submitting, pristine, values }) => (
                    <form className={classes.form} onSubmit={handleSubmit}>
                      <CardHeader
                        color="primary"
                        className={classes.cardHeader}
                      >
                        <h3>Register</h3>
                        <p>Create a account to shop at the store!</p>
                      </CardHeader>
                      <CardBody>
                        <Field
                          name="email"
                          label="Email..."
                          placeholder="Insert your best email..."
                          type="email"
                          autoComplete="on"
                          customIcon={
                            <Email className={classes.inputIconsColor} />
                          }
                          validate={composeValidators(required, emailPattern)}
                        >
                          {renderField}
                        </Field>

                        <Field
                          name="password"
                          label="Password..."
                          placeholder="Insert your password..."
                          type="password"
                          autoComplete="off"
                          customIcon={
                            <LockIcon className={classes.inputIconsColor} />
                          }
                          validate={composeValidators(required, minLength6)}
                        >
                          {renderField}
                        </Field>

                        <Field
                          name="confirmPassword"
                          label="Confirm Password..."
                          placeholder="Insert your confirm password..."
                          type="password"
                          autoComplete="off"
                          customIcon={
                            <LockIcon className={classes.inputIconsColor} />
                          }
                          validate={composeValidators(required, minLength6)}
                        >
                          {renderField}
                        </Field>
                      </CardBody>
                      <CardFooter className={classes.cardFooter}>
                        <Button
                          disabled={submitting || pristine}
                          simple
                          color="primary"
                          size="lg"
                          onClick={handleSubmit}
                        >
                          Create new account {}
                        </Button>
                      </CardFooter>
                    </form>
                  )}
                />
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        <Footer whiteFont />
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => bindActionCreators(Creators, dispatch);

export default connect(null, mapDispatchToProps)(Register);
