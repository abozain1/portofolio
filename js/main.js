// SHOW LINKS
const showLinks = (icon, listLinks) => {
  const toggle = document.querySelector(icon);
  const nav = document.querySelector(listLinks);

  toggle.addEventListener("click", () => nav.classList.toggle("show"));

  document.addEventListener("click", (e) => {
    e.target.className !== "icon" && e.target.className !== "icon-shape"
      ? nav.classList.remove("show")
      : false;
  });
};

showLinks(".icon", ".list-links");

// SHOW LINKS ACTIONS
function showActions() {
  const links = document.querySelectorAll(".list-links a");
  links.forEach((link) => link.classList.remove("active"));
  this.classList.add("active");

  const nav = document.querySelector(".list-links");
  nav.classList.remove("show");
}

const links = document.querySelectorAll(".list-links a");
links.forEach((link) => link.addEventListener("click", showActions));

// DARK MODE SETTINGS
let modeToggle = document.getElementById("dark-mode-toggle");
let dark_on = localStorage.getItem("dark_on")
  ? JSON.parse(localStorage.getItem("dark_on"))
  : false;

let dark = "#051e34";
let light = "#f6f7f9";

const setMode = (colorLight, colorDark, darkOn) => {
  document.documentElement.style.setProperty("--second-color", colorLight);
  document.documentElement.style.setProperty("--light-color", colorDark);
  dark_on = darkOn;
  localStorage.setItem("dark_on", JSON.stringify(dark_on));
};

modeToggle.addEventListener("click", (e) => {
  dark_on ? setMode(dark, light, false) : setMode(light, dark, true);
  e.target.classList.toggle("bxs-sun");
});

// SET MODE AFTER RELOAD PAGE FROM LOCAL STORAGE
if (dark_on) {
  setMode(light, dark, true);
  modeToggle.classList.toggle("bxs-sun");
}

// DISPLAY SKILLS
let skills = [
  { name: "HTML", icon: "bx bxl-html5" },
  { name: "CSS", icon: "bx bxl-css3" },
  { name: "JAVASCRIPT", icon: "bx bxl-javascript" },
  { name: "JQUERY", icon: "bx bxl-jquery" },
  { name: "REACT JS", icon: "bx bxl-react" },
  { name: "REDUX & Next JS ", icon: "bx bxl-redux" },
  { name: "SASS", icon: "bx bxl-sass" },
  { name: "BOOTSTRAP", icon: "bx bxl-bootstrap" },
  { name: "JSON & AJAX & AXIOS", icon: "bx bxs-file-json" },
  { name: "GIT & GITHUB", icon: "bx bxl-github" },
  
];


let skillsContentDOM = document.querySelector(".skills-content");

const displaySkills = () => {
  const display = skills.map((skill) => {
    return `
      <div class="skills-box line-swaping">
        <i class="${skill.icon}"></i>
        <span>${skill.name}</span>
      </div>
      `;
  });

  skillsContentDOM.innerHTML = display.join("");
};

displaySkills();

// DISPLAY PORTFOLIO PROJECTS
let projects = [
  {
    name: "OMN(ui)",
    img: "images/OMN.png",
    link: "https://omn-alpha.netlify.app/",
  },
  {
    name: "Architect(ui)",
    img: "images/Architect.png",
    link: "https://architect-alpha.netlify.app/",
  },
  {
    name: "Admin app(React)",
    img: "images/Admin.png",
    link: "https://admino.netlify.app/home",
  },
  {
    name: "Diagram(React)",
    img: "images/Diagram.png",
    link: "https://diagramo.netlify.app/",
  },
  {
    name: "Store(React)",
    img: "images/Store.png",
    link: "https://speedstore.netlify.app/",
  },
  
  {
    name: "Library(React)",
    img: "images/Library.png",
    link: "https://library-alpha.netlify.app/",
  },
];

let projectsContentDOM = document.querySelector(".portfolio-content");

const displayProjects = () => {
  const display = projects.map((project) => {
    return `
            <div class="project-box">
              <div class="project-image">
                <img src="${project.img}" alt="project-image" />
                <div class="project-overlay">
                  <div class="project-details">
                    <a href="${project.link}" class="button" target="_blank"> preview </a>
                    <p>${project.name}</p>
                  </div>
                </div>
              </div>
          </div>
      `;
  });

  projectsContentDOM.innerHTML = display.join("");
};

displayProjects();
let cert = [
  {
    name: "HackerRank",
    img: "images/HackerRank.png",
    link: " https://www.hackerrank.com/certificates/6103bafeffe1",
  },
  {
    name: "TESTDOME",
    img: "images/TESTDOME.png",
    link: "https://app.testdome.com/cert/3e56756e45774d3188ca7785fb35ddf8 ",
  },
  {
    name: "egfwd",
    img: "images/egfwd.png",
    link: "https://drive.google.com/file/d/1ABJOWLe7S7WuUQmwo_MJwr-v2zVwQgP_/view?usp=sharing ",
  },
  
];

let certContentDOM = document.querySelector(".cert-content");

const displaycert = () => {
  const display = cert.map((project) => {
    return `
            <div class="project-box">
              <div class="project-image">
                <img src="${project.img}" alt="project-image" />
                <div class="project-overlay">
                  <div class="project-details">
                    <a href="${project.link}" class="button" target="_blank"> preview </a>
                    <p>${project.name}</p>
                  </div>
                </div>
              </div>
          </div>
      `;
  });

  certContentDOM.innerHTML = display.join("");
};

displaycert();

// SCROLL REVEAL ANIMATION
const sr = ScrollReveal({
  origin: "top",
  distance: "100px",
  duration: 2000,
  // reset: true,
});
const sl = ScrollReveal({
  origin: "left",
  distance: "100px",
  duration: 2000,
  // reset: true,
});

// HOME SCROLL REVEAL
sr.reveal(".home-desc", {});
sr.reveal(".home-social li", { interval: 200 });
sr.reveal(".home-img", { delay: 300 });

// SKILLS SCROLL REVEAL
sl.reveal(".skills", {});

// PORTFOLIO SCROLL REVEAL
sr.reveal(".portfolio", {interval: 2000 });
sr.reveal(".cert", {interval: 2000 });
