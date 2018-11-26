import * as path from 'path';
import * as express from 'express';
import * as webpack from 'webpack';
import webpackMiddleware = require('webpack-dev-middleware');

const app = express();

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '..', 'app')));
} else {
  const webpackConfiguration = require('../app/webpack.config.js');
  app.use(
    webpackMiddleware(webpack({ ...webpackConfiguration, mode: 'development' }))
  );
}

app.get('/api', (_, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
