const app = require('./app');
const dotenv = require('dotenv');
dotenv.config();
app.listen(3011, () => console.log('Server running......'));

