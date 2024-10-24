const hamburgerIcon = document.querySelector("#hamburgerIcon")
const closeIcon = document.querySelector("#closeIcon")

// Associar funções aos eventos dos elementos HTML
hamburgerIcon.addEventListener("click", showSidebar)
closeIcon.addEventListener("click", hideSidebar)

// Funções para abrir e fechar o sideBar
function showSidebar(){
    const sidebar = document.querySelector("#sidebar");
    sidebar.style.display = "flex";
    console.log("teste")
}

function hideSidebar(){
    const sidebar = document.querySelector("#sidebar");
    sidebar.style.display = "none";
}