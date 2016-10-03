var express = require('express');
var router = express.Router();

var Promise = require("bluebird");

var nforce = require('nforce');
var org = require('../app');

const util = require('util');

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Salesforce Platform Events <-> Heroku Demo' });
});

/* GET home page. */
router.get('/order', function(req, res, next) {
	res.render('order', { title: 'Salesforce New Order' });
});

/* Creates a new the record */
router.post('/', function(req, res, next) {
	console.log('In router post');
	var newEvent = nforce.createSObject('Customer_Order__e');
	newEvent.set('CustomerId__c', req.body.customerId);
	newEvent.set('Product_Name__c', req.body.productName);
	newEvent.set('Number_of_Units__c', req.body.numberOfUnits);
	newEvent.set('Total_Amount__c', req.body.totalAmount);  

	org.org.insert({ sobject: newEvent })

	res.sendStatus(200);
  
});

module.exports = router;
