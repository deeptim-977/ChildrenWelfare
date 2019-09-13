//declaring payment related utility functions

const paystack = (req) => {
   
    const API_KEY = "Bearer sk_test_09a5621200c865f5e319782c258f206c05a1db9e";

    const initializePayment = (formData, callback) => {

        const option = {
            url: "https://api.paystack.co/transaction/initialize",
            headers: {
                authorization: API_KEY,
                'content-type': 'application/json',
                'cache-control': 'no-cache' 
            },
            formData
        }

        const callbackFunc = (err, res, body) => {
            return callback(err, body)
        }

        request.post(option, callbackFunc)

    }

    const verifyPayment = (ref, callback) => {
        const option = {
            url : 'https://api.paystack.co/transaction/verify/'+encodeURIComponent(ref),
            headers : {
                authorization: API_KEY,
                'content-type': 'application/json',
                'cache-control': 'no-cache'
           }
        }

        const callbackFunc = (error, response, body)=>{
            return callback(error, body);
        }
        request(option, callbackFunc);
    }

    return {initializePayment, verifyPayment};
}

module.exports = paystack