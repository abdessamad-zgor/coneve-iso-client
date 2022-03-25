const webpack = require('webpack');
const fs = require('fs');
const path = require('path');

function bundleApp() {
  let config;
  if (process.env.NODE_ENV == 'production') {
    config = require('../../webpack.prod');
  } else {
    config = require('../../webpack.config');
  }

  let files = fs.readdirSync(path.resolve(__dirname, '../../dist/app'));

  const compiler = webpack(config);
  if (!files.length && process.env.NODE_ENV == 'production') {
    //run the compiler once
    compiler.run((err, stats) => {
      //error handeling
      if (err) {
        console.error(err.stack || err);
        if (err.details) {
          console.error(err.details);
        }
        return;
      }

      console.log(
        stats.toString({
          chunks: false, // Makes the build much quieter
          colors: true, // Shows colors in the console
        })
      );

      // Log result...
      compiler.close((closeErr) => {
        console.log(closeErr);
      });
    });
  } else if (process.env.NODE_ENV == 'development') {
    compiler.watch(
      {
        aggregateTimeout: 333,
        pool: undefined,
      },
      (err, stats) => {
        //error handeling
        if (err) {
          console.error(err.stack || err);
          if (err.details) {
            console.error(err.details);
          }
          return;
        }

        console.log(
          stats.toString({
            chunks: false, // Makes the build much quieter
            colors: true, // Shows colors in the console
          })
        );
      }
    );
  }
}

module.exports = bundleApp;
