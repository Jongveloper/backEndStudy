import * as express from 'express';
import { Cat, CatType } from './app.model';

const app: express.Express = express();
const port: number = 8000;

app.use((req, res, next) => {
  console.log(req.rawHeaders[1]);
  console.log('this is logging middleware');
  next();
});

app.get('/', (req: express.Request, res: express.Response) => {
  res.send({ cats: Cat });
});

app.get('/cats/blue', (req: express.Request, res: express.Response) => {
  res.send({ blue: Cat[0] });
});

app.get('/cats/som', (req: express.Request, res: express.Response) => {
  res.send({ som: Cat[1] });
});

app.use((req, res, next) => {
  console.log('this is error middleware');
  res.send({ error: '404 not found error' });
});

app.listen(port, () => {
  console.log(`server is on!`);
});
