const React = require('react');

function Bookmark(props) {
  const { plants = [] } = props;

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>My Bookmarks - Virtual Herbal Garden</title>
        <link rel="stylesheet" href="/home.css" />
        <link rel="stylesheet" href="styles.css" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
      </head>
      <body style={{ backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJqUpXXMxEPj3jPKgurajogvT_3cP-5HUa_g&s")', backgroundSize: 'cover' }}>
        <header></header>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingLeft: 30, paddingRight: 30 }}>
          <h2>Your Bookmarked Plants</h2>
          <a href="/home" className="go-home-btn">Go to Home</a>
        </div>

        <div className="bookmarks-container">
          {plants.length > 0 ? (
            plants.map((plant) => (
              <div className="plant-card" key={plant._id}>
                <h2>{plant.name}</h2>
                <img src={plant.imageUrl} alt={plant.name} />
                <p style={{ fontSize: 'larger' }}>Uses: {plant.medicinalUses?.[0]?.use}</p>
                <form
  action={`/remove-bookmark/${plant._id}`}
  method="POST"
  style={{ marginTop: 10 }}
  onSubmit={(e) => {
    if (!confirm("Remove this bookmark?")) {
      e.preventDefault();
    }
  }}
>
  <button type="submit" className="btn btn-danger">
    Remove
  </button>
</form>
              </div>
            ))
          ) : (
            <div className="no-bookmarks">
              <p>You haven't bookmarked any plants yet.</p>
            </div>
          )}
        </div>

        <footer style={{ position: 'fixed', bottom: 0, width: '100%' }}>
          <p>© 2026 Virtual Herbal Garden - Khushi Saini</p>
        </footer>

        <script src="script.js"></script>
        <script dangerouslySetInnerHTML={{
  __html: `
    if(window.history.replaceState) { 
      window.history.replaceState(null, '', window.location.href);
    }
  `
}} />
      </body>
    </html>
  );
}

module.exports = Bookmark;
