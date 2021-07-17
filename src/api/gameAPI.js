import axios from './utils/axios'

const defaultObject = {
    strike: payload =>
        axios.get(`/tictactoe/game/strike?sessionId=${payload.sessionId}&striker=${payload.striker}&index=${payload.index}`)
            .then(res => res.data).catch(error => console.log(error)),
};

export default defaultObject;