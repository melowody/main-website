let data = [
    {
        "name": "scoville network",
        "caption": "scoville network is a 1.12 parkour server created by <a href=\"https://twitter.com/Zpicy88\">zpicy</a>, me, and some of our friends. it started as a small side project but quickly became an ambitious project that we're very happy to have released.",
        "img": "scoville.png",
        "range": "jun 2018 - present",
        "access": "ip: scoville.network"
    },
    {
        "name": "gd archives",
        "caption": "gd archives is an archival channel run by me, zpicy, closetta, and a few others. it aims to archive every rated level in geometry dash ordered by id in a neat, organized fashion that makes it easy for anyone to find the levels they want.",
        "img": "gdarchives.png",
        "range": "jan 2022 - present",
        "access": "link: <a href=\"https://www.youtube.com/@gdarchives\">youtube</a>"
    },
    {
        "name": "gd heardle",
        "caption": "gd heardle is a heardle clone with songs found in popular geometry dash levels. it has over a years' worth of content, and a variety of difficulty. it can be songs as common as xtrullor's supernova, to zombie attack by spline.",
        "img": "gdheardle.png",
        "range": "jul 2022 - jul 2022",
        "access": "link: <a href=\"gd-heardle.glitch.me/\">gd heardle</a>"
    },
    {
        "name": "vigènere cipher",
        "caption": "a custom ktane module that is based heavily on the vigènere cipher. it's a very simple module i made to try out unity, and it's been updated it throughout the years to add qol changes and make it more accessible to everyone.",
        "img": "vigenerecipher.png",
        "range": "jul 2019 - dec 2021",
        "access": "link: <a href=\"https://steamcommunity.com/sharedfiles/filedetails/?id=1809303027\">workshop</a>"
    }
]

var currState;

function mod(n, m) {
    return ((n % m) + m) % m;
}

function setImage(projectData) {
    var image = projectData["img"];
    $("#project-image").attr("src", `./img/projects/${image}`);
}

function setTitle(projectData) {
    var title = projectData["name"];
    $("#project-text").find("h1")[0].innerHTML = title;
}

function setCaption(projectData) {
    var caption = projectData["caption"];
    $("#project-text").find("p")[0].innerHTML = caption;
}

function setInfo(projectData) {
    $("#project-text").find("h1")[1].innerHTML = "working range: " + projectData["range"];
    $("#project-text").find("h1")[2].innerHTML = projectData["access"];
}

function setData(index) {
    projectData = data[index];
    setImage(projectData);
    setTitle(projectData);
    setCaption(projectData);
    setInfo(projectData);
}

$(document).ready(function() {
    currState = 0;
    setData(currState);
});

function prevProject() {
    currState = mod((currState - 1), data.length);
    setData(currState);
}

function nextProject() {
    currState = mod((currState + 1), data.length);
    setData(currState);
}