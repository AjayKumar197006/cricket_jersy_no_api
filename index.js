const express=require("express")

const app=express()
const db=require("./db")
app.use(express.json());

app.listen(8001,()=>
{
    console.log("server started")
    
})
app.get("/player",(req,res)=>
{
    db.getData()
    .then((data)=>
        {
            res.send(data)
            console.log(data)
        })
    .catch((error)=>
    {
        console.log(error)
        res.send(error)
    })
})
app.get("/players/:number",(req,res)=>
{
    
    const id=req.params.number
    db.getPlayer(id)
    .then((data)=>
    {
        res.send(data)
    })
    .catch((error)=>
  {
    console.log(error)
    res.send(error)
})
})

app.post("/add",(req,res)=>
{
    db.addData(req.body.number,req.body.name,req.body.country)
    .then((data)=>
    {
        res.send(data)
    })
    .catch((error)=>
    {
        console.log(error)
        res.send(error)
    })
})
app.put("/update/:number",(req,res)=>
{
    const id=req.params.number
    db.updateData(req.body.number,req.body.name,req.body.country,id)
    .then(()=>
    {
        res.send(req.body)
    })
    .catch(()=>
    {
        console.log(error)
        res.send(error)

    })
})

app.delete("/delete/:number",(req,res)=>
{
    const id=req.params.number
    console.log(id)
    db.deleteData(id)
    .then(()=>
    {
        res.send(req.body)
    })
    .catch(()=>
    {
        console.log(error)
        res.send(error)
    })
})



