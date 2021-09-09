import axios from 'axios';

const clienteAxios = axios.create({
    baseURL: 'https://app-crud-redux.herokuapp.com/productos'
});

export default clienteAxios;

//'http://localhost:4000/'