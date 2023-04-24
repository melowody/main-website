var song1;
var song2;
var data;

function saveJson() {
    $.ajax
        ({
            type: "POST",
            dataType: "json",
            async: true,
            url: "../php/writeJSON.php",
            data: { data: JSON.stringify(data, null, 4) },
            failure: function () {alert("Error!");}
        });
}

function incrementTotalVotes(name) {
    let songIndex = data.findIndex((obj => obj.name == name));
    data[songIndex].totalVotes += 1;
}

function incrementVote(name) {
    let songIndex = data.findIndex((obj => obj.name == name));
    data[songIndex].votes += 1;
}

function displaySongs() {
    song1 = data[Math.floor(Math.random()*data.length)];
    $("#song-left .title").html(song1.name);
    $("#song-left .subtitle").html(`by ${song1.composer} ${song1.arranger == null ? '' : `<br />arr. ${song1.arranger}`}`);
    $("#song-left iframe").attr('src', `//www.youtube.com/embed/${song1.url}`);

    song2 = data[Math.floor(Math.random()*data.length)];
    $("#song-right .title").html(song2.name);
    $("#song-right .subtitle").html(`by ${song2.composer} ${song2.arranger == null ? '' : `<br />arr. ${song2.arranger}`}`);
    $("#song-right iframe").attr('src', `//www.youtube.com/embed/${song2.url}`);
}

function loadData() {
    $.getJSON("./js/songs.json", function(json) {
        data = json;
        console.log(data);
    }).done(function () {
        console.log("Balls");
        displaySongs();
    });
}

$(document).ready(function() {
    loadData();

    $("#song-left").click(function(e) {
        let name = $("#song-left .title").text();
        let name2 = $("#song-right .title").text();
        incrementVote(name);
        incrementTotalVotes(name);
        incrementTotalVotes(name2);
        saveJson();
        displaySongs();
    })
    $("#song-right").click(function(e) {
        let name = $("#song-left .title").text();
        let name2 = $("#song-right .title").text();
        incrementVote(name2);
        incrementTotalVotes(name2);
        incrementTotalVotes(name);
        saveJson();
        displaySongs();
    })
});