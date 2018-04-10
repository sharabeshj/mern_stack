var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RegisterSchema = new Schema({
	name : String,
	about : String,
	state : String,
	age : Number,
	ethinicity : { type : String, enum : ['Hispanic','Non-Hispanic']},
	race : { type : String,enum : ['American indian','Asian','Native Hawaiian','Black','White']},
	sex: { type : String, enum : ['Male','Female']},
	height : Number,
	weight : Number,

});

module.exports = mongoose.model('Register',RegisterSchema);