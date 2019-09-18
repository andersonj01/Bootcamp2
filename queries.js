/* Add all the required libraries*/
var mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config'),
	util = require('util');
	
/* Connect to your database using mongoose - remember to keep your key secret*/
mongoose.connect(config.db.uri, {useNewUrlparser: true});
/* Fill out these functions using Mongoose queries*/
//Check out - https://mongoosejs.com/docs/queries.html
var List = mongoose.model('datalist', Listing.listingSchema);
var findLibraryWest = function() {
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */
   List.find({name:'Library West'}, function(err,info){
	   if(err) throw err;
	   console.log(info);
   });
};
var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */
   List.findOneAndRemove({code:'CABL'}, function(err,info) {
	   if(err) throw err;
	   console.log(info);
	 
	   
   });
	   
};
var updatePhelpsLab = function() {
  /*
    Phelps Memorial Hospital Center's address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
   */
   List.findOneAndUpdate({name:'Phelps Laboratory'},{address: "1953 Museum Rd, Gainesville, FL 32603"},function(err,info){
	   if(err) throw err;
	   console.log(info);
   });
};
var retrieveAllListings = function() {
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */
	  List.find({}, function(err,info){
	   if(err) throw err;
	   //source: https://zaiste.net/nodejs_log_over_100_array_items/
	   console.log(util.inspect(info, {maxArrayLength:null}));
   });
};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();