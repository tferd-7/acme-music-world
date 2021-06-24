const app = require('./app');
const { syncAndSeed } = require('./db');

const port = process.env.PORT || 3200;


const init = async()=> {
  await syncAndSeed();
  app.listen(port, ()=> console.log(`listening on port ${port}`));
}

init();
