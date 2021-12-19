// creating the biocard on click //////////////////////////////////

const bioCard = document.getElementById("card1");
bioCard.onclick = function displayBioCard() {
  bioCard.style.backgroundImage = "none";
  bioCard.style.color = "black";
  bioCard.style.fontSize = "30px";
  bioCard.textContent =
    "I am an aspiring coder. On this page, you will see some examples of my work, my resume, and contact info. I am also part of the leadership for the Colorado chapter of the Foundation Fighting Blindness.";
  bioCard.setAttribute("data-state", "clicked");
  bioCard.style.textAlign = "center";
  var section = document.createElement("hr");
  bioCard.appendChild(section);

  var para = document.createElement("p");
  var node = document.createTextNode(
    "If you are looking to connect with the Foundation, please see my contact section."
  );
  para.appendChild(node);
  bioCard.appendChild(para);
};

/// creating the portfolio card on click///











///creating the contact card on click////////

const contactCard = document.getElementById("card3");
const contacts = ["Email", "Resume", "LinkedIn"];

contactCard.onclick = function displayContactCard() {
  contactCard.textContent = "";
  var createList = document.createElement("ul");
  for (var i = 0; i < contacts.length; i++) {
    var createListItem = document.createElement("button");
    createListItem.textContent = contacts[i];
    contactCard.appendChild(createListItem);

    contactCard.style.justifyContent = "space-around";
    createListItem.style.borderRadius = "10px";
    createListItem.style.fontSize = "25px";

    createListItem.setAttribute("id", contacts[i]);
  }

    var clickEmail = document.getElementById("Email");
    clickEmail.onclick = function () {
      console.log("Email");
      window.location.href = "mailto:humes.andrew@gmail.com";
    };

    var clickResume = document.getElementById("Resume");
    clickResume.onclick = function () {
      console.log("Resume");
      window.open("Andy_Humes_Resume.pdf");

    };

    var clickLinkedIn = document.getElementById("LinkedIn");
    clickLinkedIn.onclick = function () {
      console.log("LinkedIn");
      window.open("https://www.linkedin.com/in/andrew-humes-72075559/");
    };
  }
