const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const crypto = require('crypto');
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const methodOverride = require('method-override');


app.use(bodyParser.urlencoded({ extended : true }));
app.use(bodyParser.json());

const port = process.env.PORT || 5000;
app.use('/static', express.static(path.join(__dirname, 'public')))

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
var mongoURI = 'mongodb://127.0.0.1:27017/my_db';
mongoose.connect(mongoURI);
const conn = mongoose.connection;
let gfs;

conn.once('open',() => {
	gfs = Grid(conn.db,mongoose.mongo);
	gfs.collection('uploads');
})

const storage = new GridFsStorage({
  url: mongoURI,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = buf.toString('hex') + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          bucketName: 'uploads'
        };
        resolve(fileInfo);
      });
    });
  }
});
const upload = multer({ storage });

// conn.on('error',console.error.bind(console,'MongoDB connection error: '));


var Register = require('./models/register');

router.route('/register')
	.post(function(req,res) {
		var register = new Register();
		register.name = req.body.name;
		register.about = req.body.about;
		register.state = req.body.state;
		register.age = req.body.age;
		register.ethinicity = req.body.ethinicity;
		register.race = req.body.race;
		register.sex = req.body.sex;
		register.height = req.body.height;
		register.weight = req.body.weight;


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
			register.about = req.body.about;
			register.state = req.body.state;
			register.age = req.body.age;
			register.ethinicity = req.body.ethinicity;
			register.race = req.body.race;
			register.sex = req.body.sex;
			register.height = req.body.height;
			register.weight = req.body.weight;

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
app.post('/api/register/upload',upload.single('file'),(req,res) => {
	// res.json({file : req.file});
	res.redirect('/');
});

app.get('/image/:filename',(req,res) => {
	gfs.files.findOne({filename : req.params.filename},(err,file) => {
		if(!file || file.length === 0){
			return res.status(404).json({
				err : "No file exist"
			});
		}
		// return res.json(file);
		if(file.contentType === 'image/jpeg' || file.contentType === 'img/png'){
			const readstream = gfs.createReadStream(file.filename);
			readstream.pipe(res);
		}
		else {
			res.status(404).json({
				err : "not an image"
			})
		}
	});
});

app.listen(port, () => console.log(`Listening on port ${port}`));