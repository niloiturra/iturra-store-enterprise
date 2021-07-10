import axios from 'axios';

const url = 'http://localhost:5000/api/identidade/';
const registerApi = {
  postRegister: (values) => axios.post(url + 'registrar', values),
};
export default registerApi;
