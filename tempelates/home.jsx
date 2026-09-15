const React = require("react");

function Home(props) {
  const { searchResultss, searchResults, plantsList = [] } = props;

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Virtual Herbal Garden</title>
        <link rel="stylesheet" href="/home.css" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
          integrity="sha384-k6RqeWeci5ZR/Lv4MR0sA0FfDOMX0Wc9vPj/54hdPIqO0eMBI2RklFvG4iUn4io"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        />
      </head>
      <body>
        <header>

  {/* TOP ROW */}

  <div className="top-header">

    <div className="logo-section">

      <img
        src="/logo.png"
        alt=""
        className="logo-img"
      />

      <h1 className="logo-text">
        Herb Vatika
      </h1>

    </div>

    <div className="search-bar">

      <form action="/search" method="GET">

        <input
          type="text"
          name="query"
          placeholder="Search for plants..."
        />

        <button type="submit">

  <i className="fas fa-search"></i>

</button>

      </form>

    </div>

  </div>

  {/* BOTTOM ROW */}

  <nav className="navbar-links">

  <ul>

    <a href="/bookmarks">

      <li>
        <i className="fas fa-bookmark"></i>
        Bookmark
      </li>

    </a>

    <a href="/notes">

      <li>
        <i className="fas fa-sticky-note"></i>
        Notes
      </li>

    </a>

    <a href="/contact">

      <li>
        <i className="fas fa-envelope"></i>
        Contact
      </li>

    </a>

  </ul>

</nav>

</header>

        <div className="main-container">
          <div className="side-menu">
            <ul className="menu-categories">
              <li className="menu-item">
                <a href="#">Plant Type</a>
                <ul className="sub-menu">
                  <li>
                    <a href="/category/Shrubs">Shrubs</a>
                  </li>
                  <li>
                    <a href="/category/Herbs">Herbs</a>
                  </li>
                  <li>
                    <a href="/category/Trees">Trees</a>
                  </li>
                </ul>
              </li>
              <li className="menu-item">
                <a href="#">Medicinal Uses</a>
                <ul className="sub-menu">
                  <li>
                    <a href="/category/Skincare">Skincare</a>
                  </li>
                  <li>
                    <a href="/category/Digestive Health">Digestive Health</a>
                  </li>
                  <li>
                    <a href="/category/Respiratory Health">
                      Respiratory Health
                    </a>
                  </li>
                  <li>
                    <a href="/category/Immunity Boosting">Immunity Boosting</a>
                  </li>
                </ul>
              </li>
              <li className="menu-item">
                <a href="#">Edibility and Internal Uses</a>
                <ul className="sub-menu">
                  <li>
                    <a href="/category/Edible Plants">Edible Plants</a>
                  </li>
                  <li>
                    <a href="/category/Hormonal Health">
                      Hormonal Health & Reproductive Uses
                    </a>
                  </li>
                  <li>
                    <a href="/category/Mental Health">
                      Mental Health & Cognitive Function
                    </a>
                  </li>
                </ul>
              </li>
              <li className="menu-item">
                <a href="#">Miscellaneous</a>
                <ul className="sub-menu">
                  <li>
                    <a href="/category/Pain Relief">
                      Pain Relief & Anti-inflammatory
                    </a>
                  </li>
                  <li>
                    <a href="/category/Antimicrobial">
                      Antimicrobial & Anti-fungal
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="content">
            <div className="virtual-head">Let's Dive into Virtual tours</div>
            <div className="virtual-container">
              <div className="tour" id="skincare_tour">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/028/193/706/original/natural-skin-care-illustration-of-women-applying-cosmetics-face-skincare-products-with-organic-ingredients-in-flat-cartoon-background-template-vector.jpg"
                  alt=""
                />
                <button className="tour-btn">
                  <a href="/index_skincare.html">Skincare </a>
                </button>
              </div>
              <div className="tour" id="digestive_tourr">
                <img
                  src="https://thumbs.dreamstime.com/b/bowel-treatment-vector-concept-woman-magnifying-glass-near-internal-organ-health-care-medicine-digestive-system-323566940.jpg"
                  alt=""
                />
                <button className="tour-btn">
                  <a href="/index_digestive_health.html">Digestive Health </a>
                </button>
              </div>
              <div className="tour" id="immunity_tour">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPWe9wBhrRE-COidyhcCUp9bXKT0VDyp5FlA&s"
                  alt=""
                />
                <button className="tour-btn">
                  <a href="/index_immunity_boosting.html">Immunity Boosting </a>
                </button>
              </div>
              <div className="tour" id="respiratory_tour">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSc4e-qwFJm5W_mZwohaO6vQw6UudI0f2DkQ&s"
                  alt=""
                />
                <button className="tour-btn">
                  <a href="/index_respiratory_health.html">
                    Respiratory Health
                  </a>
                </button>
              </div>
            </div>

            {searchResultss ? (
              <>
                <h1
                  style={{
                    color: "white",
                    margin: "auto",
                    width: 600,
                    padding: 20,
                  }}
                >
                  Plants in Selected Category
                </h1>
                <div className="categories">
                  {searchResultss.map((plant) => (
                    <div className="category-card" key={plant._id}>
                      <a href={`/plants/${plant.name}`}>
                        <div className="img-wrapper">
                          <img src={plant.imageUrl} alt={plant.name} />
                        </div>
                        <p>{plant.name}</p>
                        <button className="bookmark-btn" data-id={plant._id}>
                          <i className="fas fa-heart"></i>
                        </button>
                      </a>
                    </div>
                  ))}
                </div>
              </>
            ) : searchResults ? (
              <>
                <h1
                  style={{
                    color: "white",
                    margin: "auto",
                    width: 600,
                    padding: 20,
                  }}
                >
                  Search results
                </h1>
                <div className="categories">
                  {searchResults.map((plant) => (
                    <div className="category-card" key={plant._id}>
                      <a href={`/plants/${plant.name}`}>
                        <img src={plant.imageUrl} alt={plant.name} />
                        <p>{plant.name}</p>
                      </a>
                      <button className="bookmark-btn" data-id={plant._id}>
                        <i className="fas fa-heart"></i>
                      </button>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <section className="product-categories">
                <h2>Explore Our Categories</h2>
                <div className="categories">
                  {plantsList.map((plant) => (
                    <div className="category-card" key={plant._id}>
                      <a href={`/plants/${plant.name}`}>
                        <img src={plant.imageUrl} alt={plant.name} />
                        <p>{plant.name}</p>
                      </a>
                      <button className="bookmark-btn" data-id={plant._id}>
                        <i className="fas fa-heart"></i>
                      </button>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>

        <div id="chatbotIcon">💬</div>

        <div id="chatbotBox" className="hidden">
          <div id="chatHeader">HerbBot 🌿</div>
          <div id="chatMessages"></div>
          <div id="chatInputArea">
            <input
              id="chatInput"
              type="text"
              placeholder="Ask me anything..."
            />
            <button id="sendBtn">Send</button>
          </div>
        </div>

        <footer>
          <p>© 2026 Virtual Herbal Garden - Khushi Saini</p>
        </footer>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
          crossOrigin="anonymous"
        ></script>
        <script
          src="https://kit.fontawesome.com/a076d05399.js"
          crossOrigin="anonymous"
        ></script>
        <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
        <script src="/script.js"></script>
        
      </body>
    </html>
  );
}

module.exports = Home;
