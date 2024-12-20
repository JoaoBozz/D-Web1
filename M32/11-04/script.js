const menuIcon = document.querySelector("#menuicon");
const closeIcon = document.querySelector("#closeicon");
const sidebar = document.querySelector("#sidebar");

menuIcon.addEventListener("click", showSidebar);
closeIcon.addEventListener("click", hideSidebar);

function showSidebar() {
    sidebar.style.right = "0";
}

function hideSidebar() {
    sidebar.style.right = "-100%";
}

