$(document).ready(function() {
    particlesJS.load('particle-wrapper', 'assets/particles.json', function() {
        console.log('callback - particles.js config loaded');
    });
});

function setCookie(key, value) {
    var expires = new Date();
    expires.setTime(expires.getTime() + (1 * 24 * 60 * 60 * 1000));
    document.cookie = key + '=' + value + ';expires=' + expires.toUTCString();
}

function getCookie(key) {
    var keyValue = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
    return keyValue ? keyValue[2] : null;
}

toTheme = () => [
    {
        items: $(".about-box"),
        prefix: "about-box"
    },
    {
        items: $(".about-image"),
        prefix: "about-image"
    },
    {
        items: $(".about-text"),
        prefix: "about-text"
    },
    {
        items: $("html"),
        prefix: "html"
    },
    {
        items: $("body"),
        prefix: "body"
    },
    {
        items: $(".title-text"),
        prefix: "title-text"
    },
    {
        items: $(".header"),
        prefix: "header"
    },
    {
        items: $(".header-links-item"),
        prefix: "header-links-item"
    },
    {
        items: $(".header-socials-item"),
        prefix: "header-socials-item"
    },
    {
        items: $("#project-box"),
        prefix: "project-box"
    },
    {
        items: $(".project-image-container"),
        prefix: "project-image-container"
    },
    {
        items: $("#project-text"),
        prefix: "project-text"
    },
    {
        items: $("#theme-svg-container"),
        prefix: "theme-svg-container"
    },
    {
        items: $("#theme-slider-container"),
        prefix: "theme-slider-container"
    }
];

function enableDarkTheme() {
    toTheme().forEach(element => {
        let items = element["items"];
        items.removeClass(`${element["prefix"]}-light`);
        items.addClass(`${element["prefix"]}-dark`);
        console.log(items);
    });
    setCookie("darkMode", 1);
}

function disableDarkTheme() {
    toTheme().forEach(element => {
        let items = element["items"];
        items.removeClass(`${element["prefix"]}-dark`);
        items.addClass(`${element["prefix"]}-light`);
        console.log(items);
    });
    setCookie("darkMode", 0);
}

function toggleDarkTheme() {
    let cookie = getCookie("darkMode");
    if (cookie == 1) {
        disableDarkTheme();
    } else {
        enableDarkTheme();
    }
}

$(document).ready(function() {
    let cookie = getCookie("darkMode");
    if (cookie == 1) {
        enableDarkTheme();
        $("#theme-switch-checkbox").attr("checked", "checked");
    } else {
        disableDarkTheme();
    }
})