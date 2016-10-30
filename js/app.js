// JavaScript source code


function toggleColumnVisibility(col) {
    var tbl = document.getElementById('dataTable');
    var col = document.getElementsByTagName('col')[col];
    if (col) {
        if (col.style.visibility === "collapse") {
            col.style.visibility = "";
        } else {
            col.style.visibility = "collapse";
        }     
    }
}