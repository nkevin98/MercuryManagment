// INITIAL SETUP

//declare text and Button
const textBox = document.getElementById("textbox");
var button = document.getElementById('myBtn');// Read Data
//will get complete collection with this method;
// Selectors
const elementsArray = [];
elementsArray.push(document.getElementById("textBox"));

//tr rows
//td columns
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
      const nodeMessage = document.createElement("td");
      const nodeChan = document.createElement("td");
      const nodeHook = document.createElement("td");
      const nodeDiscId = document.createElement("td");
      const nodeDiscRecp = document.createElement("td");
      const nodeDiscPswd = document.createElement("td");
      const nodeSlackId = document.createElement("td");
      const nodeSlackPswd = document.createElement("td");
      const nodeOnRequest = document.createElement("td");
      const nodeImContent = document.createElement("td");
      const nodeImDate = document.createElement("td");



      //add to html --> KEEP IN ORDER WHEN USED ANYWHERE IN CRUD
      nodeUser.innerHTML += data.UserID;
      nodePhone.innerHTML += data.phone;
      nodeServices.innerHTML += data.services;
      nodeSchedule.innerHTML += data.AppointmentDate;
      nodeSent.innerHTML += data.messageSent;
      nodeMessage.innerHTML += data.message;
      nodeChan.innerHTML += data.DiscordChannel;
      nodeHook.innerHTML += data.Webhooks;
      nodeDiscId.innerHTML += data.DiscordLoginID;
      nodeDiscRecp.innerHTML += data.recipients;
      nodeDiscPswd.innerHTML += data.DiscordPassword;
      nodeSlackId.innerHTML += data.slackId;
      nodeSlackPswd.innerHTML += data.SlackPassword;
      nodeOnRequest.innerHTML += data.currentTime + data.currentDate;
      nodeImContent.innerHTML += data.imContent;
      nodeImDate.innerHTML += data.imDate;
    

      //add new nodes q
      nodeTr.appendChild(nodeUser);
      nodeTr.appendChild(nodeServices);
      nodeTr.appendChild(nodePhone);
      nodeTr.appendChild(nodeSchedule);
      nodeTr.appendChild(nodeSent);
      nodeTr.appendChild(nodeMessage);
      nodeTr.appendChild(nodeChan);
      nodeTr.appendChild(nodeHook);
      nodeTr.appendChild(nodeDiscId);
      nodeTr.appendChild(nodeDiscRecp);
      nodeTr.appendChild(nodeDiscPswd);
      nodeTr.appendChild(nodeSlackId);
      nodeTr.appendChild(nodeSlackPswd);
      nodeTr.appendChild(nodeOnRequest);
      nodeTr.appendChild(nodeImContent);
      nodeTr.appendChild(nodeImDate);
      
      //Update Page
      nodeTr.id = `${change.doc.id}`;
      table.appendChild(nodeTr);

      //allows to shift when mouse is over
      document.getElementById(nodeTr.id).onmouseover = function(){
        this.style.backgroundColor = "rgba(0, 217, 255, 0.979)";
        this.style.transform = "translate(33px,0)";
      }
      document.getElementById(nodeTr.id).onmouseout = function(){
        this.style.backgroundColor = "white";
        this.style.transform = "translate(0px,0)";
      }

    }else if (change.type === "modified") {
      console.log("Modified ", change.doc.data());
    } else if (change.type === "removed") {
      const elem = document.getElementById(change.doc.id);
      table.removeChild(elem);
    }
  });
});


// Email will be handled below. Sends notification of success of schedule and message being sent. 
// Actual sending of Messages are handled by the other Mercury messanger.


