const DropDown = document.getElementById("DropDown");
const SideBar = document.getElementById("SideBar");
const Overlay = document.getElementById("Overlay");


const Close = document.getElementById("Close");
    
    DropDown.addEventListener('click', function() {
        SideBar.classList.add('Show');
        Overlay.classList.add('Show');
});

    Close.addEventListener('click', function() {
        SideBar.classList.remove('Show');
        Overlay.classList.remove('Show');
});

const currentPage = window.location.pathname.split("/").pop();
const links = document.querySelectorAll("nav a");

links.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.classList.add("Show");
    }
});