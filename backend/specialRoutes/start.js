import { runQuery } from "../classes/dbEngineSpecific/MySQLQuery.js";
const app = global.server;


app.get("/api/ourOwnRoute", async (req, res) => {
    let result = await runQuery('SELECT * FROM movies WHERE title = :title', { title: "Barbie" });
    res.json(result);
});
