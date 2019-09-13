const express = require('express');
const router = express.Router();
const donor = require('../../../models/Donor');
const {initializePayment, verifyPayment} = require('../../../config/paystack');

router.get('', (req, res) => {
    res.status(200).json({msg:'transaction completed', success: true})
})

router.post('/paymentpage',(req, res) => {
    const formData = {
        fullname: req.body.fullname,
        email: req.body.email,
        amount: req.body.amount
    }

    //init payment
    initializePayment(formData, (err, body) => {
        if(err)
            res.status(400).json({msg:"transaction failed", success: false})
        response = JSON.parse(body);
        res.redirect(response.data.authorization_url);    
    })
})
module.exports = router