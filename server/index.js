const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/weigh", (req, res) => {
    res.type('text/plain');
    let min = 10;
    let max = 2000;
    let weight =  Math.floor(Math.random() * (max - min + 1) + min);  //min and max values are inclusive
    res.send(weight.toString());
  });

app.get("/api", (req, res) => {
    res.json({ message: "Test Message!" }); // this is a test response
});

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../frontend/build', 'index.html')); //handle url in the server
  });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});