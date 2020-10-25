//Initial Setup
// Credentials for using Firestore
var firebaseConfig = {
  apiKey: "AIzaSyDid7YOy0CFaaEPSZl97i7FOfklx4gKYbo",
  authDomain: "test-firestore-database.firebaseapp.com",
  databaseURL: "https://test-firestore-database.firebaseio.com",
  projectId: "test-firestore-database",
  storageBucket: "test-firestore-database.appspot.com",
  messagingSenderId: "727593281671",
  appId: "1:727593281671:web:1f765f3f4900efd6327022",
  measurementId: "G-S1XGHC9GHF",
};

// Initialize
const reference = firebase.initializeApp(firebaseConfig);
const db = reference.firestore();
var database = firebase.firestore();

// INITIAL SETUP
// Read Data
// will get complete collection with this method
// db.collection("messages").onSnapshot((querySnapshot) => {
//   querySnapshot.forEach((doc) => console.log(doc.data()));
// });

// Save Data
const textBox1 = document.getElementById("textbox1");
var button1 = document.getElementById("DeleteButton"); // Read Data

const table = document.getElementById("table");

button1.onclick = function () {
  database
    .collection("messages")
    .where("UserID", "==", textBox1.value)
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        // doc.data() is never undefined for query doc snapshots
        database
          .collection("messages")
          .doc(doc.id)
          .delete()
          .then(function () {
            console.log("Document successfully deleted!");
          })
          .catch(function (error) {
            console.error("Error removing document: ", error);
          });
      });
    })
    .catch(function (error) {
      console.log("Error getting documents: ", error);
    });
};

// Selectors
const elementsArray = [];
elementsArray.push(document.getElementById("textBox1"));

db.collection("messages").onSnapshot(function (snapshot) {
  snapshot.docChanges().forEach(function (change) {
    if (change.type === "added") {
      const data = change.doc.data();
      const nodeTr = document.createElement("tr");
      const nodeUser = document.createElement("td");
      const nodeServices = document.createElement("td");
      const nodePhone = document.createElement("td");
      const nodeSchedule = document.createElement("td");
      const nodeSent = document.createElement("td");
      const nodeStamp = document.createElement("td");

      nodeUser.innerHTML += data.UserID;
      nodePhone.innerHTML += data.phone;
      nodeServices.innerHTML += data.services;
      nodeSchedule.innerHTML += data.AppointmentDate;
      nodeSent.innerHTML += data.messageSent;
      nodeStamp.innerHTML += data.timestamp;

      nodeTr.appendChild(nodeUser);
      nodeTr.appendChild(nodeServices);
      nodeTr.appendChild(nodePhone);
      nodeTr.appendChild(nodeSchedule);
      nodeTr.appendChild(nodeSent);
      nodeTr.appendChild(nodeStamp);
      nodeTr.id = `${change.doc.id}`;

      table.appendChild(nodeTr);
    }
    if (change.type === "modified") {
      console.log("Modified ", change.doc.data());
    }
    if (change.type === "removed") {
      const elem = document.getElementById(change.doc.id);
      table.removeChild(elem);
    }
    // If want to delete data, do something like this
    // https://firebase.google.com/docs/firestore/manage-data/delete-data
    // db.collection("messages").doc().delete();
  });
});

// Save Data
const textBox = document.getElementById("textbox1");
const button = document.getElementById("button");
const phone_number = document.getElementById("phone_number");
const services = document.getElementById("");

const boxes = function myFunction() {
  // Get the checkbox
  var discordbox = document.getElementById("discord");
  var slackbox = document.getElementById("slack");
  var whatsappbox = document.getElementById("whatsapp");
  var messengerbox = document.getElementById("messenger");
  var smsbox = document.getElementById("sms");
  // Get the output text
  var discordText = "";
  var slackText = "";
  var whatsappText = "";
  var messengerText = "";
  var smsText = "";
  // If the checkbox is checked, display the output text
  if (discordbox.checked == true) {
    discordText = "Discord ";
  } else {
    discordText = "";
  }
  if (slackbox.checked == true) {
    slackText = "Slack ";
  } else {
    slackText = "";
  }
  if (whatsappbox.checked == true) {
    whatsappText = "WhatsApp ";
  } else {
    whatsappText = "";
  }
  if (messengerbox.checked == true) {
    messengerText = "Messenger ";
  } else {
    messengerText = "";
  }
  if (smsbox.checked == true) {
    smsText = "SMS ";
  } else {
    smsText = "";
  }
  var fillBox =
    discordText + slackText + whatsappText + messengerText + smsText;
};

// Selectors
const elementsArray1 = [];
elementsArray1.push(document.getElementById("discord"));
elementsArray1.push(document.getElementById("slack"));
elementsArray1.push(document.getElementById("whatsapp"));
elementsArray1.push(document.getElementById("messenger"));
const smsElem = document.getElementById("sms");
elementsArray1.push(smsElem);

smsElem.addEventListener("click", () => {
  if (smsElem.checked) {
    phone_number.disabled = false;
  } else {
    phone_number.disabled = true;
    phone_number.value = "";
  }
});

button.addEventListener("click", () => {
  let services = [];

  elementsArray1.map((elem) => {
    if (elem.checked) services.push(elem.value);
  });

  const data = {
    UserID: textBox.value,
    phone: phone_number.value,
    text: textBox1.value,
    services: services,
    by: "username",
  };

  // Sends data to Firestore
  db.collection("messages").add(data);
});
