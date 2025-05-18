var exp=require("express");
var sql=require("mysql2");
var cors=require("cors");
var app=exp();
app.use(cors());

app.get('/emps',(req,res)=>{
    var conn=sql.createConnection({
        host:"localhost",
        user:"root",
        password:"root",
        database:"db1"
    });
    conn.connect;
    conn.query("select * from emp;",(err,result)=>{
        if(err){
            console.log("Error DB");
        }else{
            res.send(result);
        }
    });
});
app.listen(9000,function(){
    console.log("Server Started!!");
});
