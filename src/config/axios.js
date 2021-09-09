import axios from 'axios';

const clienteAxios = axios.create({
    baseURL: 'https://app-crud-redux.herokuapp.com/'
});

export default clienteAxios;

//'http://localhost:4000/'