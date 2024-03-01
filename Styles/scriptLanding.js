// DownLoad Button Effect On Hover...

var downloadButton = document.querySelector(".downloadButtonText");

downloadButton.addEventListener("mouseover", function () {
    downloadButton.innerHTML = "Download!";
});

downloadButton.addEventListener("mouseout", function () {
    downloadButton.innerHTML = "Play Free!";
})

// Search Icon Effect ON Clicking it...
var searchBar = document.querySelector(".searchBar");
var searchIcon = document.querySelector(".searchIcon");

var isVisible = false;

searchIcon.addEventListener("click", function () {
    if (isVisible == false) {
        searchBar.style.opacity = 1;
        searchBar.style.width = "13vw";
        isVisible = true;
    }
    else {
        searchBar.style.opacity = 0;
        searchBar.style.width = "0vw";
        isVisible = false;
    }
})

// Logo Change On Hover...
var LogoWhite = document.querySelector(".navbarLogo1white");
var LogoRed = document.querySelector(".navbarLogo1red");

LogoWhite.addEventListener("mouseover", function() {
    LogoWhite.style.display = "none";
    LogoRed.style.display = "block";
})

LogoRed.addEventListener("mouseout", function() {
    LogoRed.style.display = "none";
    LogoWhite.style.display = "block";
})

// Login / Create Account Button Effect...
var createAcc = document.querySelector(".createAcc");

createAcc.addEventListener("mouseover", function () {
    createAcc.innerHTML = "Login <i class='ri-lock-2-line loginIcon'></i>";
});

createAcc.addEventListener("mouseout", function () {
    createAcc.innerHTML = "Create Acc.";
});