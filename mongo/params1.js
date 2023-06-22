const express=require('express');
const app=express();
app.get('/:jp/:abc',(req,res)=>{
    data=req.params.jp;
    data1=req.params.abc;
    res.status(200).send(`Data: ${data} ${data1}`);
});
app.listen(3000);
