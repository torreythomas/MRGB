const express = require("express");
const parser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(parser.urlencoded({extended: true}));
app.use(parser.json());

const charactersRouter = require("./routes/characters")
const locationsRouter = require("./routes/locations")

app.use("/characters", charactersRouter);
app.use("/locations", locationsRouter);


app.get("/", (req, res) => {
    res.redirect("/characters");
  });

  app.set("port", process.env.PORT || 2000);
  
  app.listen(app.get("port"), () =>
    console.log(`PORT: ${app.get("port")}`)
  );