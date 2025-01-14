const githuburl = "https://api.github.com/users/vinidotruan";

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
  fetch("./data.json")
    .then(response => response.json())
    .then(projects => {
      projects.forEach((value) => {
        const wrapper = document.createElement("div");
        const imgWrapper = document.createElement("div");
        const descriptionWrapper = document.createElement("div");
        const descriptionEl = document.createElement("p");
        const descriptionTitleEl = document.createElement("h3");
        const labels = value.labels;
        const labelsWrapper = document.createElement("div");

        wrapper.onclick = () => window.open(value.url, 'blank');
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

        labelsWrapper.className = "label-wrapper";

        labels.forEach(label => {
          const labelEl = document.createElement("small");
          labelEl.innerText = label;
          labelsWrapper.appendChild(labelEl);
        })
        
        wrapper.appendChild(labelsWrapper);
        projectsEl.appendChild(wrapper)
      });
  });
}

