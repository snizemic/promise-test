const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
	res.setHeader('Content-Type', 'application/json');
	res.send(JSON.stringify({
		name: 'Samsung',
		type: 'AX35J',
	}))
});
app.listen(port, () => console.log(`App listening on port ${port}`));