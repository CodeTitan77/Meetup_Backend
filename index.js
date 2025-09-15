const express= require("express");
const app=express();
const Meeting= require('./meetings.model.js');
const { initializeDatabase } = require("./dbConnect.js");
const cors = require("cors");
const PORT=3333;
initializeDatabase();

app.use(cors());
app.use(express.json());
app.get("/meetings",async(req,res)=>{
    try{
         const data= await Meeting.find();
         if(data){
            res.status(200).json({data:data});
         }
          else{
                    res.status(500).json({message:"Database is empty"});

          }
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
   
})
app.post("/meetings",async(req,res)=>{
   
    try {
    const nMeet = new Meeting({
        title: req.body.title,
        details: req.body.details,
        photoUrl: req.body.photoUrl,
        startTimeandDate: req.body.startTimeandDate,
        endTimeandDate: req.body.endTimeandDate,
        eventType: req.body.eventType,
        paid: req.body.paid,
        Cost: req.body.Cost,
        DressCode: req.body.DressCode,
        Age: req.body.Age,
        tags: req.body.tags,
        hosted: req.body.hosted,
        speakers: req.body.speakers,
        location:req.body.location,
        locDetails:req.body.locDetails,
    });
    const savedMeeting = await nMeet.save();
    res.status(201).json(savedMeeting);

   }
    catch(error){
          res.status(500).json({message:error.message});
    }

})


app.listen(PORT,(req,res)=>{
    console.log(`App started at ${PORT}`);
}

)
