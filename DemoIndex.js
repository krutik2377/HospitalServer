const express = require("express"); 
// const bodyParser  = require("body-parser");
const app = express();
const port = process.env.PORT || 3000

// app.use(bodyParser.json());
// app.use(express.json());
// app.get("/route-handler", function(req,res) {
//     res.json({
//         name:"krutik",
//         agee:22
//     }) 
// })

// similar to fs.readfile with call back function
app.get('/', function(req, res){
  res.send('Hello World!')
})

app.post('/Conversations', function(req, res){
    console.log(req.query.message);
    console.log(req.body);
    res.send("Hello World");
  })

app.listen(port, function(){
  console.log(`Example app listening on port ${port}`)
})