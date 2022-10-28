import {io} from 'socket.io-client'

const url = 'https://chat-app-cdik.onrender.com';

export default io(url);