import axios from "axios";


const http = axios.create({
    baseURL: "http://uthstreamingdb2.somee.com/api",
    headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    }
});

export default http;
