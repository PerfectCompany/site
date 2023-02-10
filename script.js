button_shop = document.querySelector("#button_shop");
button_music = document.querySelector("#button_music");
button_events = document.querySelector("#button_events");
button_courses = document.querySelector("#button_courses");
block_shop = document.querySelector("#block_shop");
block_music = document.querySelector("#block_music");
block_events = document.querySelector("#block_events");
block_courses = document.querySelector("#block_courses");
if (localStorage.perfectlang == "en"){
    lang = localStorage.perfectlang;
}
else if (localStorage.perfectlang == "ua"){
    lang = localStorage.perfectlang;
}
else if (localStorage.perfectlang == "ru"){
    lang = localStorage.perfectlang;
}
else {
    lang = "ua";
    localStorage.perfectlang = lang
}
if (lang=="ua"){
    localStorage.perfectlang2 = 0
}
else if (lang=="en"){
    localStorage.perfectlang2 = 1
}
else if (lang=="ru"){
    localStorage.perfectlang2 = 2
}

function updateLang() {
    localStorage.perfectlang = lang
    if (lang == "ru") {
        button_shop.innerHTML = '<a href="shop.html">Магазин</a>';
        button_music.innerHTML = '<a href="music.html">Музыка</a>';
        button_events.innerHTML = '<a href="events.html">События</a>';
        button_courses.innerHTML = '<a href="courses.html">Курсы</a>';
    }
    else if (lang == "ua") {
        button_shop.innerHTML = '<a href="shop.html">Магазин</a>';
        button_music.innerHTML = '<a href="music.html">Музика</a>';
        button_events.innerHTML = '<a href="events.html">Події</a>';
        button_courses.innerHTML = '<a href="courses.html">Курси</a>';
    }
    else if (lang == "en") {
        button_shop.innerHTML = '<a href="shop.html">Shop</a>';
        button_music.innerHTML = '<a href="music.html">Music</a>';
        button_events.innerHTML = '<a href="events.html">Events</a>';
        button_courses.innerHTML = '<a href="courses.html">Courses</a>';
    }
}
function changeLang(lan) {
    lang = lan;
    updateLang();
}
updateLang();