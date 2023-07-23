let changeTheme = document.getElementById("changeTheme");

changeTheme.onclick = function(){
    let theme = document.getElementById("theme");

    if (theme.getAttribute("href") == "light.css") {
        theme.href = "dark.css"
    }
}