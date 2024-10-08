let projects = {
  "Sleep Analysis": [
    1,
    "Sleep Analysis app desc",
    "https://www.figma.com/design/roLvjduoLSCJ04636HfJcl/Untitled?node-id=1-2&m=dev&t=LUDiDn4tkx9FJ6Ox-1",
    "/images/load.gif",
  ],
  Pilly: [2, "Pilly desc", "https://www.figma.com/design/Ytlajbxfj1NCoFvZmnXKgE/Pilly?node-id=0-1&m=dev&t=bLych24l3wman2kq-1", "/images/PillyPreview.png"],
  "Mood Search - Aritzia Extension ": [
    3,
    "Mood search desc",
    "https://www.figma.com/design/1CUP0BkR39jxQvpbzRjMuo/Aritizia-Extension---MoodSearch?node-id=0-1&m=dev&t=8OegB4cJZqudMtSv-1",
    "/images/MoodsearchPreview.png",
  ],
};

const projectDiv = document.getElementById("projectsList");

for (const [key, value] of Object.entries(projects)) {
  let newProj = document.createElement("div");
  newProj.className = "projectsListProject";
  newProj.id = "projectsListProject";

  let projInfo = document.createElement("div");
  projInfo.className = "projectsListProjectInfo";

  let projName = document.createElement("div");
  projName.className = "projectsListProjectName";
  projName.innerHTML = key;

  let projDesc = document.createElement("div");
  projDesc.className = "projectsListProjectDesc";
  projDesc.innerHTML = value[1];

  let projButton = document.createElement("div");
  projButton.className = "projectsListProjectButton";

  let projLink = document.createElement("a");
  projLink.className = "projectsListProjectButtonLink";
  projLink.target = "_blank";
  projLink.href = value[2];
  projLink.innerHTML = "View Project";
  projButton.appendChild(projLink);

  let projImgWrapper = document.createElement("div");
  projImgWrapper.className = "projectsListProjectImgWrapper";

  let projImg = document.createElement("img");
  projImg.className = "projectsListProjectImage";
  projImg.src = value[3];

  projInfo.appendChild(projName);
  projInfo.appendChild(projDesc);
  projInfo.appendChild(projButton);

  projImgWrapper.appendChild(projImg);

  if (value[0] % 2 == 0) {
    projImg.style.borderTopLeftRadius = "24px";
    projImg.style.borderBottomLeftRadius = "24px";
    // projImg.setAttribute("style", "border-top-left-radius: 24px;");
    // projImg.setAttribute("style", "border-bottom-left-radius: 24px;");
    newProj.appendChild(projImgWrapper);
    newProj.appendChild(projInfo);
  } else {
    projImg.style.borderTopRightRadius = "24px";
    projImg.style.borderBottomRightRadius = "24px";
    // projImg.setAttribute("style", "border-top-right-radius: 24px;");
    // projImg.setAttribute("style", "border-bottom-right-radius: 24px;");
    newProj.appendChild(projInfo);
    newProj.appendChild(projImgWrapper);
  }

  projectDiv.appendChild(newProj);
}

let btn = document.getElementById("backToTopButton");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 600 ||
    document.documentElement.scrollTop > 600
  ) {
    btn.style.opacity = "1";
  } else {
    btn.style.opacity = "0";
  }
}

function backToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
