const githuburl = "https://api.github.com/users/vinidotruan";

const projects = [
  { 
    url: "https://github.com/vinidotruan/game-of-life", 
    image: "https://raw.githubusercontent.com/vinidotruan/game-of-life/refs/heads/main/solo.gif",
    title: "Game of Life 👾",
    description: "Um jogo da vida pra testar minhas habilidades em golang e raylib.",
  },{ 
    url: "https://github.com/vinidotruan/game-of-life", 
    image: "https://raw.githubusercontent.com/vinidotruan/game-of-life/refs/heads/main/solo.gif",
    title: "Game of Life 👾",
    description: "Teste 02",
  },{ 
    url: "https://github.com/vinidotruan/game-of-life", 
    image: "https://raw.githubusercontent.com/vinidotruan/game-of-life/refs/heads/main/solo.gif",
    title: "Game of Life 👾",
    description: "Teste 03",
  }
];
fetch(githuburl)
  .then(data => data.json())
  .then(data => {
    loadImage(data);
    console.log(data.name)
    setName(data.name)
    setBio(data.bio)
    loadProjects()
  });

function loadImage(data) {
  const img = document.getElementById("img");
  img.src = data.avatar_url;
}

function setName(name) {
  const nameEl = document.getElementById("name");
  nameEl.innerText = name;
}

function setBio(bio) {
  const bioEl = document.getElementById("bio");
  bioEl.innerText = bio;
}

function loadProjects() {
  const projectsEl = document.getElementById("projects");
  projects.forEach((value) => {
    console.log(value)
    const wrapper = document.createElement("div");
    const imgWrapper = document.createElement("div");
    const descriptionWrapper = document.createElement("div");
    const descriptionEl = document.createElement("p");
    const descriptionTitleEl = document.createElement("h3");


    wrapper.className = "wrapper";

    imgWrapper.className = "img-wrapper";
    imgWrapper.style.backgroundImage = `url(${value.image})`;

    descriptionWrapper.className = "description";
    descriptionEl.innerText = value.description;
    descriptionTitleEl.innerText = value.title;

    descriptionWrapper.appendChild(descriptionTitleEl);
    descriptionWrapper.appendChild(descriptionEl);
    wrapper.appendChild(imgWrapper);
    wrapper.appendChild(descriptionWrapper);

    projectsEl.appendChild(wrapper)
  });
}

