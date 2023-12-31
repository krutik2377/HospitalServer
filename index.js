const express  = require("express");

const app = express();

var user = [{
  name: "Krutik",
  kidneys: [{
    healthy: false
  }]
}];

app.use(express.json());
app.get("/", function(req,res){
  const johnKidneys = user[0].kidneys;
  const numberOfKidneys = johnKidneys.length;
  // filter array
  let numberOfHealthyKidneys = 0;
  for(let i=0;i<johnKidneys.length;i++)
  {
    if(johnKidneys[i].healthy)
    {
      numberOfHealthyKidneys += 1;
    }
  }
  const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
  res.json({
    numberOfKidneys,
    numberOfHealthyKidneys,numberOfUnhealthyKidneys
  })
})



app.post("/",function(req,res){
     const isHealthy =req.body.isHealthy;
     user[0].kidneys.push({
      healthy : isHealthy
     })

     res.json({
      msg: "Done"
     })
})

app.put("/", function(req,res){
  if(isThereatleastOneunHealthyKidney())
  {
    for(let i=0;i<user[0].kidneys.length;i++)
    {
        user[0].kidneys[i].healthy  = true;
    }
    res.json({
      msg : "Updated"
    })
  }
  else{
    res.json({
      msg:"You have no bad Kidneys to Convert"
    })
  }
  
})

app.delete("/", function(req,res){
  // you should return a 411 if wrong request. 
  //  Only if alteast one unhealthy kidney is there do this, else return 411
  if(isThereatleastOneunHealthyKidney())
  {
    const newKidneys = [];
    for(let i=0;i<user[0].kidneys.length;i++)
    {
      if(user[0].kidneys[i].healthy)
      {
        newKidneys.push({
          healthy : true
        })
      }
    }
    user[0].kidneys = newKidneys;
    res.json({
      msg : "UnHealthy kidneys are deleted !"
    })
  }
  else{
    res.json({
      msg: "You have no bad Kidneys."
    })
  }

  
})

function isThereatleastOneunHealthyKidney(){
  let atleastOneUnhealthyKidney = false;
  for(let i=0;i<user[0].kidneys.length;i++)
  {
    if(!user[0].kidneys[i].healthy)
    {
      atleastOneUnhealthyKidney = true;
    }
  }
  return atleastOneUnhealthyKidney;
}

app.listen(3000);