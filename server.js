const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended : true }));
app.use(bodyParser.json());

const port = process.env.PORT || 5000;


var router = express.Router();

router.get('/',function(req,res){
	res.json({ messsage : 'Welcome to our api'});
});
router.use(function(req,res,next) {
	next();
});

app.use('/api/',router);
	
// app.get('/api/hello', (req, res) => {
//   res.send({ express: 'Hello From Express' });
// });
var mongoose = require('mongoose');
// 
var mongoDB = 'mongodb://127.0.0.1:27017/my_db';
mongoose.connect(mongoDB);

mongoose.Promise = global.Promise;

var db = mongoose.connection;

db.on('error',console.error.bind(console,'MongoDB connection error: '));


var Register = require('./models/register');

router.route('/register')
	.post(function(req,res) {
		var register = new Register();
		register.name = req.body.name;

		register.save(function(err) {
			if(err) {
				res.send(err);
			}
			res.json({ messsage : 'Register created ' })
		});
	})
	.get(function(req,res){
		// console.log(Register);
		Register.find(function(err,registers){
			if(err){
				res.send(err);
			}
			res.json(registers);
		});
	});

router.route('/register/:register_id')
	.get(function(req,res){
		Register.findById(req.params.register_id,function(err,register){
			if(err){
				res.send(err);
			}
			res.json(register);
		});
	})
	.put(function(req,res){
		Register.findById(req.params.register_id,function(err,register){
			if(err){
				res.send(err);
			}
			register.name = req.body.name;
			register.save(function(err){
				if(err){
					res.send(err);
				}
				res.json({ messsage : "Register Updated"});
			})
		})
	})
	.delete(function(req,res){
		Register.remove({
			_id : req.params.register_id
		},function(err,register){
			if(err){
				res.send(err);
			}
			res.json({ messsage : "Successfully deleted" });
		});
	});
app.listen(port, () => console.log(`Listening on port ${port}`));