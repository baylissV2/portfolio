var skilltitles = document.getElementsByClassName("skill-titles");
var tabcontents = document.getElementsByClassName("tab-contents");

function dev(tabname) {
    for (skilltitle of skilltitles) {
        skilltitle.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

