let path = window.location.hash.replace("#","") || "/";

fetch("https://api.rushings.xyz/page" + path)
.then(response => response.text())
.then(html => {

    document.getElementById("app").innerHTML = html;

})
.catch(error => {

    document.getElementById("app").innerHTML =
    "Failed loading page";

});
