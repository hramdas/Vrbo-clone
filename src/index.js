const express = require("express");
const app = express();
app.use(express.json());

app.set("view engine", "ejs");
app.use(express.static("public"));

const Spaces = require("./models/spaces");

app.get("/", (req, res) => {
  return res.render("index.ejs", {});
});

//All items list
app.get("/list", async (req, res) => {
  const spaces = await Spaces.find(); //.lean().exec()
  stylesheet = "css/single.css";
  checkin = req.query.in;
  checkout = req.query.in;
  guests = req.query.guests;
  place = req.query.place;
  return res.render("list", { spaces, place, checkin, checkout, guests });
});

// single item view
app.get("/single/:id", async (req, res) => {
  //const ID = req.params.id
  const space = await Spaces.findById(req.params.id);
  return res.render("single.ejs", { space });
});

app.get("/checkout/:id", async (req, res) => {
  //const ID = req.params.id
  const space = await Spaces.findById(req.params.id);
  from = req.query.from;
  to = req.query.to;
  day1 = from.split("/").map(Number);
  day2 = to.split("/").map(Number);
  days = day2[1] - day1[1];
  price = space.rate * days;
  tax = (price * 18) / 100;
  total = price + tax;
  guest = req.query.guest;
  return res.render("checkout.ejs", {
    space,
    from,
    to,
    total,
    tax,
    days,
    guest,
  });
});

app.get("/success/:id", async (req, res) => {
  const space = await Spaces.findById(req.params.id);
  return res.render("success.ejs", { space });
});

const spacesController = require("./controllers/spaces");
app.use("/spaces", spacesController);

module.exports = app;
