const express = require('express')
const package = require('./package.json');
const ApartmentsHandling = require('./apartments/ApartmentsHandling');

const path = require('path');

const app = express()
let  port = 5001;

function content_type_from_extension(url)
{

	const match = url.match( /\.([a-z]+)/i );
	
	if ( ! match ) {
		if ( url === '/' || ( url.startsWith('/') && url.endsWith('/')) ) 
		{
			return 'text/html';
		}
		return 'application/json';
	}

	const ext = match[1].toLowerCase();

	switch( ext ) {
		case 'js': 
			return 'text/javascript';
		case 'css': 
			return 'text/css';
		case 'html': 
			return 'text/html';
	}

	return 'text/plain';
}

const set_content_type = function (req, res, next) 
{
	const content_type = req.baseUrl == '/api' ? "application/json; charset=utf-8" : content_type_from_extension( req.url)
	res.setHeader("Content-Type", content_type);
	next()
}
app.use( set_content_type );
app.use(express.json());  // to support JSON-encoded bodies
app.use(express.urlencoded( // to support URL-encoded bodies
{  
  extended: true
}));


// Routing
const router = express.Router();
// כאן רושמים את כל הבקשות לשרת
router.get('/apartments', (req, res) => {ApartmentsHandling.GetApartmentList(req, res)}) //רשימה של כל הדירות- מגדיר את הבקשה של הלקוח לבין איזה פונקציה השרת צריך להפעיל
router.post('/getApartment', (req, res) => {ApartmentsHandling.GetApartment(req, res)})
router.post('/createApartment', (req, res) => {ApartmentsHandling.CreateApartment(req, res)})


app.use(express.static('pages')); //מאיזה תיקייה העמודים נלקחים- החלק של הפרונט
app.use('/api',router) //added

// Init
let msg = `${package.description} listening at port ${port}`
app.listen(port, () => { console.log( msg ) ; })