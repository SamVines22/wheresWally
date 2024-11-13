const express = require("express");
const app = express();
const  port = process.env.PORT || 3000;
const controllers = require("./controllers/controllers.js");
const cors = require("cors");
const corsOptions = {
    origin: "http://localhost:5173"
}

app.use(cors(corsOptions));

app.get("/", (req,res)=>res.send("twat"));
app.get("/wally/:pic", controllers.getPic)



app.listen(port, ()=> {console.log(`app listening on ${port}`)});


