const React = require("react");

function Notes(props) {
  const { notes = [] } = props;

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Notes - Virtual Herbal Garden - Khushi Saini</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        />
      </head>
      <body>
        <style>
          {`
html, body {
  height: 100%;
}

body {
  font-family: 'Arial', sans-serif;
  background-image: url(https://i.pinimg.com/736x/e5/e5/de/e5e5de57c2a1e31dbbd03e2f74aa0059.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  margin: 0;
  padding: 0;
  color: #2e7d32;
}
.notes-container {
 max-width: 600px;
  margin: 120px auto; 
  padding: 20px;
   border-radius: 12px;
   backdrop-filter: blur(10px); 
   background-color: rgba(255, 255, 255, 0.7); 
   box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
    }
h2 { text-align: center; 
color: #1b5e20;
 font-size: 2em;
  margin-bottom: 20px; 
  }
form { 
display: flex; 
flex-direction: column; 
margin-bottom: 20px;
 }
textarea {
 width: 100%; 
 height: auto;
  overflow: hidden; 
  resize: none; 
  margin-bottom: 10px; 
  }
button { 
padding: 10px;
 border: none;
  border-radius: 4px;
   color: #fff;
    font-size: 16px;
     cursor: pointer; 
     transition: background 0.3s ease;
      }
#save-note {
 background-color: #03c100;
  border-radius: 30px; 
  }
#save-note:hover {
 background-color: #66bb6a;
  }
#note-list { 
list-style: none; 
padding: 0;
 }
#note-list li { 
padding: 10px;
 margin: 5px 0;
  background-color: #ffffff; 
  border-radius: 4px;
   box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    word-wrap: break-word;
     overflow-wrap: break-word; 
     width: 97%;
      height: auto;
       line-height: 1.4;
        display: block;
         white-space: normal;
          }
.delete-note {
 background-color: #c50000; 
 border-radius: 30px;
  margin-top: 15px;
   width: 100px; 
   margin-left: 460px;
    box-shadow: 0.3rem 0.4rem 0.4rem rgb(0, 0, 0);
     }
.delete-note:hover { 
background-color: #ef5350;
 }
.go-home-btn {
 display: inline-block; 
 margin: 10px;
  padding: 8px 12px; 
  background-color: #12ae4e;
   color: white; 
   text-decoration: none;
    border-radius: 5px;
     cursor: pointer;
      }
.go-home-btn:hover {
 background-color: #046512; 
 }
`}
        </style>

        <div className="notes-container">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h2>Notes</h2>
            <a href="/home" className="go-home-btn">
              Go to Home
            </a>
          </div>

          <form id="note-form" action="/notes" method="POST">
            <textarea
              id="noteText"
              name="noteText"
              placeholder="Enter your note here..."
              required
            ></textarea>
            <button id="save-note" type="submit">
              <i className="fas fa-save"></i> Save Note
            </button>
          </form>

          <ul id="note-list">
            {notes.map((note) => (
              <li key={note._id}>
                {note.text}
                <form
  action={`/delete-note/${note._id}`}
  method="POST"
  onsubmit="return confirm('Are you sure you want to delete this note?')"
  style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  }}
>
  <button className="delete-note" type="submit">
    <i className="fas fa-trash-alt"></i> Delete
  </button>
</form>
              </li>
            ))}
          </ul>
        </div>

        <script
          dangerouslySetInnerHTML={{
            __html: `
    if(window.history.replaceState) { 
      window.history.replaceState(null, '', window.location.href);
    }
  `,
          }}
        />
      </body>
    </html>
  );
}

module.exports = Notes;
