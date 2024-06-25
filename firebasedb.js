const firebaseConfig = {
    apiKey: "AIzaSyDqPj6i-1DJkHHJJ7bWgPiYVSpP3M-8OtM",
    authDomain: "dissertation-4fdbe.firebaseapp.com",
    databaseURL: "https://dissertation-4fdbe-default-rtdb.firebaseio.com",
    projectId: "dissertation-4fdbe",
    storageBucket: "dissertation-4fdbe.appspot.com",
    messagingSenderId: "39958739999",
    appId: "1:39958739999:web:a4f0ea3cc0bf7c685d292a"
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