import app from "./app";
const db = require('./database/index.js')

db.on('error', error => console.error(error));

db.once('open', () => {
    app.listen(process.env.PORT || 3333);
});
