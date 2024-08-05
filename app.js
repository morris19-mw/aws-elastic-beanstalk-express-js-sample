const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('MORRIS MACHARIA learning to process code delivery in aws console self sponsored!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
