process.env.NODE_ENV=process.env.NODE_ENV || 'dev';

//===================================
//api key stripe
//===================================
let Key;
if (process.env.NODE_ENV==='dev') {
    Key='sk_test_oo93Z1GqUAA8qN5zhKFLedJ600YOJ7L2Eg';
} else {
    Key=process.env.apiPublish;
}
process.env.apiKey=Key;