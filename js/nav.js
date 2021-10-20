const navs = [
    {
        Text: "Home",
        Url: "index.html",
        Class: "index.html"
    },
    {
        Text: "teams generator",
        Url: "teams.html",
        Class: "nav-link"
    }
]

const navBarMarkup = navs.map(nav => `<li class="navLink"><a href="${nav.Url}" class="${nav.Class}">${nav.Text}</a></li>`).join(' ');

document.getElementById("primaryNav").innerHTML = navBarMarkup;