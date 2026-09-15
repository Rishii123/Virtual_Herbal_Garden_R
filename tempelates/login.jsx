const React = require('react');

function Login(props) {
  const { errorMessage, successMessage } = props;

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Login</title>
        <link rel="stylesheet" href="/login.css" />
      </head>
      <body>
        <form action="/login" method="post">
          <h1>Login</h1>
          <input placeholder="Username" name="name" type="text" value="" />
          <br />
          <input placeholder="Password" name="password" type="password" value="" />
          <br />
          <input className="sub" type="submit" />
          <h3>Dont have a account? <a href="/signup">Register</a></h3>
          <br />
          {errorMessage && <p style={{ fontWeight: 'bolder', color: 'red' }}>{errorMessage}</p>}
          {successMessage && <p style={{ fontWeight: 'bolder', color: 'green' }}>{successMessage}</p>}
        </form>
      </body>
    </html>
  );
}

module.exports = Login;
