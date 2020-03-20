//console.log('Hellllo world!');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const eightk = require("../models/eightk");

const mongoose = require('mongoose');
mongoose.set('useUnifiedTopology', true);
mongoose.connect('mongodb://localhost:27017/eightk_db', { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function(callback){
	console.log("Connection Succeed");
});

const app = express();
app.use(morgan('combined'));
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

//get list
app.get('/eightk', (req, res) => {
	//eightk.find({ideightk_main : '143441'},
	//eightk.find({state_of_incorp : 'MO'},
	//var skip = 100;
	// for (var i = 0; skip == 100;){ 
		eightk.find(
			{}, 
			'ideightk_main filling_date state_of_incorp type file_no business_address1 business_address2 eightk_file_url item coname fsize',
			//{ skip: i * 100},
			function (error, eightk){
				if (error) { console.error(error); }
				// res.send({
				// 	eightk: eightk
				// })
				//res.clearCookie();
				res.write(JSON.stringify({
					eightk: eightk
				}));
				//res.flushHeaders();
				// if (length < 100) {
				res.end();
				// }
		//});
		}).limit(7500);
		// console.log('length is ' + eightk.length);
		// console.log('content:' + eightk.discriminators);
		// if (eightk.length == 100) {
		// 	i++;
		// } else {
		// 	skip = 999;
		// }
	//}
	//res.end();	
}); 

//get list by issue state
app.get('/eightk/:state', (req, res) => {
	//var state = req.params.state_of_incorp;
	eightk.find(
		{ state_of_incorp: req.params.state }, 
		'ideightk_main filling_date state_of_incorp type file_no business_address1 business_address2 eightk_file_url item coname fsize',
		function (error, eightk) {
			if (error) {console.error(error); }
			res.write(JSON.stringify({
				eightk: eightk
			}));
			res.end();
		//}).limit(15);
		}
	);
});

app.listen(process.env.PORT || 8081);

