import { Pool } from "pg";
let conn;
if (!conn) {
    conn = new Pool({
        user:'postgres',
        password:'natak1999$Ab',
        host:'localhost',
        port:5432,
        database:'posts'

    })    
}
