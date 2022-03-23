function HTML(props) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>Document</title>
        <link
          rel="stylesheet"
          type="text/css"
          href={`${
            process.env.NODE_ENV == 'production' ? 'https://quiet-shelf-27868.herokuapp.com' : process.env.HOST
          }/dist/app/index.css`}
        />
      </head>
      <body>
        <div id="root" className="root" dangerouslySetInnerHTML={{ __html: props.html }}></div>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.__PRELOADED_DATA__ = JSON.stringify(${props.data})`,
          }}
        ></script>
      </body>

      <script
        type="application/javascript"
        src={`${
          process.env.NODE_ENV == 'production' ? 'https://quiet-shelf-27868.herokuapp.com' : process.env.HOST
        }/dist/app/main.js`}
      />
    </html>
  );
}

export default HTML;
