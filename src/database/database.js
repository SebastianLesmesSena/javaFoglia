import mysql from "promise-mysql";
import config from "../config";

const connection = mysql.createConnection({
    host: config.host,
    database: config.database,
    user: config.user,
    password: config.password
});

const getconnection=()=>{
    return connection;
};