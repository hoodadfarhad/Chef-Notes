import bodyParser from "body-parser";
import express from "express";
import morgan from "morgan";

const app = express();
const port = 3000;
const foodNameArray = [];
const foodNotesArray = [];

var updateNamePreFill = "";
var updateNotePreFill = "";
var iUpdate = -1;
var readRequest = -1;



app.use(bodyParser.urlencoded({extended:true}));
app.use(morgan("combined"));
app.use(express.static('public'));


app.get("/", (req,res)=>{

    const data = {
        foodNameArray,
        foodNotesArray,
        readRequest
        };
        iUpdate = -1;
        
        readRequest = -1;
    res.render("index.ejs", data);
    


})

app.post("/readMore", (req,res)=>{

    readRequest = req.body.index;

    res.redirect("/");

})

app.get("/create", (req,res)=>{

    const dataUpdate = {
        updateNamePreFill,
        updateNotePreFill
    }

    if (iUpdate == -1){

        const dataUpdate = {
        updateNamePreFill: "",
        updateNotePreFill: ""
    }

    res.render("create.ejs",dataUpdate);

    }
    
    else{
        res.render("create.ejs",dataUpdate);
    }

    

      
});

app.post("/submit", (req,res)=>{
     
   
   if (iUpdate == -1){
    var foodName= req.body.title;
   var foodNotes= req.body.notes;

    foodNameArray.push(`${foodName}`);
    foodNotesArray.push(`${foodNotes}`);

    res.redirect("/");
   } else {
       foodNameArray[iUpdate] = req.body.title;
       foodNotesArray[iUpdate] = req.body.notes;
       iUpdate = -1;
       res.redirect("/");
   }
    
    
})


app.post("/update", (req,res)=>{

     iUpdate = req.body.index;


    updateNamePreFill = foodNameArray[iUpdate];
    updateNotePreFill = foodNotesArray[iUpdate];
    
  res.redirect("/create");
    
})

app.post("/delete", (req,res)=>{

    const index = req.body.index;
    foodNameArray.splice(index,1);
    foodNotesArray.splice(index,1);
    res.redirect("/");
});

app.get("/contact", (req,res)=>{

    
    res.render("contact.ejs");

})

app.post("/contact", (req,res)=>{

    var messageObj = new Message(req.body.cName, req.body.cEmail, req.body.cMessage);
    // add messageObj to database
   
    res.redirect("/");

})
   




function Message(name,email,message) {
    this.name = name;
    this.email = email; 
    this.message = message;
    

    console.log("you got an message from: " + this.name + " with email: " + this.email + " and message that says: " + this.message);

    
};



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);

});