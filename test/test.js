//message test

db.collection("Users").onSnapshot(function (snapshot) {
  snapshot.docChanges().forEach(function (change) {
    if (change.type === "added") {
      const data = change.doc.data();

      const message = data.messageSent;
      const timeStamp = data.timeStamp;
      const user = data.UserID;

      if(!message){
          console.log(user + " did not recieve a message");
      }else{
          console.log(user + " was added at: " + timeStamp);
      }
    }
  });
});
