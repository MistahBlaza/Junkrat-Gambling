
function gotolink(url) {
    window.open(url, '_blank').focus();
}
const url = [
    "https://overwatch.fandom.com/wiki/D.Va",
    "https://overwatch.fandom.com/wiki/Domina",
    "https://overwatch.fandom.com/wiki/Doomfist",
    "https://overwatch.fandom.com/wiki/Hazard",
    "https://overwatch.fandom.com/wiki/Junker_Queen",
    "https://overwatch.fandom.com/wiki/Mauga",
    "https://overwatch.fandom.com/wiki/Orisa",
    "https://overwatch.fandom.com/wiki/Ramattra",
    "https://overwatch.fandom.com/wiki/Reinhardt",
    "https://overwatch.fandom.com/wiki/Roadhog",
    "https://overwatch.fandom.com/wiki/Sigma",
    "https://overwatch.fandom.com/wiki/Winston",
    "https://overwatch.fandom.com/wiki/Wrecking_Ball",
    "https://overwatch.fandom.com/wiki/Zarya",
    "https://overwatch.fandom.com/wiki/Anran",
    "https://overwatch.fandom.com/wiki/Ashe",
    "https://overwatch.fandom.com/wiki/Bastion",
    "https://overwatch.fandom.com/wiki/Cassidy",
    "https://overwatch.fandom.com/wiki/Echo",
    "https://overwatch.fandom.com/wiki/Emre",
    "https://overwatch.fandom.com/wiki/Freja",
    "https://overwatch.fandom.com/wiki/Genji",
    "https://overwatch.fandom.com/wiki/Hanzo",
    "https://overwatch.fandom.com/wiki/junkrat",
    "https://overwatch.fandom.com/wiki/Mei",
    "https://overwatch.fandom.com/wiki/Pharah",
    "https://overwatch.fandom.com/wiki/Reaper",
    "https://overwatch.fandom.com/wiki/Shion",
    "https://overwatch.fandom.com/wiki/Sierra",
    "https://overwatch.fandom.com/wiki/Sojourn",
    "https://overwatch.fandom.com/wiki/Soldier:_76",
    "https://overwatch.fandom.com/wiki/Sombra",
    "https://overwatch.fandom.com/wiki/Symmetra",
    "https://overwatch.fandom.com/wiki/Torbjörn",
    "https://overwatch.fandom.com/wiki/Tracer",
    "https://overwatch.fandom.com/wiki/Vendetta",
    "https://overwatch.fandom.com/wiki/Venture",
    "https://overwatch.fandom.com/wiki/Widowmaker",
    "https://overwatch.fandom.com/wiki/Ana",
    "https://overwatch.fandom.com/wiki/Baptiste",
    "https://overwatch.fandom.com/wiki/Brigitte",
    "https://overwatch.fandom.com/wiki/Illari",
    "https://overwatch.fandom.com/wiki/Jeptack_Cat",
    "https://overwatch.fandom.com/wiki/Juno",
    "https://overwatch.fandom.com/wiki/Kiriko",
    "https://overwatch.fandom.com/wiki/Lifeweaver",
    "https://overwatch.fandom.com/wiki/Lucio",
    "https://overwatch.fandom.com/wiki/mercy",
    "https://overwatch.fandom.com/wiki/Mizuki",
    "https://overwatch.fandom.com/wiki/Moira",
    "https://overwatch.fandom.com/wiki/Wuyang",
    "https://overwatch.fandom.com/wiki/Zenyatta",
    "https://www.youtube.com/watch?v=QDia3e12czc",




]

function getraondomlink() {
    return url[Math.floor(Math.random() * url.length)]

}

document.getElementById("Destiny").addEventListener("click", () => {
    gotolink(getraondomlink())
})


const RandomButton = document.getElementById("Random-button")
RandomButton.addEventListener("mouseenter", () => {
    RandomButton.style.position = "fixed"
    RandomButton.style.top = Math.random() * (window.innerHeight - RandomButton.getBoundingClientRect().height)
    RandomButton.style.left = Math.random() * (window.innerWidth - RandomButton.getBoundingClientRect().width)
    RandomButton.style.right="auto"
})
RandomButton.addEventListener("focus", () => {
 gotolink("https://alwaysjudgeabookbyitscover.com")
 RandomButton.blur()
})
