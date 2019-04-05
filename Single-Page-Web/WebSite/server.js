//import express module
var express = require('express');

//import url module
var url = require("url")

//the express function()
var app = express();

//Import the mysql module
var mysql = require('mysql');

//Create a connection object with the user details
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "Designershare"
});


// www is my folder that holds my static files
//app.use(express.static('www'));

//set up the application to handle GET request sent to the user path
app.get('/users/*', handleGetRequest);//subfolders
app.get('/users', handleGetRequest);


//listening port
app.listen(8001);

//handleGetRequest function
function handleGetRequest(request, response){
    //Split the path of the request into its components
    var pathArray = request.url.split("/");

    //Get the last part of the path
    var pathEnd = pathArray[pathArray.length - 1];

    //If path ends with 'users' we return all users
    if(pathEnd === 'users'){
        //Build SQL query to select all employees
        var sql = "SELECT * FROM register";

        //Execute the query
        con.query(sql, function (err, result) {

            //Check for errors
            if (err) throw err;

            response.send(JSON.stringify(result));
        });
    }

    else {
        //Build SQL query to select all employees
        var sql = "SELECT * FROM register where id='"+pathEnd+"'";

        //Execute the query
        con.query(sql, function (err, result) {

            //Check for errors
            if (err) throw err;

            response.send(JSON.stringify(result));
        });
    }

//Close the connection
    con.end();
}


