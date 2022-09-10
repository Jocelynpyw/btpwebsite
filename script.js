// the annimatoon script of the visible and unvisible dom's elements

const ratio = 0.1;
const options = {
  root: null,
  rootMargin: "0px",
  threshold: ratio,
};

const handleIntersect = function (entries, observer) {
  entries.forEach(function (entry) {
    if (entry.intersectionRatio > ratio) {
      entry.target.classList.add("reveal-visible");
      observer.unobserve(entry.target);
      // console.log("visible");
    } else {
      console.log("Invibles");
    }
  });
};
const observer = new IntersectionObserver(handleIntersect, options);
document.querySelectorAll(".reveal").forEach(function (r) {
  observer.observe(r);
});
document.querySelectorAll(".reveal-2").forEach(function (r) {
  observer.observe(r);
});
document.querySelectorAll(".reveal-2").forEach(function (r) {
  observer.observe(r);
});
document.querySelectorAll(".reveal-3").forEach(function (r) {
  observer.observe(r);
});

var videoPlayer = document.getElementById("videoPlayer");
var myVideo = document.getElementById("myVideo");
var fabars = document.getElementById("fabarid");
var closeSidebarContaine = document.getElementById("close-sidebar-containe");
var itemSidebar = document.querySelectorAll(".sidebar-container-item");
function stopVideo() {
  videoPlayer.style.display = "none";
}
function startVideo(file) {
  myVideo.src = file;
  videoPlayer.style.display = "block";
  function moi() {
    //  alert('moi')
  }
}
fabars.addEventListener("click", showSideBar);
function showSideBar() {
  document.getElementById("sidebarIdContainer").style.display = "flex";
}
closeSidebarContaine.addEventListener("click", hideSideBar);
function hideSideBar() {
  document.getElementById("sidebarIdContainer").style.display = "none";
}

for (var i = 0; i <= itemSidebar.length; i++) {
  itemSidebar[i].addEventListener("click", premi);
}

function premi() {
  document.getElementById("sidebarIdContainer").style.display = "none";
}
