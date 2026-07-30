let path = window.location.hash.replace("#","") || "/";

fetch("https://api.rushings.xyz/page" + path)
.then(r => r.text())
.then(html => {
    document.body.innerHTML = html;
})
.catch(() => {
    document.body.innerHTML = "Failed loading page";
});
