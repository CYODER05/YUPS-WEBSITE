function openNav() {
  document.getElementById("sidebar").style.width = "100vw";
  document.getElementById("open-sidebar").style.display = "none";
  document.getElementById("page-content").style.position = "fixed";
}

function closeNav() {
  document.getElementById("sidebar").style.width = "0";
  document.getElementById("open-sidebar").style.display = "initial";
  document.getElementById("page-content").style.position = "initial";
}