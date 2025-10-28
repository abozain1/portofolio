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
  { name: "JAVASCRIPT", icon: "logos:javascript" },
  { name: "TYPESCRIPT", icon: "logos:typescript-icon" },
  { name: "REACT", icon: "logos:react" },
  { name: "Next  ", icon: "cib:next-js" },
  { name: "ANGULAR", icon: "logos:angular-icon" },
  { name: "HTML", icon: "vscode-icons:file-type-html" },
  { name: "CSS", icon: "vscode-icons:file-type-css" },
  { name: "Node", icon: "vscode-icons:file-type-node" },
  { name: "MongoDb", icon: "simple-icons:mongodb" },
  { name: "Express", icon: "simple-icons:express" },
  { name: "SASS", icon: "logos:sass" },
  { name: "GIT & GITHUB", icon: "akar-icons:github-fill" },
  { name: "JQUERY", icon: "mdi:jquery" },
  { name: "BOOTSTRAP", icon: "logos:bootstrap" },
  { name: "JSON & AJAX & AXIOS", icon: "bx:bxs-file-json" },
];

let skillsContentDOM = document.querySelector(".skills-content");

const displaySkills = () => {
  const display = skills.map((skill) => {
    return `
        <div class="skills-box line-swaping">
        <span class="iconify" data-icon="${skill.icon}" data-width="30"></span>
          <span>${skill.name}</span>
        </div>
        `;
  });

  skillsContentDOM.innerHTML = display.join("");
};

displaySkills();

// display experience
let experience = [
  {
    image: "images/uberall.jpeg",
    title: "Senior Frontend Developer",
    from: "Nov 2024",
    to: "Present",
    companyColor: "#7922f6",
    company: "Uberall",
    powerPoints: [
      "maintained multiple customer-facing products (MomentFeed Locator, Self-Service Locator, Social Post Widget) across independent React and Angular codebases",
      "Delivered a major Accessibility Epic, implementing WCAG-compliant UI components across applications to improve inclusivity and compliance",
      "optimized the Flexible Store Finder widget, enabling configurable store discovery and seamless enterprise integrations",
    ],
  },
  {
    image: "images/noon.jpeg",
    title: "Senior Frontend Developer",
    from: "Nov 2023",
    to: "Nov 2024",
    companyColor: "#FFC107",
    company: "noon",
    powerPoints: [
      "Developing noon internal app Cheesecake",
      "Developing noon Minutes",
      "Collaborated with cross-functional teams in multiple regions to deliver robust solutions",
    ],
  },
  {
    image: "images/Reach.jpeg",
    title: "Senior Frontend Developer",
    from: "Nov 2022",
    to: "Nov 2023",
    companyColor: "#0071BD",
    company: "Reach Link",
    powerPoints: [
      "Developing Reach Link web-app",
      "Developing Reach Link admin panel",
    ],
  },
  {
    image: "images/anspire.jpeg",
    title: "Senior Frontend Developer",
    from: "Dec 2021",
    to: "Nov 2022",
    companyColor: "black",
    company: "anspire",
    powerPoints: [
      "Developed Cryptip DashBoard",
      "Developed Kasbana web-app",
      "worked on Exits web-app",
    ],
  },
  {
    image: "images/lun.jpeg",
    title: "FrontEnd Developer",
    from: "Aug 2021",
    to: "Dec 2021",
    companyColor: "#159CA0",
    company: "lun-studio",
    powerPoints: [
      "Developed Shogol Web-App",
      "Created a real-time chat with firebase",
      "Dealt with Php",
    ],
  },
  {
    image: "images/seen.jpeg",
    title: "FrontEnd Developer",
    from: "Oct 2020",
    to: "Aug 2021",
    companyColor: "#6579FA",
    company: "SEEN",
    powerPoints: [
      "Developed BuzzBot Mobile App",
      "Dealt with Sentry, MixPanel and FireBase ",
      "Dealt with TypeScript",
      "Dealt with Odoo",
    ],
  },
  {
    image: "images/owlTech.gif",
    title: "FrontEnd Developer",
    from: "Mar 2020",
    to: "Oct 2020",
    company: "OwlTech",
    companyColor: "#FBC005",
    powerPoints: [
      "Developed the company`s web-app",
      "Developed the company`s mobile app",
      "Dealt with Asp.Net",
    ],
  },
  {
    image: "images/upWork.jpeg",
    title: "FrontEnd Developer",
    from: "Mar 2020",
    to: "Mar 2020",
    company: "Freelance",
    companyColor: "#15A800",
    powerPoints: [
      "fixing bugs ",
      " updating UI/UX",
      "integrating new features",
      "refactoring code to enhance performance",
    ],
  },
];
let expContentDOM = document.querySelector(".exp-content");

