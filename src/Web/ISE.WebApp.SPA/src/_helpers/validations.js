export const required = (value) => (value ? undefined : 'Required');

export const emailPattern = (value) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined;

export const minLength6 = (value) =>
  value && value.length < 6
    ? 'The field must have at least 6 characters'
    : undefined;

export const passwordsMustMatch = ({ password, confirmPassword }) =>
  password && confirmPassword && password !== confirmPassword
    ? 'Passwords must match'
    : undefined;
