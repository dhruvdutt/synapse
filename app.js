/**
 * Created by root on 18-11-16.
 */

var express = require('express');
var path = require('path');
var app = express();

app.use(express.static('./'));

app.get('/', function (req, res) {
	res.sendFile(path.resolve('index.html'));
})

app.get('/contact', function (req, res) {
	res.sendFile(path.resolve('contact_us.html'));
})

app.get('/contact_us', function (req, res) {
	res.redirect('/contact');
})

app.get('/events', function (req, res) {
	res.sendFile(path.resolve('events.html'));
})

app.get('/event', function (req, res) {
	res.redirect('/events');
})

app.get('/gallery', function (req, res) {
	res.sendFile(path.resolve('gallery.html'));
})

app.all('*', function (req, res) {
	res.redirect('/');
})

app.listen(3000, function () {
	console.log("Listening at 3000");
})