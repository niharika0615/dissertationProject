const firebaseConfig = {
    apiKey: "AIzaSyA5DbvzNGHh7zvVAWj2Ls-T22YtcXBGXXc",
    authDomain: "loginsignform-beb2c.firebaseapp.com",
    databaseURL: "https://loginsignform-beb2c-default-rtdb.firebaseio.com",
    projectId: "loginsignform-beb2c",
    storageBucket: "loginsignform-beb2c.appspot.com",
    messagingSenderId: "755147918776",
    appId: "1:755147918776:web:4348cdd257b5db91b2134d"
  };
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("fName");
    var emailid = getElementVal("rEmail");
    var msgContent = getElementVal("rPassword");
  
    saveMessages(name, emailid, msgContent);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (name, emailid, msgContent) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      emailid: emailid,
      msgContent: msgContent,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };