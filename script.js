// creating the biocard on click //////////////////////////////////

const bioCard = document.getElementById("card1");
bioCard.onclick = function displayBioCard() {
  //   bioCard.style.backgroundImage = "none";
  bioCard.style.color = "white";
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

const projectCard = document.getElementById("card2");
const createProjectBreak = document.createElement("hr");

projectCard.onclick = function displayProjectCard() {
  projectCard.textContent = "";
  var projectCardEl = document.createElement("card");
  projectCardEl.setAttribute("id", "projectCardEl");

  projectCardEl.setAttribute("class", "card-header");
  var projectText = document.getElementById("projectCardEl");
  projectCardEl.textContent = "Projects";

  projectCard.appendChild(projectCardEl);

  var projectCardApiEl = document.createElement("card");
  projectCardApiEl.setAttribute("id", "projectCardApiEl");
  projectCardApiEl.setAttribute("class", "card col-10");
  projectCardApiEl.textContent = "";
  projectCardApiEl.style.backgroundColor = "transparent";
  projectCard.appendChild(projectCardApiEl);
  

  var createProjectButton = document.createElement("button");
  projectCardApiEl.appendChild(createProjectButton);
  createProjectButton.textContent = "BellyBuster: the App";
  createProjectButton.setAttribute(
    "class",
    "btn btn-secondary btn-lg btn-light"
  );
  createProjectButton.setAttribute("id", "projectButton");
  createProjectButton.setAttribute("style", "margin-top: 20px");
  createProjectButton.setAttribute("style", "background-image: url('bellybusterthumb.png')", "background-size: auto");
  createProjectButton.style.fontWeight = "bold";
  // createProjectButton.setAttribute("style", "background-size: cover");
  
  var createProjectButtonLinks = document.createElement("div");
  createProjectButtonLinks.textContent = "GitHub Url: " + "https://github.com/humesandrew/Belly-Buster";
              createProjectButtonLinks.setAttribute("style", "font-size: 10px");


  createProjectButton.appendChild(createProjectBreak).appendChild(createProjectButtonLinks);
  var clickProjectButton = document.getElementById("projectButton");
  clickProjectButton.onclick = function () {
    window.open("https://humesandrew.github.io/Belly-Buster/");
  };

  var createApiCard = document.createElement("div");
  createApiCard.textContent = "";
  createApiCard.setAttribute("id", "apiCard");
  createApiCard.setAttribute("style", "margin-top: 30px;");
  projectCardApiEl.appendChild(createApiCard);

  function getRepos() {
    var apiUrl = "https://api.github.com/users/humesandrew/repos?per_page=5";
    fetch(apiUrl)
      .then(function (response) {
        if (response.ok) {
          response.json().then(function (data) {
            console.log(data);

            for (var i = 0; i < data.length; i++) {
              var repoName = "Title: " + data[i].name;
              var repoUrl = "https://humesandrew.github.io/" + data[i].name;
              var addRepoSection = document.createElement("hr");
              var addRepoSectionText = document.createElement("div");
              addRepoSectionText.textContent = "GitHub Url: " + repoUrl;
              addRepoSectionText.setAttribute("style", "font-size: 10px");
              addRepoSectionText.style.color = 'black';
              
              

              var repoEl = document.createElement("a");
              repoEl.textContent = repoName;
              repoEl.setAttribute("id", repoName);

              repoEl.setAttribute("class", "btn btn-secondary btn-block");
              repoEl.setAttribute("href", repoUrl);
              repoEl.setAttribute("style", "display: flex");
              repoEl.setAttribute("style", "justify-content: center");
              repoEl.setAttribute("style", "align-items: column");
              repoEl.setAttribute("style", "background-image: url('githubthumb.png')");
              repoEl.style.color = 'black';
              repoEl.style.fontWeight = 'bold';

            

              projectCardApiEl.appendChild(repoEl).appendChild(addRepoSection).appendChild(addRepoSectionText);
            }

            
          });
        } else {
          alert("Error: " + response.statusText);
        }
      })
      .catch(function (error) {
        alert("Unable to connect to GitHub");
      });
  }

  getRepos();
};

///creating the contact card on click////////

const contactCard = document.getElementById("card3");
const contacts = ["Email", "Resume", "LinkedIn"];

contactCard.onclick = function displayContactCard() {
  contactCard.textContent = "";
  var createList = document.createElement("ul");
  for (var i = 0; i < contacts.length; i++) {
    var createListItem = document.createElement("button");
    createListItem.textContent = contacts[i];
    createListItem.setAttribute("class", "btn btn-secondary btn-lg btn-light");
    contactCard.appendChild(createListItem);
    contactCard.style.justifyContent = "space-around";
    createListItem.setAttribute("id", contacts[i]);
  }

  var clickEmail = document.getElementById("Email");
  clickEmail.onclick = function () {
    window.location.href = "mailto:humes.andrew@gmail.com";
  };

  var clickResume = document.getElementById("Resume");
  clickResume.onclick = function () {
    window.open("Andy_Humes_Resume.pdf");
  };

  var clickLinkedIn = document.getElementById("LinkedIn");
  clickLinkedIn.onclick = function () {
    window.open("https://www.linkedin.com/in/andrew-humes-72075559/");
  };
};
