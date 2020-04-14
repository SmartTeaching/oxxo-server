process.env.NODE_ENV=process.env.NODE_ENV || 'dev';

//===================================
//api key stripe
//===================================
let apiKey;
if (process.env.NODE_ENV==='dev') {
    apiKey='sk_test_oo93Z1GqUAA8qN5zhKFLedJ600YOJ7L2Eg';
} else {
    apiKey=process.env.apiPublish;
}