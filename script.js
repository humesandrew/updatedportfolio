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
projectCard.onclick = function displayProjectCard() {
    projectCard.textContent = '';
    var projectCardEl = document.createElement("card");
    projectCardEl.setAttribute("id", "projectCardEl");


    projectCardEl.setAttribute("class", "card-header");
    var projectText = document.getElementById("projectCardEl");
   projectCardEl.textContent = "Projects";
    
    projectCard.appendChild(projectCardEl);


    var projectCardApiEl = document.createElement("card");
    projectCardApiEl.setAttribute("id", "projectCardApiEl");
    projectCardApiEl.setAttribute("class", "card col-10");
    projectCardApiEl.textContent = "Click the link to see the deployed project.";
    projectCardApiEl.style.color = "black";
    projectCardApiEl.style.fontSize = "20px";
    projectCard.appendChild(projectCardApiEl);
    

    var createProjectButton = document.createElement("button");
    projectCardApiEl.appendChild(createProjectButton);
    createProjectButton.textContent = "BellyBuster: the App";
    createProjectButton.setAttribute("class", "btn btn-outline-secondary btn-lg");
    createProjectButton.setAttribute("id", "projectButton");
    var clickProjectButton = document.getElementById("projectButton");
    clickProjectButton.onclick = function () {
      window.open("https://humesandrew.github.io/Belly-Buster/");
    }

    var createApiCard = document.createElement("div");
    createApiCard.textContent = "hello";
    createApiCard.setAttribute("id", "apiCard");
    projectCardApiEl.appendChild(createApiCard);

    
    function getRepos() {
      var apiUrl = 'https://api.github.com/users/humesandrew/repos?per_page=5';
      fetch(apiUrl)
      .then(function (response) {
        if (response.ok) {
          response.json().then(function (data) {
            console.log(data);
            
          for (var i = 0; i < data.length; i++) {
            var repoName = data[i].name;
            var repoUrl = data[i].html_url;
  
          

                var repoEl = document.createElement('button');
                repoEl.textContent = repoName;
                repoEl.setAttribute("id", repoName);
                repoEl.setAttribute("url", repoUrl);
              repoEl.setAttribute('class', 'btn btn-outline-secondary btn-block');
            
              
               projectCardApiEl.appendChild(repoEl);
            
          }




          });

          
        } else {
          alert('Error: ' + response.statusText);
        }
      })
      .catch(function (error) {
        alert('Unable to connect to GitHub');
      });
  }; 

  getRepos();
    }














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
  }
