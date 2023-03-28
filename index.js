const express = require('express');
const app = express();


require('./startup/logging')();
require('./stratup/routes')(app);
require('./stratup/database')();
require('./stratup/config')();
require('./stratup/validation')();




const port = process.env.PORT || 3000;
app.listen(port, () => winston.info(`Listening on port ${port}...`));
