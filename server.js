var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var mongodb = require("mongodb");
var mongoose = require("mongoose");
var ObjectID = mongodb.ObjectID;

var USERS_COLLECTION = "users";
var dbURI = process.env.MONGODB_URI;

var app = express();
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

// Create a database variable outside of the database connection callback to reuse the connection pool in your app.

mongoose.connect(dbURI);
var db = mongoo.connection;

db.on('connected', function(){
	console.log('Mongoose default connection open');
});
db.on('error', function(err){
	console.log('Mongoose default connection error: ' + err);
});
db.on('disconnected', function(){
	console.log('Mongoose default connection disconected');
});
process.on('SIGINT', function(){
	mongoose.connection.close(function(){
		console.log('Mongoose default connection disconnected through app termination');
		process.exit(0);
	});
});

// Connect to the database before starting the application server.
// mongodb.MongoClient.connect(process.env.MONGODB_URI, function (err, database) {
//   if (err) {
//     console.log(err);
//     process.exit(1);
//   }

//   // Save database object from the callback for reuse.
//   db = database;
//   console.log("Database connection ready");

//   // Initialize the app.
//   var server = app.listen(process.env.PORT || 8080, function () {
//     var port = server.address().port;
//     console.log("App now running on port", port);
//   });
// });

// API ROUTES BELOW

// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({"error": message});
}

/*  "/contacts"
 *    GET: finds all contacts
 *    POST: creates a new contact
 */

// app.get("/users", function(req, res) {
// 	db.collection(USERS_COLLECTION).findOne({'username':'thaisfaria'}, function(err, doc){
// 		if(err){
// 			handleError(res, err.message, "Failed to get this user.");
// 		}else{
// 			res.status(200).send(doc);
// 		}
// 	});
// });

var User = mongoose.model('User' {username: String, password: String, created_on: Date});

app.post("/users", function(req, res) {
  if (!(req.body.username && req.body.password)) {
    handleError(res, "Invalid user input", "Must provide a username and a password.", 400);
  }else{
  	var user = new User({username: req.body.username,
  	 password: req.body.password, created_on: Date.now()});
  	user.save(function (err, user){
  		if(err){
  			console.log(err);
  			res.send(err);
  		}else{
  			console.log('User created.');
  			res.send(user);
  		}
  	});
  }
});

app.get("/users", function(req, res) {
	var cursor = db.collection(USERS_COLLECTION).find();
	var response = [];

	cursor.each(function(err, doc){
		assert.equal(err, null);
		if(doc != null){
			response.concat(doc);
		}else{
			callback();
		}
	});
	res.send(response);	
});

// app.post("/users", function(req, res) {
//   var newUser = req.body;
//   newUser.createDate = new Date();

//   if (!(req.body.username && req.body.password)) {
//     handleError(res, "Invalid user input", "Must provide a username and a password.", 400);
//   }else{
//   	db.collection(USERS_COLLECTION).insertOne(newUser, function(err, doc) {
//     	if (err) {
//       		handleError(res, err.message, "Failed to create new user. | " + err);
//     	} else {
//       	res.status(201).json(doc.ops[0]);
//     	}
//   	});
//   }
// });

/*  "/contacts/:id"
 *    GET: find contact by id
 *    PUT: update contact by id
 *    DELETE: deletes contact by id
 */

app.get("/users/:id", function(req, res) {
});

app.put("/users/:id", function(req, res) {
});

app.delete("/users/:id", function(req, res) {
});