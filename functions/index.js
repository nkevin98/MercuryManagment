const functions = require('firebase-functions');
var admin = require("firebase-admin");

var serviceAccount = require("./gs-test.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://gs-test-609f5.firebaseio.com"
});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

//  exports.onItemCreation = functions.firestore.document('Users/{UserID}')
//     .onCreate(async(snapshot, context) => {
//       const itemDataSnap = await snapshot.ref.get()
//       return admin
//       .firestore()
//       .collection("Users")
//       .add({
//         to: "someone@example.com",
//         message: {
//           subject: "Hello from Firebase!",
//           text: "This is the plaintext section of the email body.",
//           html: "This is the <code>HTML</code> section of the email body.",
//         }
//     }).then(() => console.log('Queued email for delivery!'));
//  });
//  exports.onItemCreation = functions.firestore.document('Users/{UserID}')
//     .onUpdate(async(snapshot, context) => {
//         const itemDataSnap = await snapshot.ref.get()
//         return admin.firestore().collection('Users').add({
//           to: [itemDataSnap.data().email],
//           message: {
//             subject: 'Your reservation is here !',
//             html: 'Your message has been sent and appointment is set '+ itemDataSnap.data().UserID,
//           }
//         }).then(() => console.log('Queued email for delivery!'));
//     });

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
