// INITIAL SETUP
// Save Data

//declare text and Button
const textBox = document.getElementById("textbox");
var button = document.getElementById('EditButton')// Read Data
//will get complete collection with this method
// Selectors
const elementsArray = [];
elementsArray.push(document.getElementById("textBox"));

db.collection("Users").onSnapshot(function (snapshot) {
  snapshot.docChanges().forEach(function (change) {
    if (change.type === "added") {
      const data = change.doc.data();
      //find latest updates
      const nodeTr = document.createElement("tr");
      const nodeUser = document.createElement("td");
      const nodeServices = document.createElement("td");
      const nodePhone = document.createElement("td");
      const nodeSchedule = document.createElement("td");
      const nodeSent = document.createElement("td");
      const nodeStamp = document.createElement("td");
      //add to html
      nodeUser.innerHTML += data.UserID;
      nodePhone.innerHTML += data.phone;
      nodeServices.innerHTML += data.services;
      nodeSchedule.innerHTML += data.AppointmentDate;
      nodeSent.innerHTML += data.messageSent;
      nodeStamp.innerHTML += data.timestamp;
      //add new nodes
      nodeTr.appendChild(nodeUser);
      nodeTr.appendChild(nodeServices);
      nodeTr.appendChild(nodePhone);
      nodeTr.appendChild(nodeSchedule);
      nodeTr.appendChild(nodeSent);
      nodeTr.appendChild(nodeStamp);
      //Update Page
      nodeTr.id = `${change.doc.id}`;
      table.appendChild(nodeTr);
    }else if (change.type === "modified") {
      console.log("Modified ", change.doc.data());
    } else if (change.type === "removed") {
      const elem = document.getElementById(change.doc.id);
      table.removeChild(elem);
    }
  });
});
