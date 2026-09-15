const React = require('react');

function Signup(props) {
  const { errorMessage } = props;

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Sign Up</title>
        <link rel="stylesheet" href="/signup.css" />
      </head>
      <body>
        <form action="/signup" method="post">
          <h1>Sign Up</h1>
          <input placeholder="Username" name="name" type="text" />
          <br />
          <input placeholder="Password" name="password" type="password" />
          <br />
          <input className="sub" type="submit" />
          <h3>Already have an account? <a href="/">Login</a></h3>
          <br />
          {errorMessage && <p style={{ fontWeight: 'bolder', color: 'red' }}>{errorMessage}</p>}
        </form>
      </body>
    </html>
  );
}

module.exports = Signup;
