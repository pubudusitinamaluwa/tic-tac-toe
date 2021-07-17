import axios from './utils/axios'

const defaultObject = {
    createSession: () => axios.get(`/tictactoe/session/create`).then(res => res.data),
    getSession: sessionId => axios.get(`/tictactoe/session/get/${sessionId}`).then(res => res.data),
};

export default defaultObject;