// Author: Jahdasha Flagg (Homework 12)

var mysql = require("mysql");
var prompt = require("prompt");

//  mysql connection
var connection = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "",
    database : "Bamazon"
});

// Connecting to the Bamazon Database
connection.connect(function(err){
    if(err){
    console.log('Error connecting to Db');
    return;
    }
    console.log('Connection established');

    var schema = {
        properties: {
            ID: {
            message: "Please enter the ID of the product you would like to buy.",
            pattern: /^[0-9][0-9]$|^[0-9]$/,
            required: true
            },
            howMany: {
            message: "Please enter how many you would like to buy.",
            pattern: /^[0-9][0-9]$|^[0-9]$/,
            required: true
            }
        }
    };

var beginApp = function(){
    connection.query("SELECT * FROM Products", function(err, result) {
        return (getBamazonProducts(result));
      
      });
}

    // Function to display all of the products available for sale
    var getBamazonProducts = function (products){
        for (var i = 0; i < products.length; i++) {
            var productsResults = "------------------------"+"\r\n"+
            "ItemID: " + products[i].ItemID+"\r\n"+
            "Product Description: " + products[i].ProductName+"\r\n"+
            "Department: " + products[i].DepartmentName+"\r\n"+
            "Price: $ "+ products[i].Price;
            console.log(productsResults);
        }
        userSelectID();
    }

    var userSelectID = function(){
        prompt.start();
        console.log("Hello, Welcome to Bamazon! Please enter the ID of the product you would like to buy.");

        prompt.get(schema, function (err, result) {
            if (err){
                console.log(err)
            }
            //console.log(result);
            var userChoiceID = parseInt(result.ID);
            var userChoiceHowMany = parseInt(result.howMany);
            // console.log("id=" + userChoiceID + " how many=" + userChoiceHowMany);
        });
    }

// start the app
beginApp();
});