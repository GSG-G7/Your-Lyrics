const app = require('./app');
// Get the port
const port = app.get('port');

app.listen(port, () => {
  console.log(`server is working on link http://localhost:${port}`);
});
