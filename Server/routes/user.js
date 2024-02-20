const config=require('config');
const mysql=require('mysql');
const cors=require('cors');
const express=require('express');
const app =  express.Router();


app.use(express.json());
app.use(cors());


let connectionDetails={
    host: config.get("SERVER"),
    database: config.get("DATABASE"),
    user: config.get("USER"),
    password: config.get("PASSWORD"),
}
app.get("/",(req,res)=>{
    let connection=mysql.createConnection(connectionDetails);
    let statement = 'select * from users';
    connection.query(statement,(error,result)=>{
        if(error == null){
            res.setHeader("Content-Type", "application/json");
            res.write(JSON.stringify(result));
            connection.end();
            res.end();
        }else{
            res.setHeader("Content-Type","application/json");
            res.write(JSON.stringify(error));
            console.log(error);
            connection.end();
            res.end();
        }
    })
})
app.get("/:user_id", (request, response) => {
    const userid = request.params.user_id;
    let connection = mysql.createConnection(connectionDetails);
  
    const statement = "SELECT * FROM users WHERE user_id = ?";
  
    connection.query(statement, [userid], (error, result) => {
      if (error == null) {
        response.setHeader("Content-Type", "application/json");
        response.send(JSON.stringify(result));
      } else {
        response.setHeader("Content-Type", "application/json");
        response.send(JSON.stringify(error));
      }
  
      connection.end();
    });
  });


app.post("/",(req,res) =>
{
    let {first_name,last_name, email_id, password, mob_no, date_of_birth} = req.body;

    let connection=mysql.createConnection(connectionDetails);
    let statement = `insert into users(first_name,last_name,email_id,password,mob_no,date_of_birth) values ('${first_name}','${last_name}','${email_id}','${password}','${mob_no}','${date_of_birth}')`;
    connection.query(statement,(error,result)=>
    {
        if(error==null)
        {
            res.setHeader("Content-Type","application/json");
            var responseMsg = {
                "status" : "success",
                "result" : result
            }
            res.write(JSON.stringify(responseMsg));
            connection.end();
            res.end();
        }
        else
        {
            res.setHeader("Content-Type","application/json");
            res.write(JSON.stringify(error));
            console.log(error);
            connection.end();
            res.end();
        }
    }
    )
}
)

app.put("/:user_id", (req, res) => {
    const userid = req.params.user_id;
    const { first_name, last_name, email_id, password, mob_no, date_of_birth } = req.body;
  
    let connection = mysql.createConnection(connectionDetails);
    const statement = "UPDATE users SET first_name=?, last_name=?, email_id=?, password=?, mob_no=?, date_of_birth=? WHERE user_id=?";
    
    connection.query(statement, [first_name, last_name, email_id, password, mob_no, date_of_birth, userid], (error, result) => {
      if (error == null) {
        res.setHeader("Content-Type", "application/json");
        const responseMsg = {
          "status": "success",
          "result": result,
        };
        res.send(JSON.stringify(responseMsg));
      } else {
        res.setHeader("Content-Type", "application/json");
        res.send(JSON.stringify(error));
      }
      connection.end();
    });
  });


module.exports =app;