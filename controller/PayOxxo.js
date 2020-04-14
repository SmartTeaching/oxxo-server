require('../config/config');
const stripe = require('stripe')( process.env.apiKey);
stripe.setApiVersion('2020-03-02; oxxo_beta=v1')

const makePayment= async (req,res) => {
const {amount}=req.body;
const monto= addDecimals(amount)
if (!validateAmount(amount)) {
  return  res.status(406).json({
    succes:true,
    error:'Monto no valido'
  })
}
try {
  const paymentIntent = await stripe.paymentIntents.create({
    amount:monto,
    currency: 'mxn',
    payment_method_types: ['oxxo'],
  });
  if (paymentIntent) {
    return res.status(200).json({
        succes:true,
        payment:paymentIntent,
        amount
    })
  }
  return res.status(406).json({
    succes:false,
    error:'Fallo transaccion'
  })
} catch (error) {
  console.log(error);
  return res.status(503).json({
    succes:false,
    error:'Fallo transaccion'
  })
}
  
  
  
};
function validateAmount(number) {
  const amount = parseInt(number);
  const res = amount > 0 && amount <= 5000;
  return res;
}
function addDecimals(num) {
  const s =parseInt(num+"00") ;
 return s;
 
}
module.exports={
    makePayment
}