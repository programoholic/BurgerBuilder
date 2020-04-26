import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-d7a07.firebaseio.com/'
});

export default instance;