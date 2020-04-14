const express = require('express');
const Pay = express.Router();
const PayOxxo = require('../controller/PayOxxo');

Pay.post('/payment',PayOxxo.makePayment);

module.exports=Pay;