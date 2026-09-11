const express = require("express");
const path = require("path");
const session = require("express-session");
const reactViews = require("express-react-views");

// Lets Node.js require .jsx files directly (compiles them with Babel on the fly),
// which is what allows tempelates/*.jsx to be used as Express views.
require("@babel/register")({
  presets: ["@babel/preset-react"],
});

const routes = require("./routes");

const app = express();

app.use(
  session({
    secret: "your-secret-key",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false },
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const tempelatePath = path.join(__dirname, "../tempelates");
const publicPath = path.join(__dirname, "../public");

app.engine("jsx", reactViews.createEngine());
app.set("view engine", "jsx");
app.set("views", tempelatePath);
app.use(express.static(publicPath));

app.use("/", routes);

module.exports = app;
