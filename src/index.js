let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  displayAddToyForm();

  fetch("http://localhost:3000/toys")
    .then(response => response.json())
    .then(toys => renderToys(toys))
  });




function displayAddToyForm() {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  const toyForm = document.querySelector(".add-toy-form");
  //console.log(toyForm)
  let addToy = false;


  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
  toyForm.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log("you submitted")
    const toyCollection = document.getElementById("toy-collection")
    const toyName = document.createElement("h2")
    const newToy = document.createElement("div")
    const toyImg = document.createElement("img")
    newToy.className = "card"
  })
}





function renderToys (toyArray) {
  
//console.log(toyArray)
  toyArray.forEach((toy) => {
    //console.log(toy)

    const toyCard = document.createElement("div")
    const toyCollection = document.getElementById("toy-collection")
    const toyName = document.createElement("h2")
    const toyImg = document.createElement("img")
    const toyLikes = document.createElement("p")
    const likeButton = document.createElement("button")

    toyCard.className = "card"
    toyName.innerText = toy.name

    toyImg.src = toy.image
    //debugger;
    toyImg.className = "toy-avatar"
    toyLikes.innerText = `${toy.likes} likes`
    likeButton.className = "like-btn"
    likeButton.innerText = "Like This"

    toyCard.append(toyName, toyImg, toyLikes, likeButton)
    toyCollection.append(toyCard)
    
  })
  
}

function addNewToy() {
  
}

