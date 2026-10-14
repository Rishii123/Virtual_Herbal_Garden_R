const React = require('react');

function Contact() {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Contact Us - Virtual Herbal Garden</title>
        <link rel="stylesheet" href="/home.css" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="/contact.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
      </head>
      <body>
        <style>{`.go-home-btn { display: inline-block; margin: 10px; padding: 8px 12px; background-color: #12ae4e; color: white; text-decoration: none; border-radius: 5px; cursor: pointer; } .go-home-btn:hover { background-color: #046512; } header{display:flex; justify-content: flex-end; align-items: center;}`}</style>
        <header >
          <a href="/home" className="go-home-btn">Go to Home</a>
        </header>

        <div className="contact-container">
          <h1>Contact Us</h1>
          <p>We’d love to hear from you! Please fill out the form below or reach us via our contact info.</p>

          <div className="contact-row">
            <div className="contact-form-col">
              <form action="/contact-submit" method="POST">
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" id="name" name="name" className="form-control" placeholder="Your Name" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" id="email" name="email" className="form-control" placeholder="Your Email" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea id="message" name="message" className="form-control" rows="5" placeholder="Your Message" required></textarea>
                </div>
                <button id="btn" type="submit">Send Message</button>
              </form>
            </div>

            <div className="contact-info-col">
              <div className="contact-details">
                <h3>Our Contact Info</h3>
                <p><i className="fas fa-envelope"></i> Email: bkrishika1234@gmail.com</p>
                <p><i className="fas fa-phone"></i> Phone: +91-8791627899</p>
              </div>

            </div>
          </div>
        </div>

        <footer className="mt-5">
          <p>© Virtual Herbal Garden</p>
        </footer>
      </body>
    </html>
  );
}

module.exports = Contact;
