const { LogInCollection } = require("../models");

function showLogin(req, res) {
  res.render("login");
}

function showSignup(req, res) {
  res.render("signup");
}

async function signup(req, res) {
  try {
    const usernameCheck = await LogInCollection.findOne({
      name: req.body.name,
    });

    if (usernameCheck) {
      return res.render("signup", {
        errorMessage: "Username already taken, please choose another.",
      });
    }

    const data = {
      name: req.body.name,
      password: req.body.password,
      bookmarks: [],
    };

    await LogInCollection.create(data);
    return res
      .status(201)
      .render("login", { successMessage: "Signup successful! Please log in." });
  } catch (err) {
    console.error("Signup Error:", err);
    return res.render("signup", {
      errorMessage: "Something went wrong, please try again.",
    });
  }
}

async function login(req, res) {
  try {
    const user = await LogInCollection.findOne({ name: req.body.name });

    if (user && user.password === req.body.password) {
      req.session.userId = user._id;
      return res.redirect("/home");
    } else {
      res.render("login", {
        errorMessage: "Incorrect password or username. Please try again.",
      });
    }
  } catch (e) {
    console.error("Error logging in:", e);
    res.render("login", { errorMessage: "User not found or wrong details." });
  }
}

module.exports = {
  showLogin,
  showSignup,
  signup,
  login,
};
