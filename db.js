async function connect() {
    if (global.connection) {
        return global.connection.connect();
    }

    const { Pool } = require("pg");
    const pool = new Pool({
        user: process.env.PG_USER,
        database: process.env.PG_DATABASE,
        password: process.env.PG_PASSWORD,
        port: process.env.PG_PORT,
        host: process.env.PG_HOST
    });

    const client = await pool.connect();
    console.log("connected to db");

    const res = await client.query("select now()");
    console.log(res.rows[0]);

    client.release();

    global.connection = pool;
    return pool.connect();
}

connect();