console.log("check");
var i = 0

// Elements:
const intro = document.querySelector(".header");
const video = document.getElementById("video");
const about = document.querySelector(".footer");
const bintro = document.getElementById("intro_button");
const bvid = document.getElementById("vid_button");
const babout = document.getElementById("about_button");
const dimmer = document.getElementById("dim");
const vidbody = document.querySelector(".video");
// let img = document.getElementsByClassName("carousel_image")[-1];
let img = document.querySelector(".carousel_image");
let images = ["first.jpg","second.jpg","third.jpg"];
// let img = document.querySelectorAll(".carousel_image")[-1];


// console.log(img);


//Functions:
function scrollIntro() {intro.scrollIntoView()};
function scrollVid() {video.scrollIntoView()};
function scrollAbout() {about.scrollIntoView()};

function dimOn() {dimmer.style.display = "block"};
function dimOff() {dimmer.style.display = "none"};

function swap(a) {
    if (a == 0) { // previous button
        if (i == 0) {img.setAttribute("src","./src/third.jpg"); i=2}
        else if (i == 1) {img.setAttribute("src","./src/first.jpg");i--}
        else {img.setAttribute("src","./src/second.jpg");i=1}
    }
    else if (a == 1) { // next button
        if (i == 0) {img.setAttribute("src","./src/second.jpg"); i++}
        else if (i == 1) {img.setAttribute("src","./src/third.jpg");i++}
        else {img.setAttribute("src","./src/first.jpg");i=0}
        // console.log(i)
    };
}


// Event listeners:
bintro.addEventListener('mouseover', () => {bintro.style.backgroundColor = "black"});
bvid.addEventListener('mouseover', () => {bvid.style.backgroundColor = "black"});
babout.addEventListener('mouseover', () => {babout.style.backgroundColor = "black"});
bintro.addEventListener('mouseout', () => {bintro.style.backgroundColor = "violet"});
bvid.addEventListener('mouseout', () => {bvid.style.backgroundColor = "violet"});
babout.addEventListener('mouseout', () => {babout.style.backgroundColor = "violet"});

window.addEventListener('scroll', () => {
    var scrolled = window.scrollY;
    if (scrolled <= 300) {vidbody.style.backgroundColor = "rgb(255, 166, 79)"}
    else if (scrolled > 300 && scrolled <= 600) {vidbody.style.backgroundColor = "rgb(255, 204, 102)"}
    else if (scrolled > 600 && scrolled <= 900) {vidbody.style.backgroundColor = "rgb(130, 178, 232)"}
    else if (scrolled > 900 && scrolled <= 1200) {vidbody.style.backgroundColor = "rgb(251, 144, 98)"}
    else if (scrolled > 1200 && scrolled <= 1500) {vidbody.style.backgroundColor = "rgb(206, 73, 147)"}
    else {vidbody.style.backgroundColor = "rgb(106, 13, 131)"};
    // console.log(scrollY);
});







    // let src = img.getAttribute("src");
    // if (src == "./src/last.jpg" && img.style.display != "none") {
    //     for (var i in images) {i.style.display = "block"}
    // }
    // if (src == "./src/first.jpg") {img.setAttribute("hidden","hidden")}
    // else if (src == "./src/second.jpg") {img.setAttribute("hidden","hidden")}
    // else if (src == "./src/third.jpg") {img.setAttribute("hidden","hidden")}
    // else {img.setAttribute("hidden","hidden"); alert("no source")}