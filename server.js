const express = require("express");
const app = express();
const port = 3000;
const birdRouter = require('./routes/birdRouter')
// app.use((req, res, next) => {
//     console.log('Time:', Date.now())
//     next()
//   })
app.use("/birds", birdRouter);

app.use(express.static('public'))


app.use((req, res, next) => {
  console.log("Time: ", Date.now());
  next();
});

app.route('/avatar').get((req , res) => {
  res.sendFile(`${__dirname}/one.mp4`)
})


// app.get("/", (req, res) => {
//   res.send("This is get");
// });

// app.post("/", (req, res) => {
//   res.send("This is post");
// });

// app.put("/", (req, res) => {
//   res.send("This is put");
// });

// app.delete("/", (req, res) => {
//   res.send("This is delete!!!");
// });



app.listen(port, () => {
  console.log("Server started at port 3000");
});
