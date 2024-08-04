const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('MORRIS MACHARIA is aunder training to be a DevOp engineer!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
