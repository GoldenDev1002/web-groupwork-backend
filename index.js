let express = require("express");
let app = express();
let cors = require("cors");
app.use(cors());
app.get("/lessons", (req, res)=> {
    app.set("json spaces", 3);
    let lessons= [
        {
        topic: "Math",
            location: "Brent Cross", 
            price: 100
           
        },

        {
            topic: "Math",
               location: "Brent Cross", 
               price: 100
              
           },