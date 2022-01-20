import axios from "axios";

const instance = axios.create({
    baseURL: "https://bye-cors.herokuapp.com/https://gh-trending-api.herokuapp.com/"
});

export default instance;