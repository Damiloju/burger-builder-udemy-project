import axios from 'axios';

const instanse = axios.create({
    baseURL: 'https://react-my-burger-634e6.firebaseio.com/'
});

export default instanse;