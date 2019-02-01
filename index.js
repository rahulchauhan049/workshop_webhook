"use strict";
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();
const {dialogflow} = require('actions-on-google');
const app = dialogflow({
    debug: true
});


//modify Thia welcome intent
app.intent('Default welcome intent', conv => {
    conv.close("Hello_WORLD");
});


exports.googleAction = functions.https.onRequest(app);
 
