const navs = [
    {
        Text: "Home",
        Url: "index.html",
        Class: "nav-item"
    },
    {
        Text: "teams generator",
        Url: "teams.html",
        Class: "nav-item"
    }
]

const navBarMarkup = navs.map(nav => `<li class="navLink"><a href="${nav.Url}" class="${nav.Class}">${nav.Text}</a></li>`).join(' ');

document.getElementById("navList").innerHTML = navBarMarkup;


const burger = document.getElementById('hamburger');
const nav = document.getElementById('primaryNav');

function toggleNav(){
    burger.classList.toggle('fa-bars');
    burger.classList.toggle('fa-times');
    document.body.classList.toggle('lock-scroll');
    nav.classList.toggle('nav-active');
}

burger.addEventListener('click', function() {
    toggleNav();
});