const app = require('../src/server/server');
const PORT = process.env.PORT || 80;

app.set('port', PORT);

app.listen(PORT, () => console.log(`Server Listen on ${PORT}`));