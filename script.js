
const bioCard = document.getElementById("card1");

bioCard.onclick = function displayBioCard() {
    bioCard.style.backgroundImage = "none";
    bioCard.style.color = "black";
    bioCard.textContent = "This is my Bio Card. There will be lots of good content here.";
bioCard.setAttribute("status", "clicked");
}