const displayExp = () => {
  const display = experience.map((exp) => {
    return `
     
        <div class='flex contain'> 
        <img width='60rem' height='60rem' src='${exp.image}'/>
        <div class=''>
        <p class='title'>${exp.title}</p>
        <p style='color:${exp.companyColor};' class='company'> ${
      exp.company
    }</p>
        <div class='flex date'>
        <p >${exp.from} - </p>
        <p> ${exp.to}</p>
        </div>  
        <ul class='expUl'>
      ${exp.powerPoints.map((ele) => `<li>${ele}</li>`).join("")}
      </ul>  
        </div>
        </div>
      
        `;
  });

  expContentDOM.innerHTML = display.join("");
};

displayExp();
// DISPLAY PORTFOLIO PROJECTS
let projects = [
  {
    name: "OMN(JavaScript-uI)",
    img: "images/OMN.png",
    link: "https://omn-alpha.netlify.app/",
  },
  {
    name: "Architect(JavaScript-uI)",
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
    name: "TODO(TypeScript)",
    img: "images/TODO.png",
    link: "https://todo-alpha.netlify.app/",
  },

  {
    name: "Store(React)",
    img: "images/Store.png",
    link: "https://speedstore.netlify.app/",
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
    name: "REACT",
    img: "images/HackerRank.png",
    link: "https://www.hackerrank.com/certificates/6103bafeffe1",
  },
  {
    name: "PROBLEM SOLVING",
    img: "images/P-S-I.png",
    link: "https://www.hackerrank.com/certificates/e30a2b3c60bd",
  },
  {
    name: "Angular",
    img: "images/angularInter.png",
    link: "https://www.hackerrank.com/certificates/1b32676ad931",
  },
  {
    name: "Angular",
    img: "images/angular.png",
    link: "https://www.hackerrank.com/certificates/d821bcf92140",
  },
  {
    name: "PROBLEM SOLVING",
    img: "images/problem-basic.png",
    link: "https://www.hackerrank.com/certificates/685bc23afa5e",
  },
  {
    name: "FrontEnd",
    img: "images/udacity-pro.png",
    link: "https://confirm.udacity.com/ZSFR6CZK",
  },
  {
    name: "FrontEnd",
    img: "images/TESTDOME.png",
    link: "https://app.testdome.com/cert/3e56756e45774d3188ca7785fb35ddf8 ",
  },
  {
    name: "FrontEnd",
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

// HOME SCROLL REVEAL
sr.reveal(".home-desc", {});
sr.reveal(".home-social li", { interval: 200 });
sr.reveal(".home-img", { delay: 300 });

// SKILLS SCROLL REVEAL
sr.reveal(".skills", { origin: "left" });
sr.reveal("#exp", { origin: "left" });

// PORTFOLIO SCROLL REVEAL
sr.reveal(".portfolio", {});
sr.reveal(".cert", {});

(function () {
  // --- Test controls ---
  const root = document.getElementById("microdata-root");
  const injectBtn = document.getElementById("inject-now");
  const clearBtn = document.getElementById("clear-microdata");

  function injectMicrodata() {
    // This block is proper Microdata for a Person, but injected via JS AFTER load.
    // Some validators that don't fully render JS will miss it.
    root.innerHTML = `
      <div itemscope itemtype="https://schema.org/Person">
        <meta itemprop="name" content="AHmed KHalid">
        <meta itemprop="jobTitle" content="Front End Developer">
        <link itemprop="url" href="https://abozain1.github.io">
        <img itemprop="image" src="./images/Ahmed.jpg" alt="AHmed KHalid" />
        <ul>
          <li><a itemprop="sameAs" href="https://github.com/abozain1?tab=repositories" target="_blank">GitHub</a></li>
          <li><a itemprop="sameAs" href="https://www.linkedin.com/in/ahmed-khalid-0a88b5220/" target="_blank">LinkedIn</a></li>
        </ul>
        <span itemprop="telephone">+201142149319</span>
      </div>
    `;
  }

  function clearMicrodata() {
    root.innerHTML = "";
  }

  // Optional: read ?delay=ms from the URL to change injection timing
  const params = new URLSearchParams(location.search);
  const delay = Number(params.get("delay") || 3000); // default 3s

  // Auto-inject after a delay to simulate "late" DOM changes
  setTimeout(injectMicrodata, delay);

  // Manual controls
  if (injectBtn) injectBtn.addEventListener("click", injectMicrodata);
  if (clearBtn) clearBtn.addEventListener("click", clearMicrodata);
})();
