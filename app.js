const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname+ "/date.js");

const app = express();
app.set('view engine', 'ejs');
app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: true }));

let items = ["Eat", "Sleep", "Code", "Repeat"];
let workItems = [];

app.get('/', (req, res) => {

    let formatedDate = date();
    res.render("list", {listTitle: formatedDate, listArray: items});
});

app.post('/', (req, res)=>{
    let item = req.body.newItem;
    
    if(req.body.button === "Work"){
        workItems.push(item);
        res.redirect("/work");
    }else{
        items.push(item);
        res.redirect('/');
    }
})


app.get("/work", (req, res)=>{
    let title = "Work";
    res.render("list", {listTitle: title, listArray: workItems});
})

app.post("/work", (req, res)=>{
    let item = req.body.newItem;
    workItems.push(item);
    req.redirect("/work");
})


app.get("/about", (req, res)=>{
    res.render("about");
})

app.listen(3000, () => {
    console.log("Server Listening on port 3000");
});