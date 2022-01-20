import axios from "axios";

const instance = axios.create({
    baseURL: "https://cors-bypassing-server.herokuapp.com/"
});

export default instance;