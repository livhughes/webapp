var express =require("express");
var path = require("path");
var bodyParser = require("body-parser");
var csv=require('ya-csv');

var app = express();
app.use(express.static(path.join(__dirname, "")));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/hello",function(request, response){

    response.sendFile(path.join(__dirname,"welcome.html"));

});

app.post('/booking', function(request, response){
    var fullName=request.body.bookingName; //fetch the name from the form
    var email=request.body.email; //fetch the email from the form

    //open CSV file called booking.csv
    //the flag "a" is for appending
    var database=csv.createCsvFileWriter("booking.csv",{"flags":"a"});
    //we want two columns containing the name, email
    var data=[fullName,email];

    //write the data to the booking.csv file
    database.writeRecord(data);
    //close the file booking.csv
    database.writeStream.end();

    //send a reply back saying everything is in order
    response.send("Thanks " + fullName + ", your booking is confirmed.");
});

var server =app.listen(8080,function(){
    var host = server.address().address;
    var port= server.address().port;

    console.log("Le bon diner web app listening at http://%s:%s",host, port);
});