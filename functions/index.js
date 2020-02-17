// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
admin.initializeApp();



// Listens for new jobs added to /cycles and starts timer
    exports.timer = functions.database.ref('/cycles/{machine}').onWrite((change, context) => {
        const machine = change.after.val(); 
        console.log(machine.time)
        if (machine.time > 0 ) { 
            var time = machine.time-1;
            setTimeout(() => {
                return admin.database().ref('/cycles/' + machine.machine + '/time' ).set(time)
            }, 10000);           
        }
        else if (machine.time === 0) {
             return admin.database().ref('/cycles/' + machine.machine ).remove() 
        }
        
    });                                                                                                                                                     