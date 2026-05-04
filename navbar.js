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
    2
});

const SCROLL_THRESHOLD = 100;

const MHeader = document.getElementById("Mobile_Navbar");
const DHeader = document.getElementById("Navbar");

document.addEventListener('scroll', () => {
    const top = document.documentElement.scrollTop;
    if (top > SCROLL_THRESHOLD) {
        MHeader.classList.add("scrolling");
        DHeader.classList.add("scrolling");
    } else {
        MHeader.classList.remove("scrolling");
        DHeader.classList.remove("scrolling");
    }
})