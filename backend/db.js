const {Pool} = require("pg")

const pool = new Pool({
    user: 'postgres',
    database: "stickers_db",
    password: "",
    port: "5432",
    host: "localhost"
})

module.exports = pool